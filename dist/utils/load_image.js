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
 * @param useDecode if true, will use `img.decode()` to prevent the browser from slowing down while loading the image
 */
exports.load_image = is_env_browser_1.is_env_browser ?
    function (src, useDecode) {
        if (useDecode === void 0) { useDecode = true; }
        return new Promise(function (resolve, reject) {
            var image = new Image();
            var onload = function () {
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
                clean();
                return resolve(ret);
            };
            var onerror = function (evt) {
                clean();
                reject(new Error(evt.message || 'could not load file'));
            };
            var clean = function () {
                image.onerror = null;
                image.onload = null;
            };
            image.onerror = onerror;
            image.src = src;
            if (useDecode && ('decode' in image)) {
                image.src = src;
                image.decode().then(onload).catch(onerror);
            }
            else {
                image.onload = onload;
            }
        });
    }
    : function (src) { return Promise.resolve(serverResponse); };
//# sourceMappingURL=load_image.js.map