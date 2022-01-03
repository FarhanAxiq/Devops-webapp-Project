import { useState } from 'react';
import { placeToLatLng, validateLatLng } from '../utils/transformers';
import { reverseGeocode } from '../utils/reverseGeocode';
import { LOG } from '../utils/constants';
import { DEFAULT_STARTING_PLACE } from '../utils/constants';
import * as tripSchema from '../../schemas/TripFile.json';
import * as csvSchema from '../../schemas/csvSchema.json';
import { isJsonResponseValid } from '../utils/restfulAPI';
import { MIME_TYPE } from '../utils/constants';
import { massagePlaces } from '../utils/transformers';


export function usePlaces() {
    const [places, setPlaces] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const context = { places, setPlaces, selectedIndex, setSelectedIndex };

    const placeActions = {
        append: async (place) => append(place, context),
        removeAtIndex: (index) => removeAtIndex(index, context),
        removeAll: () => removeAll(context),
        selectIndex: (index) => selectIndex(index, context),
        moveToHome: async () => moveToHome(context),
        readFile: (fileName, fileObject, props) => readFile(fileName, fileObject, props, context),
        saveFile: (props) => saveFile(props, context),
        saveCSV: (props) => saveCSV(props, context),
        saveSVG: (props) => saveSVG(props, context),
        setTour: async (placesList) => setTour(placesList, context)
    };

    return { places, selectedIndex, placeActions };
}

async function append(place, context) {
    const { places, setPlaces, setSelectedIndex } = context;

    const newPlaces = [...places];

    validateLatLng(place);

    const fullPlace = await reverseGeocode(placeToLatLng(place));
    newPlaces.push(fullPlace);

    setPlaces(newPlaces);
    setSelectedIndex(newPlaces.length - 1);
}

export async function moveToHome(context) {
    if (navigator.geolocation) {
        await navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

    function onSuccess({ coords }) {
        const place = { latitude: coords.latitude, longitude: coords.longitude };
        append(place, context);
    }

    function onError(error) {
        append(DEFAULT_STARTING_PLACE, context);
    }
}

function removeAtIndex(index, context) {
    const { places, setPlaces, selectedIndex, setSelectedIndex } = context;

    if (index < 0 || index >= places.length) {
        LOG.error(`Attempted to remove index ${index} in places list of size ${places.length}.`);
        return;
    }
    const newPlaces = places.filter((place, i) => index !== i);
    setPlaces(newPlaces);

    if (newPlaces.length === 0) {
        setSelectedIndex(-1);
    } else if (selectedIndex >= index && selectedIndex !== 0) {
        setSelectedIndex(selectedIndex - 1);
    }
}

function removeAll(context) {
    const { setPlaces, setSelectedIndex } = context;

    setPlaces([]);
    setSelectedIndex(-1);
}

function selectIndex(index, context) {
    const { places, setSelectedIndex } = context;

    if (index < -1 || index >= places.length) {
        LOG.error(`Attempted to select index ${index} in places list of size ${places.length}.`);
        setSelectedIndex(-1);
        return;
    }
    setSelectedIndex(index);
}

function csvToJson(file) {
    var output = []
    const papa = require('papaparse');
    output = papa.parse(file.text, {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {

        }
    });
    return output;
}

async function appendPlaces(obj) {
    let array = [];
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].name) {
            var place = { lat: parseFloat(obj[i].latitude), lng: parseFloat(obj[i].longitude), name: obj[i].name }
            array.push(place);
        } else {
            const fullPlace = await reverseGeocode(placeToLatLng(obj[i]));
            array.push(fullPlace);
        }
    }

    return array;
}

