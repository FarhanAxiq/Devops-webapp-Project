import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { Button, Col, Container, Input, Modal, ModalBody, ModalFooter, ModalHeader, Row, FormFeedback, ListGroup, ListGroupItem } from 'reactstrap';
import { useServerInputValidation } from '../../hooks/useServerInputValidation';
import { SERVER_FEATURES } from '../../utils/constants';


export default function ServerSettings(props) {
    const [serverInput, setServerInput, config, validServer, resetModal]
        = useServerInputValidation(props.serverSettings.serverUrl, props.toggleOpen);


        const [serverName, setServerName] = useState('Not Connected to Any Server');
        const [features, setFeatures] = useState([])

        function closeModalWithoutSaving(){
            resetModal(props.serverSettings.serverUrl);
        }

        function getCurrentServerContent(config, serverSettings){
            if (config){
                setServerName(config.serverName)
                setFeatures(config.features);  
            }
        
            else if (serverSettings.serverConfig) {
                // if features array is unpopulated it will not be able to split
                // this is needed.
                setServerName(serverSettings.serverConfig.serverName)
                setFeatures(serverSettings.serverConfig.features);
            }
        }

        useEffect(() => {
            getCurrentServerContent(config, props.serverSettings)
        }, [serverInput, validServer])

    return (
        <Modal isOpen={props.isOpen} toggle={closeModalWithoutSaving}>
            <Header toggleOpen={closeModalWithoutSaving} />
            <Body
                serverInput={serverInput}
                setServerInput={setServerInput}
                serverSettings={props.serverSettings}
                serverName={serverName}
                features={features}
                validServer={validServer}
            />
            <Footer
                config={config}
                serverInput={serverInput}
                validServer={validServer}
                resetModal={resetModal}
                closeModalWithoutSaving={closeModalWithoutSaving}
                processServerConfigSuccess={props.processServerConfigSuccess}
            />
        </Modal>
    );
}

function Header(props) {
    return (
        <ModalHeader className="ml-2" toggle={props.toggleOpen}>
            Server Connection
        </ModalHeader>
    );
}

// show the list of features
function featuresList(props) {
    return <>
    <ListGroup>
        {props.features && props.features.map((item) => { return addListItem(item)})}
    </ListGroup>
  </>
}


function addListItem(item) {
    return <ListGroupItem color='primary'>{item}</ListGroupItem>;
}

function Body(props) {
    const urlInput =
        <><Input
                value={props.serverInput}
                placeholder={"Enter server URL here"}
                onChange={(e) => { props.setServerInput(e.target.value); } }
                valid={props.validServer}
                invalid={!props.validServer} />
            {invalidServer()}</>;

    return (
        <ModalBody>
            <Container>
                <SettingsRow label="Name" value={props.serverName} />
                <SettingsRow label="URL" value={urlInput} />
                <SettingsRow label="Server Features Available" value={featuresList(props)} />
            </Container>
        </ModalBody>
    );
}

function invalidServer() {
    return <FormFeedback invalid>Error: Invalid Server.</FormFeedback>;
}

function SettingsRow({label, value}) {
    return (
        <Row className="my-2 vertical-center">
            <Col xs={3}>
                {label}:
            </Col>
            <Col xs={9}>
                {value}
            </Col>
        </Row>
    );
}

function Footer(props) {
    return (
        <ModalFooter>
            <Button color="secondary" onClick={props.closeModalWithoutSaving}>Cancel</Button>
            <Button color="primary" onClick={() => {
                props.processServerConfigSuccess(props.config, props.serverInput);
                props.resetModal(props.serverInput);
            }}
                disabled={!props.config || !props.validServer}
            >
                Save
            </Button>
        </ModalFooter>
    );
}


// function checkInvalid(){
//     var is_same = (configResponse && SERVER_FEATURES.length === configResponse.features.length) && SERVER_FEATURES.every(function(element, index) {
//     });

//     if (configResponse && serverURL === inputUrl.current) {
//     }

// }