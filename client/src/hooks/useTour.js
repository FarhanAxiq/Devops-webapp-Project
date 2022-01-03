import React, { useState } from 'react';
import { sendAPIRequest } from '../utils/restfulAPI';
import { massagePlaces } from '../utils/transformers';

export function useTour() {
    const [tourList, setTourList] = useState([]);
    const context = { tourList, setTourList };

    const tourActions = {
        getTour: async (placesList,  serverSettings, controllerSignal) => getTour(placesList,  serverSettings, controllerSignal, context),
    };

    return { tourList, tourActions };

}

async function getTour(placesList,  serverSettings, controllerSignal, context) {
    const { tourList, setTourList } = context;
    const places = massagePlaces(placesList);
    const responseBody = await sendTourRequest(places, serverSettings, controllerSignal);

    if (responseBody) {
        setTourList(responseBody.places);
        return responseBody.places;
    }
    else {
        setTourList(placesList);
        return placesList;
    }
}

async function sendTourRequest(placesList, serverSettings, controllerSignal) {
    const url = serverSettings.serverUrl;
    const requestBody = {requestType: "tour", places: placesList, earthRadius: 3959, response: 1};

    const tourResponse = await sendAPIRequest(requestBody, url, controllerSignal);

    return tourResponse;
}