import React, {useState} from "react";
import { Container, Collapse, ButtonGroup, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import { FaDice, FaSearchLocation, FaQuestion } from 'react-icons/fa';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { FindInputGroup, showRandom } from "./Find";
import { WhereIsBody, WhereIsFooter } from "../WhereIs/WhereIs";

export function FindInput(props){
    const [convertedLatLang, setConvertedLatLang] = useState(null);
    const [coordinatesInputText, setCoordiantesInputText] = useState('');
    const whereContext = {convertedLatLang, setConvertedLatLang, coordinatesInputText, setCoordiantesInputText }

    return(
        <Container style={{paddingTop: '10px', paddingBottom: '10px'}} >
            <Collapse isOpen={props.search} data-testId='fi-collapse-1'>
                <FindInputGroup active={props.active} context={props.context} serverSettings={props.serverSettings} matchString={props.matchString} setRandom={props.setRandom} setMatchValue={props.setMatchValue} toggleWhere={props.toggleWhere} toggleSearch={props.toggleSearch}/>
            </Collapse>
            <Collapse isOpen={props.where} data-testId='fi-collapse-2'>
                <WhereIsBody active={props.active} randomContext={props.context} serverSettings={props.serverSettings} matchString={props.matchString} setRandom={props.setRandom} setMatchValue={props.setMatchValue} toggleWhere={props.toggleWhere} toggleSearch={props.toggleSearch} context = {whereContext}/>
                <WhereIsFooter context={whereContext} placeActions={props.placeActions} />
            </Collapse>
        </Container>
    );
}

export function FindActionsDropdown(props){
    return (
        <FindDropdown {...props}>
            <DropdownItem onClick={props.toggleSearch} data-testId={props.id+"-find-button"}>
                <FaSearchLocation/>
            </DropdownItem>
            <DropdownItem onClick={props.toggleWhere} data-testId={props.id+"-where-button"}>
                <FaQuestion />
            </DropdownItem>
            <DropdownItem data-testId={props.id+"-random-button"} onClick={async () => showRandom(props.context, props.serverSettings, props.setRandom, props.active)}>
                <FaDice/>
            </DropdownItem>
        </FindDropdown>
    );
}

function FindDropdown(props) {
    return (
        <UncontrolledDropdown direction='left' >
            <DropdownToggle data-testid={props.id+'-FindInput Dropdown'} color='none'>
                <BiDotsVerticalRounded/>
            </DropdownToggle>
            <DropdownMenu>
                <ButtonGroup>
                    {props.children}
                </ButtonGroup>
            </DropdownMenu>
        </UncontrolledDropdown>
    );
}