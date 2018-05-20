"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var load_script_1 = require("./load_script");
var CALLBACK_NAME = 'google_map_api_loaded';
/**
 * Returns the google maps script url with the provided API key
 * @param API_KEY
 */
exports.get_maps_javascript_url = function (API_KEY) {
    return ("https://maps.googleapis.com/maps/api/js?key=" + API_KEY + "&callback=" + CALLBACK_NAME);
};
/**
 * Loads the google maps javascript file
 * @param API_KEY
 * @param callback
 */
exports.load_google_maps_api = function (API_KEY, callback) {
    var url = exports.get_maps_javascript_url(API_KEY);
    return load_script_1.load_script(url);
};
exports.defaultArgs = { zoom: 18,
    width: 720,
    height: 720
};
/**
 * Returns a static image, good for embedding a non-interactive map
 * @param options
 */
exports.get_google_maps_url_static = function (options) {
    var _a = __assign({}, exports.defaultArgs, options), longitude = _a.longitude, latitude = _a.latitude, zoom = _a.zoom, token = _a.token, width = _a.width, height = _a.height;
    var coordinates = [latitude, longitude].join(',');
    var googleMapsUrl = "https://maps.googleapis.com/maps/api/staticmap?markers=" + coordinates + "&zoom=" + zoom + "&size=" + width + "x" + height + "&maptype=roadmap&key=" + token;
    return googleMapsUrl;
};
/**
 * Returns an url for an embeddable google map
 * @param options
 * @param search
 */
exports.get_google_maps_url = function (_a, search) {
    var lat = _a.latitude, lng = _a.longitude, z = _a.zoom;
    return ("https://www.google.com/maps/search/" + search + "/@" + lat + "," + lng + "," + z + "z?q=" + lat + "," + lng + "&z=" + z + "&ll=" + lat + "," + lng);
};
//# sourceMappingURL=google_maps.js.map