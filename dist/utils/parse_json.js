"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * parses json data
 * @param data
 */
exports.parse_json = function (data) {
    if (typeof data !== 'string') {
        return data;
    }
    try {
        return JSON.parse(data);
    }
    catch (e) {
        return data;
    }
};
exports.default = exports.parse_json;
//# sourceMappingURL=parse_json.js.map