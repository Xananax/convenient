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
var make_global_1 = require("./make_global");
var deferred_promise_1 = require("./deferred_promise");
var load_script_1 = require("./load_script");
exports.googleLoaded = deferred_promise_1.deferred_promise();
var CALLBACK_NAME = 'google_map_api_loaded';
make_global_1.make_global(CALLBACK_NAME, function () { return exports.googleLoaded.resolve(); });
exports.get_maps_javascript_url = function (API_KEY) {
    return ("https://maps.googleapis.com/maps/api/js?key=" + API_KEY + "&callback=" + CALLBACK_NAME);
};
exports.load_google_maps_api = function (API_KEY, callback) {
    var url = exports.get_maps_javascript_url(API_KEY);
    load_script_1.load_script(url, callback);
    return exports.googleLoaded;
};
exports.defaultArgs = { zoom: 18,
    width: 720,
    height: 720
};
exports.get_google_maps_url_static = function (options) {
    var _a = __assign({}, exports.defaultArgs, options), longitude = _a.longitude, latitude = _a.latitude, zoom = _a.zoom, token = _a.token, width = _a.width, height = _a.height;
    var coordinates = [latitude, longitude].join(',');
    var googleMapsUrl = "https://maps.googleapis.com/maps/api/staticmap?markers=" + coordinates + "&zoom=" + zoom + "&size=" + width + "x" + height + "&maptype=roadmap&key=" + token;
    return googleMapsUrl;
};
exports.get_google_maps_url = function (_a, search) {
    var lat = _a.latitude, lng = _a.longitude, z = _a.zoom;
    return ("https://www.google.com/maps/search/" + search + "/@" + lat + "," + lng + "," + z + "z?q=" + lat + "," + lng + "&z=" + z + "&ll=" + lat + "," + lng);
};
//# sourceMappingURL=google_maps.js.map