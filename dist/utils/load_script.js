"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cache = {};
// tslint:disable-next-line:no-any no-empty
var default_callback = function (arg) { };
exports.load_script = function (url, callback, bypassCache) {
    if (callback === void 0) { callback = default_callback; }
    if (bypassCache === void 0) { bypassCache = false; }
    if (!bypassCache && cache[url]) {
        return callback(url);
    }
    ;
    if (!document) {
        return; // TODO: do something in node env?
    }
    ;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    ;
    if ('readyState' in script) {
        script['onreadystatechange'] =
            function () {
                if (script['readyState'] === 'loaded' || script['readyState'] === 'complete') {
                    script['onreadystatechange'] = null;
                    cache[url] = true;
                    callback(url);
                }
            };
    }
    else {
        script.onload =
            function () {
                cache[url] = true;
                callback(url);
            };
    }
    ;
    script.src = url;
    ;
    document.getElementsByTagName('head')[0].appendChild(script);
};
//# sourceMappingURL=load_script.js.map