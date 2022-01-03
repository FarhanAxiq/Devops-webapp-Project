import React from 'react';
import { Table, Collapse } from 'reactstrap';
import { latLngToText, placeToLatLng } from '../../utils/transformers';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';


export default function Results(props) {

    return (
        <Table responsive hover>
            <ResultHeader />
            <ResultBody places={props.places} selectedIndex={props.selectedIndex} placeActions={props.placeActions} placesList={props.placesList} />
        </Table>
    );
}

function ResultHeader(props) {
    return (
        <thead>
            <tr>
                <th />
                <th>Results</th>
            </tr>
        </thead>
    );
}

function ResultBody(props) {

    return (
        <tbody>
            {props.placesList.map((place, index) =>
                <TableRow
                    key={`table-${JSON.stringify(place)}-${index}`}
                    place={place}
                    placeActions={props.placeActions}
                    index={index}
                />
            )}
        </tbody>
    );
}


function TableRow(props) {
    const [open, setOpen] = useState(false);
    const name = props.place.name ? props.place.name : "-";
    const location = placeToLatLng(props.place);
    const newLocation = latLngToText(location);
    const place = props.place;

    const handleClick = () => {
        props.placeActions.append(place);
        setOpen(true);
    }

    return (
        <tr style={{ cursor: 'pointer' }} onMouseDown={handleClick}>
            <th scope="row">{props.index + 1} </th>
            <td >
                {name}
                <br />
                <small className="text-muted">{newLocation}</small>
            </td>
            <td>
                <Collapse isOpen={open}>
                    <FaCheck/>
                </Collapse>
            </td>
        </tr>

    );
}
