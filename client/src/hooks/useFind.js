import { useState } from 'react';
import { sendAPIRequest } from '../utils/restfulAPI';
import { TYPE_OPT } from '../utils/constants';


export function useFind(value) {
    const [match, updateMatch] = useState(value);
    
    function setMatchValue(newValue) {
        return updateMatch(newValue);
    }

    return [match, setMatchValue, getPlaces];

}

async function getPlaces(matchString, controllerSignal, serverSettings, typeArray) {
    if (matchString === "") {
        return [];
    }
    const responseBody = await sendFindRequest(matchString, 0, controllerSignal, serverSettings, typeArray);

    if (responseBody) {
        return responseBody.places;
    }

    return [];

}

async function sendFindRequest(matchString, searchLimit, controllerSignal, serverSettings, typeArray) {
    const url = serverSettings.serverUrl;

    // handle typeArray without parameters
    const arr =[]
    if (typeArray !== TYPE_OPT[0] && typeof typeArray !== 'undefined') {
        arr[0] = typeArray
    }
    else{ delete arr[0] }
    
    // ... menu here just say 
    // if no type is specified 
    // then do not send it.
    // new ES6 stuff.
    const requestBody = {
        requestType: "find", 
        match: matchString, 
        limit: searchLimit,
        ...(typeof typeArray === 'undefined' || {type: arr})
    };

    const findResponse = await sendAPIRequest(requestBody, url, controllerSignal);

    return findResponse;
}