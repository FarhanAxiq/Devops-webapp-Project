import ulog from 'ulog';

export function setLogLevelIfDefault() {
    const urlString = window.location.search;
    const urlParams = new URLSearchParams(urlString);
    if (!urlParams.has("log")) {
        if (process.env.CLIENT_LOG_LEVEL === "INFO") {
            ulog.level = ulog.INFO;
        } else {
            ulog.level = ulog.ERROR;
        }
    }
}

setLogLevelIfDefault();

export const LOG = ulog("App");

export const CLIENT_TEAM_NAME = "t17 We Push to Main";

export const EARTH_RADIUS_UNITS_DEFAULT = { "miles": 3959 };

export const DEFAULT_STARTING_PLACE = { latitude: 40.5764, longitude: -105.0807 }; //originally 40.5734, -105.0865 reverseGeocode({lat: 40.5764, lng: -105.0807});

export const SERVER_FEATURES = ["config", "find", "distances", "tour", "type"];

export const FILE_FORMATS = ".json, .csv, application/json, text/csv";

export const MIME_TYPE = {
    JSON: "application/json",
    CSV: "text/csv",
    SVG: "image/svg+xml",
    KML: "application/vnd.google-earth.kml+xml"
};

export const TYPE_OPT = ['Off', 'airport', 'heliport', 'balloonport', 'other']