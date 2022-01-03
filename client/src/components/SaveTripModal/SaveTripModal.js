import React from 'react';
import { Input, Container, Button, Col, Row, InputGroup, InputGroupAddon, InputGroupText, Modal, Collapse } from "reactstrap";

export default function SaveTripModal(props) {
    return (
        <Modal isOpen={props.isOpen} data-testid="save-modal">
            <SaveTripHeader closeSaveTrip={props.closeSaveTrip} />
            <SaveTripBody fileName={props.fileName} setFileName={props.setFileName} />
            <SaveTripFooter fileName={props.fileName} placeActions={props.placeActions} closeSaveTrip={props.closeSaveTrip} />
        </Modal>
    );
}

function SaveTripHeader(props) {
    return (
        <Container style={{ paddingTop: '10px' }}>
            <Row>
                <Col>
                    <h3>Save Trip</h3>
                </Col>
                <Col xs="auto">
                    <Button name="closeSaveTripModal" color="primary" onClick={props.closeSaveTrip}>X</Button>
                </Col>
            </Row>
        </Container>
    );
}

function SaveTripBody(props) {

    return (
        <InputGroup className="SaveTripInput">
            <InputGroupAddon addonType="prepend">
                <InputGroupText>File Name</InputGroupText>
            </InputGroupAddon>
            <Input
                placeholder={props.fileName}
                onChange={e => props.setFileName(e.target.value)}
                valid={props.fileName != null && props.fileName != ""}
                invalid={props.fileName == null || props.fileName == ""}
                data-testid="savetripmodal-input"
            />
        </InputGroup>
    );
}

function SaveTripFooter(props) {
    const saveJSON = () => {
        props.placeActions.saveFile(props)
    };

    const saveCSV = () => {
        props.placeActions.saveCSV(props)
    };

    const saveSVG = () => {
        props.placeActions.saveSVG(props)
    };

    return (
        <Container style={{ paddingTop: '10px', paddingBottom: '10px' }}>
            <Collapse isOpen={props.fileName != null && props.fileName != ""}>
                <Row xs="5">
                    <Col />
                    <SaveTripCol fun={saveJSON} closeSaveTrip={props.closeSaveTrip} msg={".JSON"}/>
                    <SaveTripCol fun={saveCSV} closeSaveTrip={props.closeSaveTrip} msg={".CSV"}/>
                    <SaveTripCol fun={saveSVG} closeSaveTrip={props.closeSaveTrip} msg={".SVG"}/>
                    <Col />
                </Row>
            </Collapse>
        </Container>
    );
}

function SaveTripCol(props){
    return(
        <Col>
            <Button color={"primary"} onClick={props.fun} onMouseUp={props.closeSaveTrip}>{props.msg}</Button>
        </Col>
    );
}