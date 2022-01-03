import React, { useState } from 'react';
import { Container, Button, ButtonGroup, Row, Col, Tooltip } from 'reactstrap';
import { FaCheck } from 'react-icons/fa';
import { useTour } from '../../hooks/useTour';

export default function Shorter(props) {
    const [optimizedTrip, setOptimizedTrip] = useState(false);
    const [origTrip, setOrigTrip] = useState(true);
    const {tourList, tourActions} = useTour();
    const [tempList, setTempList] = useState(props.places);

    const context = {setOptimizedTrip, optimizedTrip, origTrip, setOrigTrip, setTempList, tourActions, tempList};

    return (
        <Container>
            <Row xs='3.5'>
                <Col /> 
                <Col>Pick a Trip to Display: </Col>
                <Col><OptRadioButtons places={props.places} placeActions={props.placeActions} serverSettings={props.serverSettings} context={context} /></Col>
                <Col><CheckButton places={props.places} toggleShorter={props.toggleShorter} context={context}/></Col>
            </Row>
        </Container>
    );
}

function OptRadioButtons(props) {
    const {origTrip, optimizedTrip} = props.context;

    return (
        <ButtonGroup size='sm'>
            <Button data-testid="opt-trip" color='primary' outline size='sm' active={optimizedTrip} onClick={() => optClick(props.places, props.serverSettings, props.placeActions, props.context)}>
                Optimized Trip
            </Button>
            <Button data-testid="orig-trip" color='primary' outline size='sm' active={origTrip} onClick={() => origClick(props.placeActions, props.context)}>
                Original Trip
            </Button>
        </ButtonGroup>
    );
}

function CheckButton(props) {
    const [tooltipOpen, setToolTipOpen] = useState(false);

    return (
        <Col>
            <FaCheck data-testid="check-button" id="accept-tooltip" onClick={() => checkClick(props.places, props.toggleShorter, props.context)} style={{ cursor: 'pointer' }}/>
            <Tooltip delay={{ show:500, hide: 100 }} flip isOpen={tooltipOpen} toggle={() => {setToolTipOpen(!tooltipOpen)}} target="accept-tooltip" >Keep Trip</Tooltip>
        </Col>
    );
}

function checkClick(places, toggleShorter, context) {
    const {setOrigTrip, setOptimizedTrip, setTempList} = context;
    toggleShorter();
    setOrigTrip(true);
    setOptimizedTrip(false);
    setTempList(places);
}

function origClick(placeActions, context) {
    const {origTrip, setOrigTrip, setOptimizedTrip, tempList} = context;

    if(!origTrip) {
        setOrigTrip(true);
        setOptimizedTrip(false);
        placeActions.setTour(tempList);
    }
}

async function optClick(places, serverSettings, placeActions, context) {
    const {optimizedTrip, setOrigTrip, setOptimizedTrip, setTempList, tourActions} = context;

    if (!optimizedTrip) {
        const controller = new AbortController();
        setOptimizedTrip(true);
        setOrigTrip(false);
        setTempList(places);
        const list = await tourActions.getTour(places, serverSettings, controller.signal);
        placeActions.setTour(list);
    }
}