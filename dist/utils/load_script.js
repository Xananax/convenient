"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_env_browser_1 = require("./is_env_browser");
var cache = {};
// tslint:disable-next-line:no-any no-empty
/**
 * loads an external script. Useful for loading google maps or other external APIs
 * @param url
 * @param bypassCache
 */
exports.load_script = is_env_browser_1.is_env_browser ?
    function (url, bypassCache) {
        if (bypassCache === void 0) { bypassCache = false; }
        return new Promise(function (resolve, reject) {
            if (!bypassCache && cache[url]) {
                return resolve(url);
            }
            ;
            var onLoad = function () {
                cache[url] = true;
                return resolve(url);
            };
            var script = document.createElement('script');
            script.type = 'text/javascript';
            ;
            if ('readyState' in script) {
                script['onreadystatechange'] =
                    function () {
                        if (script['readyState'] === 'loaded' || script['readyState'] === 'complete') {
                            script['onreadystatechange'] = null;
                            cache[url] = true;
                            onLoad();
                        }
                    };
            }
            else {
                script.onload = onLoad;
                script.onerror =
                    function (evt) {
                        reject(new Error(evt.message || "Could not load file"));
                    };
            }
            ;
            script.src = url;
            ;
            document.getElementsByTagName('head')[0].appendChild(script);
        });
    } : function (url, bypassCache) {
    if (bypassCache === void 0) { bypassCache = false; }
    return Promise.resolve(url);
};
//# sourceMappingURL=load_script.js.map