function parseFile(file, context, props) {
    const { setPlaces, setSelectedIndex } = context;

    const extension = file.name.split('.').pop();
    if (extension === "json") {
        if (isJsonResponseValid(JSON.parse(file.text), tripSchema)) {
            props.setName(file.name.split('.')[0]);
            var obj = JSON.parse(file.text);
            (async () => {
                let newPlaces = await appendPlaces(obj.places);
                setPlaces(newPlaces);
                setSelectedIndex(newPlaces.length - 1);
            })()
        } else {
            props.showMessage("Invalid JSON File.", "error")
        }
    } else if (extension === "csv") {
        var csv = csvToJson(file);
        if (isJsonResponseValid(csv, csvSchema)) {
            props.setName(file.name.split('.')[0]);
            (async () => {
                let newPlaces = await appendPlaces(csv.data);
                setPlaces(newPlaces);
                setSelectedIndex(newPlaces.length - 1);
            })()
        } else {
            props.showMessage("Invalid CSV File.", "error")
        }
    }
}

function readFile(fileName, fileObject, props, context) {
    const reader = new FileReader();
    reader.readAsText(fileObject, "UTF-8");
    reader.onload = event => {
        const file = { name: fileName, text: event.target.result };
        parseFile(file, context, props);
    }
}

function saveFile(props, context) {
    const tripJSON = buildJSON(context);
    const fileName = props.fileName.replace(/ /g, "_").toLowerCase();
    downloadFile(fileName + ".json", MIME_TYPE.JSON, tripJSON);
}

function saveCSV(props, context) {
    const { places } = context;
    const fileName = props.fileName.replace(/ /g, "_").toLowerCase();
    let csvText = "\"name\",\"latitude\",\"longitude\"\n";
    for (var i = 0; i < places.length; i++) {
        csvText += "\"" + places[i].name + "\","
        csvText += "\"" + places[i].lat.toString() + "\","
        if (i == places.length - 1) {
            csvText += "\"" + places[i].lng.toString() + "\""
        } else {
            csvText += "\"" + places[i].lng.toString() + "\"\n"
        }
    }
    downloadFile(fileName + ".csv", MIME_TYPE.CSV, csvText);
}

function saveSVG(props, context) {
    const { places } = context;
    const fileName = props.fileName.replace(/ /g, "_").toLowerCase();
    let svgText = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
    svgText += "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1440\" height=\"720\"\n"
    svgText += "viewBox=\"-180 -90 360 180\">"
    svgText += "<image href=\"https://instructor-uploaded-content.s3.amazonaws.com/MAP.svg-6983777\" x=\"-180\" y=\"-90\" height=\"180\" width=\"360\" />\n"
    svgText += "<g transform=\"scale(1,-1)\">\n"
    svgText += "<polyline\n"
    svgText += "points=\""
    for (var i = 0; i < places.length; i++) {
        svgText += places[i].lng.toString() + "," + places[i].lat.toString() + " "
        if (i == places.length - 1) {
            svgText += places[i].lng.toString() + "," + places[i].lat.toString() + "\"\n"
        }
    }
    svgText += "style=\"fill:none; stroke:rgb(215, 42, 40); stroke-width:0.4\"\n"
    svgText += "/>\n"
    svgText += "</g>\n"
    svgText += "</svg>"
    downloadFile(fileName + ".svg", MIME_TYPE.SVG, svgText);
}

function buildJSON(context) {
    const { places } = context;
    let newPlaces = [];
    for (var i = 0; i < places.length; i++) {
        var place = { name: places[i].name, latitude: places[i].lat.toString(), longitude: places[i].lng.toString() };
        newPlaces.push(place);
    }

    const tripJSON = {
        places: newPlaces
    };

    return JSON.stringify(tripJSON, null, 2);
}

function downloadFile(fileNameWithExtension, mimeType, fileText) {
    const file = new Blob([fileText], { type: mimeType });
    const link = document.createElement("a");
    const url = URL.createObjectURL(file);
    link.href = url;
    link.download = fileNameWithExtension;
    document.body.appendChild(link);
    link.click();
}

async function setTour(placesList, context) {
    const { setPlaces, setSelectedIndex } = context;
    let formattedList = placesList;
    if (placesList[0].lat != null) {
        formattedList = massagePlaces(placesList);

    }
    const tempList = await appendPlaces(formattedList);
    setPlaces(tempList);
    setSelectedIndex(tempList.length - 1);
}