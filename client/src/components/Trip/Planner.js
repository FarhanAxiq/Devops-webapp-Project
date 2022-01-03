import React from 'react';
import { Col, Container, Row, Collapse } from 'reactstrap';
import { useToggle } from '../../hooks/useToggle';
import Map from './Map/Map';
import Shorter from '../Shorter/Shorter';
import Itinerary from './Itinerary/Itinerary';

export default function Planner(props) {
    const [showShorter, toggleShorter] = useToggle(false);

    return (
        <Container>
            <Section>
                <Map places={props.places} selectedIndex={props.selectedIndex} placeActions={props.placeActions} />
            </Section>
            <Collapse isOpen={showShorter}>
					<Shorter toggleShorter={toggleShorter} places={props.places} placeActions={props.placeActions} serverSettings={props.serverSettings}/>
			</Collapse>
            <Section>
                <Itinerary showMessage={props.showMessage} places={props.places} selectedIndex={props.selectedIndex} placeActions={props.placeActions} openFind={props.openFind} serverSettings={props.serverSettings} toggleShorter={toggleShorter} />
            </Section>
        </Container>
    );
}

function Section(props) {
    return (
        <Row>
            <Col sm={12} md={{ size: 10, offset: 1 }}>
                {props.children}
            </Col>
        </Row>
    );
}