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
var is_env_browser_1 = require("./is_env_browser");
var get_image_orientation_1 = require("./get_image_orientation");
var serverResponseJSON = { width: 0,
    height: 0,
    url: '',
    ratioWidth: 1,
    ratioHeight: 1,
    orientation: get_image_orientation_1.square
};
var serverResponse = __assign({ image: {} }, serverResponseJSON, { toJSON: function () { return serverResponseJSON; } });
/**
 * returns a promise with a loaded image and a few useful parameters,
 * such as width, height, ratio, and orientation
 *
 * This function has a custom toJSON method that removes non-serializable data
 * @param src
 */
exports.load_image = is_env_browser_1.is_env_browser ?
    function (src) { return new Promise(function (resolve, reject) {
        var image = new Image();
        image.onload =
            function () {
                var height = image.naturalHeight, width = image.naturalWidth;
                var orientation = get_image_orientation_1.get_image_orientation(width, height);
                var ratioWidth = height / width;
                var ratioHeight = width / height;
                var url = image.src;
                var json = { width: width,
                    height: height,
                    url: url,
                    ratioWidth: ratioWidth,
                    ratioHeight: ratioHeight,
                    orientation: orientation
                };
                var ret = __assign({ image: image }, json, { toJSON: function () { return json; } });
                return resolve(ret);
            };
        image.onerror =
            function (evt) {
                reject(new Error('could not load file'));
            };
        image.src = src;
    }); }
    : function (src) { return Promise.resolve(serverResponse); };
//# sourceMappingURL=load_image.js.map