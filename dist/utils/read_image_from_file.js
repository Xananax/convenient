"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var get_file_extension_1 = require("./get_file_extension");
var is_env_browser_1 = require("./is_env_browser");
var load_image_1 = require("./load_image");
var serverResponse = { file: {},
    name: '',
    extension: '',
    toJSON: function () { return ({ name: '', extension: '' }); }
};
exports.is_image = function (file, extension) {
    return (/gif|png|jpe?g|tiff?|webp|bmp|ico|svg/.test(extension));
};
/**
 * If the provided file is an image, this function will load the image
 * and return a set of useful properties.
 * If not, it will return the file, with extracted name and extension strings
 *
 * This function has a custom toJSON method that removes non-serializable data
 * @param file
 * @param isImage a function that receives the file and the extension, and has
 * to return a boolean if the provided file is an image
 * @param useDecode if true, will use `img.decode()` to prevent the browser from slowing down while loading the image
 */
exports.readImageFromFile = is_env_browser_1.is_env_browser ?
    function (file, isImage, useDecode) {
        if (isImage === void 0) { isImage = exports.is_image; }
        if (useDecode === void 0) { useDecode = true; }
        return new Promise(function (resolve, reject) {
            if (!file) {
                return reject(new Error('no file provided'));
            }
            ;
            var name = file.name;
            var extension = get_file_extension_1.get_file_extension(name);
            if (!isImage(file, extension)) {
                var ret = { file: file, name: name, extension: extension, toJSON: function () { return ({ name: name, extension: extension }); } };
                return resolve(ret);
            }
            ;
            window.URL = window.URL || window['webkitURL'];
            ;
            var src = window.URL.createObjectURL(file);
            ;
            var free = function () { return window.URL.revokeObjectURL(src); };
            ;
            load_image_1.load_image(src, useDecode && extension !== 'svg')
                .then(function (_a) {
                var prevToJSON = _a.toJSON, props = __rest(_a, ["toJSON"]);
                var ret = __assign({}, props, { free: free,
                    file: file,
                    name: name,
                    extension: extension, toJSON: function () { return (__assign({}, prevToJSON(), { name: name, extension: extension })); } });
                resolve(ret);
            })
                .catch(reject);
        });
    } : function (file) { return Promise.resolve(serverResponse); };
//# sourceMappingURL=read_image_from_file.js.map