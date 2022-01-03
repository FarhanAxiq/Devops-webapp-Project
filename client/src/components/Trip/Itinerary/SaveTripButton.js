import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';
import { FaSave } from 'react-icons/fa';

export default function SaveTripButton(props) {
    const [tooltipOpen, setToolTipOpen] = useState(false);
    return (
        <React.Fragment>
            <FaSave style={{ cursor: 'pointer', marginLeft: '10px' }} onClick={props.toggleSaveFile} id="tooltip-save" />
            <Tooltip placement={'left'} delay={{ show: 500, hide: 100 }} flip isOpen={tooltipOpen} toggle={() => { setToolTipOpen(!tooltipOpen) }} data-testid="tool-tip-save" target="tooltip-save">Save A Trip!</Tooltip>
        </React.Fragment>
    );
}