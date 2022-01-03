import React from "react";
import { useState } from "react";
import { latLngToPlace } from "../../utils/transformers";
import { Input, Container, Button, Col, Row, InputGroup, InputGroupAddon, InputGroupText, Collapse } from 'reactstrap';
import Coordinate from 'coordinate-parser';
import { FindActionsDropdown } from "../Find/FindInput";

export default function WhereIs(props) {
    const [convertedLatLang, setConvertedLatLang] = useState(null);
    const [coordinatesInputText, setCoordiantesInputText] = useState('');

    const context = { convertedLatLang, setConvertedLatLang, coordinatesInputText, setCoordiantesInputText };

    return (
        <Container>
            <WhereIsHeader closeWhereIs={props.closeWhereIs} context={context} />
            <WhereIsBody context={context} />
            <WhereIsFooter context={context} placeActions={props.placeActions} />
        </Container>
    );
}

function WhereIsHeader(props) {
    return (
        <Container style={{ paddingTop: '10px' }}>
            <Row>
                <Col>
                    <h3>Where Are These Coords?</h3>
                </Col>
                <Col xs="auto">
                    <Button name="closeWhereIs" color="primary" onClick={props.closeWhereIs}>Exit</Button>
                </Col>
            </Row>
        </Container>
    );
}

export function WhereIsBody(props) {
    const { convertedLatLang, coordinatesInputText } = props.context;
    const validCoordinates = convertedLatLang != null;
    const inputBoxEmpty = !coordinatesInputText;
    const place = convertedLatLang;
    return (
        <InputGroup className="mt-4">
            <InputGroupAddon addonType="prepend">
                <InputGroupText>Where is</InputGroupText>
            </InputGroupAddon>
            <Input
                placeholder="Latitude, Longitude"
                onChange={e => processCoordinatesInput(e.target.value, props.context)}
                value={coordinatesInputText}
                valid={validCoordinates}
                invalid={!inputBoxEmpty && !validCoordinates}
                data-testid="whereis-input"
            />
            <FindActionsDropdown active={props.active} context={props.randomContext} serverSettings={props.serverSettings} matchString={props.matchString} setRandom={props.setRandom} setMatchValue={props.setMatchValue} toggleWhere={props.toggleWhere} toggleSearch={props.toggleSearch} id={'where'}/>
        </InputGroup>
    );
}

export function WhereIsFooter(props) {
    const { convertedLatLang } = props.context;
    const validCoordinates = convertedLatLang != null;

    return (
        <Container style={{ paddingTop: '10px', paddingBottom: '10px' }}>
            <Collapse isOpen={validCoordinates}>
                <Row>
                    <Col xs="auto">
                        <Button name="whereIsFind" color="primary" onClick={() => props.placeActions.append(latLngToPlace(convertedLatLang))}>Add to Map!</Button>
                    </Col>
                </Row>
            </Collapse>
        </Container>
    );
}

function processCoordinatesInput(onChangeEvent, context) {
    const { setConvertedLatLang, setCoordiantesInputText } = context;

    const inputText = onChangeEvent;
    const latLang = getCoords(inputText);

    setCoordiantesInputText(inputText);
    setConvertedLatLang(latLang);

    if (latLang && (latLang.lat < -90 || latLang.lat > 90 || latLang.lng < -180 || latLang.lng > 180)) {
        setConvertedLatLang(null);
    }
    
}

function getCoords(coordinateString) {
    try {
        const convertedCoordinates = new Coordinate(coordinateString);
        return {
            lat: convertedCoordinates.getLatitude(),
            lng: convertedCoordinates.getLongitude()
        };
    } catch (error) {
        return null;
    }
}