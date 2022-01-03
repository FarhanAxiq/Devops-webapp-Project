import React, { useState } from 'react';
import { Input, Tooltip } from 'reactstrap';
import { FaFileUpload } from 'react-icons/fa';
import { FILE_FORMATS } from '../../../utils/constants';

export default function LoadTripButton(props) {
    const [tooltipOpen, setToolTipOpen] = useState(false);

    function handleFileUpload(event) {
        const fileName = event.target.files[0].name;
        const fileObject = event.target.files[0];
        props.placeActions.readFile(fileName, fileObject, props)
    }

    const onIconClick = () => {
        const input = document.getElementById('file-input');

        if (input) {
            input.click();
        }
    };

    return (
        <React.Fragment>
            <FaFileUpload onClick={onIconClick} data-testid="save-button" style={{ cursor: 'pointer', marginLeft: '10px' }} data-testid="load-button" id="tooltip-load" />
            <Tooltip placement={'left'} delay={{ show: 500, hide: 100 }} flip isOpen={tooltipOpen} toggle={() => { setToolTipOpen(!tooltipOpen) }} data-testid="tool-tip-load" target="tooltip-load">Load A Trip!</Tooltip>
            <Input style={{ display: 'none' }} id="file-input" type="file" accept={FILE_FORMATS} data-testid="file-input" onChange={handleFileUpload} />
        </React.Fragment>
    );
}