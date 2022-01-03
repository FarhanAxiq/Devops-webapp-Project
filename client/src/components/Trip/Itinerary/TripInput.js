import React from 'react';
import { Collapse, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

export default function TripInput(props) {
    return (
        <InputGroup>
            <Input
                placeholder={props.tripName}
                onChange={e => props.setName(e.target.value)}
                valid={props.tripName != null && props.tripName != ""}
                invalid={props.tripName == null || props.tripName == ""}
                data-testid="trip-input"
            />
            <Collapse isOpen={props.tripName != null && props.tripName != ""}>
                <InputGroupAddon addonType="append">
                    <InputGroupText style={{ cursor: 'pointer' }} onClick={props.toggle} valid={props.tripName != null && props.tripName != ""} invalid={props.tripName == null || props.tripName == ""}>
                        Done
                    </InputGroupText>
                </InputGroupAddon>
            </Collapse>
        </InputGroup>
    );
}