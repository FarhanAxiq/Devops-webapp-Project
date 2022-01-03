import React, { useState } from 'react';
import { useToggle } from '../../../hooks/useToggle';
import { Collapse, Button } from 'reactstrap';
import LoadTripButton from './LoadTripButton';
import SaveTripButton from './SaveTripButton';
import SaveTripModal from '../../SaveTripModal/SaveTripModal';
import TripInput from './TripInput';

export function EditTripName(props) {
    const [collapse, setCollapse] = useState(false);
    const [tripName, setName] = useState("Enter Trip Name");
    const [fileName, setFileName] = useState(tripName);
    const [showSaveFile, toggleSaveFile] = useToggle(false);
    const [tooltipOpen, setToolTipOpen] = useState(false);

    const toggle = () => setCollapse(!collapse);

    return (
        <th>
            <Collapse isOpen={!collapse}>
                <Button color="none" style={{ cursor: 'pointer' }} onClick={toggle} data-testid="edit-button">{tripName}</Button>
                <LoadTripButton showMessage={props.showMessage} placeActions={props.placeActions} setName={setName} tooltipOpen={tooltipOpen} setToolTipOpen={setToolTipOpen} />
                <SaveTripButton tripName={tripName} placeActions={props.placeActions} toggleSaveFile={toggleSaveFile} />
                <SaveTripModal isOpen={showSaveFile} closeSaveTrip={toggleSaveFile} placeActions={props.placeActions} fileName={fileName} setFileName={setFileName} />
            </Collapse>
            <Collapse isOpen={collapse} data-testid="trip-collapse">
                <TripInput tripName={tripName} setName={setName} toggle={toggle} />
            </Collapse>
        </th>
    );
}