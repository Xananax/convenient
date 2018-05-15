"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.json = function (data) {
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
exports.default = exports.json;
//# sourceMappingURL=json.js.map