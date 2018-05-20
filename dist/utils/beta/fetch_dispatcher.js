"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parse_json_1 = require("../parse_json");
/**
 * Creates an equivalent to the native fetch,
 * but that dispatches events on error, success, and loading
 * it also caches responses
 * @param _fetch
 */
exports.fetch_dispatcher = function (_fetch) {
    if (_fetch === void 0) { _fetch = fetch; }
    var successListeners = [];
    var errorListeners = [];
    var loadingListeners = [];
    var anyListeners = [];
    var cache = new Map();
    var dispatch = function (arr) {
        return function (evt) {
            arr.forEach(function (l) { return l(evt); });
            anyListeners.forEach(function (l) { return l(evt); });
            return evt;
        };
    };
    var dispatchSuccess = dispatch(successListeners);
    var dispatchError = dispatch(errorListeners);
    var dispatchLoading = dispatch(loadingListeners);
    var addEventListener = function (arr) {
        return function (listener) {
            arr.push(listener);
            var removeEventListener = function () {
                var index = arr.indexOf(listener);
                if (index >= 0) {
                    arr.splice(index, 1);
                }
            };
            return removeEventListener;
        };
    };
    var onSuccess = addEventListener(successListeners);
    var onError = addEventListener(errorListeners);
    var onLoad = addEventListener(loadingListeners);
    var NoURLError = new Error("no URL provided");
    var fetch_and_dispatch = function (request, init) {
        dispatchLoading({ type: 'loading', request: request });
        return _fetch(request, init)
            .then(function (_a) {
            var text = _a.text, statusText = _a.statusText, status = _a.status;
            return (text()
                .then(parse_json_1.parse_json)
                .then(function (data) {
                return (status >= 400 && status <= 599
                    ? dispatchError({ type: 'error', request: request, data: data, error: new Error(statusText) })
                    : (data.error && data.error.message
                        // tslint:disable-next-line:max-line-length
                        ? dispatchError({ type: 'error', request: request, data: data, error: new Error(data.error.message) })
                        : dispatchSuccess({ type: 'success', request: request, data: data })));
            }));
        }).then(function (evt) {
            if (evt.type === 'error') {
                throw new Error(evt.error.message);
            }
            ;
            return evt.data;
        })
            .catch(function (error) {
            return (dispatchError({ type: 'error', request: request, error: error }));
        });
    };
    var fetch_and_cache = function (request, init) {
        if (!request) {
            return Promise.reject(NoURLError);
        }
        ;
        if (!(request instanceof Request)) {
            request = new Request(request);
        }
        ;
        var url = request.url, method = request.method;
        var key = method + ':' + url;
        if (init && init.invalidate) {
            cache.delete(key);
        }
        ;
        if (!cache.has(key)) {
            var promise = fetch_and_dispatch(request, init);
            cache.set(key, promise);
        }
        ;
        return cache.get(key);
    };
    var methods = { onSuccess: onSuccess,
        onError: onError,
        onLoad: onLoad,
        load: fetch_and_dispatch
    };
    var final = Object.assign(fetch_and_cache, methods);
    return final;
};
//# sourceMappingURL=fetch_dispatcher.js.map