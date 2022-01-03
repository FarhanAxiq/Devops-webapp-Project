import React, { useEffect, useState } from 'react';
import { Input, InputGroup, Container, Button, 
         Col, Row, Collapse, 
         Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
         InputGroupAddon, InputGroupText } from 'reactstrap';
import Results from './Results.js'
import { useFind } from '../../hooks/useFind';
import { FaTimes, FaFilter } from 'react-icons/fa';
import { TYPE_OPT } from '../../utils/constants';
import { FindInput, FindActionsDropdown } from './FindInput.js';

export default function Find(props) {
    const [matchString, setMatchValue, getPlaces] = useFind("");
    const [foundList, setList] = useState([]);

    const [filterOpen, setFilterOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [active, setActive] = useState(TYPE_OPT[0]);

    const context = { matchString, setMatchValue, getPlaces, 
        foundList, setList, 
        filterOpen, setFilterOpen,
        dropdownOpen, setDropdownOpen, 
        active, setActive};
    return (
        <Container>
            <FindHeader closePage={props.closePage} context={context} />
            <FindBody places={props.places} selectedIndex={props.selectedIndex} placeActions={props.placeActions} context={context} serverSettings={props.serverSettings} />
        </Container>
    );
}

export function FindHeader(props) {
    const { setMatchValue, setList, setActive, setFilterOpen } = props.context;

    const clearFind = () => {
        setMatchValue("");
        setList([]);
        setActive(TYPE_OPT[0]);
        setFilterOpen(false);
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h3>Find Locations</h3>
                </Col>
                <Col xs="auto">
                    <FaTimes name="closeFind" data-testid="find-x-button" color="primary" onMouseDown={clearFind} onMouseUp={props.closePage} style={{ cursor: 'pointer' }}/>
                </Col>
            </Row>
        </Container>
    );
}

export function FindBody(props) {
    const { matchString, setMatchValue, foundList, active } = props.context;
    const [isRandom, setRandom]  = useState(false);
    const featuresCheck = props.serverSettings.serverConfig?.features;
    const [search, setSearch] = useState(true);
    const [where, setWhere] = useState(false);

    function fetchList() {
        const controller = new AbortController();

        if (!isRandom && active === TYPE_OPT[0]) {
            fetchPlaces(props.context, controller, props.serverSettings);
        }

        else if (!isRandom && props.active !== TYPE_OPT[0]) {
            fetchPlaces(props.context, controller, props.serverSettings, active);
        }

        else {
            setRandom(false);
        }
        return () => {
            controller.abort();
        };
    }
    useEffect(() => {
        return fetchList();
    }, [matchString, foundList.length, active]);

    const toggleWhere = () => {
        setSearch(false);
        setWhere(true);
    }
    const toggleSearch= () => {
        setSearch(true);
        setWhere(false);
    }

    return (
        <Container>
            <FindInput context={props.context} serverSettings={props.serverSettings} matchString={matchString} setRandom={setRandom} 
                       setMatchValue={setMatchValue} placeActions={props.placeActions} search={search} where={where}
                       toggleSearch={toggleSearch} toggleWhere={toggleWhere}/>
            <Collapse isOpen={search}>
                {ButtonComp(props, featuresCheck)}
            </Collapse>
            <Results placesList={foundList} places={props.places} selectedIndex={props.selectedIndex} placeActions={props.placeActions} />
        </Container>
    );

}

export function ButtonComp(props, featuresCheck) {

    const {filterOpen, setFilterOpen, active, setActive} = props.context;
    // check for features in the server
    // question mark there is to handle null
    // then reset it to default
    if (!featuresCheck?.includes('type')) { 
        if (active !== TYPE_OPT[0]){ setActive(TYPE_OPT[0]) }
        return null; 
    }
    return <><Button data-testid="filter-button" onClick={() => setFilterOpen(!filterOpen)} aria-expanded={filterOpen}><FaFilter />   Search Filter </Button><Collapse isOpen={filterOpen}>
        <p><br lineheight="7 px"></br>Type: </p>{dropdownType(props, featuresCheck)}
    </Collapse></>;
}

export function dropdownType(props) {
    const {dropdownOpen, setDropdownOpen, active, setActive} = props.context;
    return <Dropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(!dropdownOpen)}>
        <DropdownToggle caret>{active}</DropdownToggle>
        <DropdownMenu>
            {TYPE_OPT.map((item, index) => { 
                return <DropdownItem key={index} onClick={()=> setActive(item)}>{item}</DropdownItem>
            })}
        </DropdownMenu>
    </Dropdown>;
}

export function FindInputGroup(props) {
    return (
        <InputGroup>
            <InputGroupAddon addonType="prepend">
                <InputGroupText>Find</InputGroupText>
            </InputGroupAddon>
            <Input type="search" placeholder="Enter Location" data-testid="find-input" value={props.matchString} onChange={(e) => props.setMatchValue(e.target.value)} />
            <FindActionsDropdown 
                active={props.active} context={props.context} serverSettings={props.serverSettings} matchString={props.matchString}
                setRandom={props.setRandom} setMatchValue={props.setMatchValue} toggleWhere={props.toggleWhere} toggleSearch={props.toggleSearch} id={'find'}/>
        </InputGroup>
    );
}

async function fetchPlaces(context, controller, serverSettings, active) {
    const { matchString, getPlaces, setList } = context;
    const placeList = await getPlaces(matchString, controller.signal, serverSettings, active);
    setList(placeList);
}


export async function showRandom(context, serverSettings, setRandom, active) {
    const { getPlaces, setList } = context;
    const controller = new AbortController();
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_';
    const searchChar = alphabet[Math.floor(Math.random() * alphabet.length)];
    setRandom(true);

    const allPlaces = await getPlaces(searchChar, controller.signal, serverSettings, active);
    let randPlaces = [];
    for (let i = 0; i < 5; ++i) {
        randPlaces.push(allPlaces[Math.floor(Math.random() * (100))]);
    }
    setList(randPlaces);
}