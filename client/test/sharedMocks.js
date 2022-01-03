export const MOCK_CONTROLLER = new AbortController();

export const MOCK_GEOLOCATION = {
    getCurrentPosition: jest.fn().mockImplementation((success) =>
        Promise.resolve(
            success({
                coords: {
                    latitude: 40.57,
                    longitude: -105.085
                }
            })
        )
    )
}
export const MOCK_DEFAULT_PLACE = { latitude: 40.5764, longitude: -105.0807 };

export const MOCK_SERVER_SETTINGS = {
    serverUrl: "thisisamock.com",
    serverConfig: null
}

export const VALID_CONFIG_RESPONSE = JSON.stringify({
    requestType: 'config',
    serverName: 't17 We Push To Main',
    features: ['config', 'find', 'distances', 'tour', 'type']
});

export const INCOMPATIBLE_FEATURES = JSON.stringify({
    requestType: 'config',
    serverName: 't99',
    features: ['config']
});

export const INVALID_REQUEST = JSON.stringify({
    invalid: 'this is an invalid response to fail the schema'
});

export const MOCK_PLACES = [
    { name: 'Place A', lat: 40.0, lng: 50.0 },
    { name: 'Place B', lat: 45.0, lng: 55.0 }
];

export const MOCK_RESULTS = [
    { name: 'Place A', latitude: 40.0, longitude: 50.0 },
    { name: 'Place B', latitude: 45.0, longitude: 55.0 }
];

export const REVERSE_GEOCODE_RESPONSE = JSON.stringify({
    "place_id": 259127396,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    "osm_type": "relation",
    "osm_id": 8539568,
    "lat": "40.57066025",
    "lon": "-105.08539645568865",
    "place_rank": 30,
    "category": "amenity",
    "type": "university",
    "importance": 0.4948531325947546,
    "addresstype": "amenity",
    "name": "Colorado State University",
    "display_name": "Colorado State University, South College Avenue, Fort Collins, Larimer County, Colorado, 80525-1725, United States",
    "address": {
        "amenity": "Colorado State University",
        "road": "South College Avenue",
        "city": "Fort Collins",
        "county": "Larimer County",
        "state": "Colorado",
        "postcode": "80525-1725",
        "country": "United States",
        "country_code": "us"
    },
    "boundingbox": [
        "40.5527786",
        "40.5789122",
        "-105.0972937",
        "-105.0721817"
    ]
});