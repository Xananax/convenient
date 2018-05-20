"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Calls the specified callback function for all the elements in an array.
 * The return value of the callback function is the accumulated result, and is
 * provided as an argument in the next call to the callback function.
 * @param callbackfn A function that accepts up to four arguments. The reduce
 * method calls the callbackfn function one time for each element in the array.
 * @param initialValue If initialValue is specified, it is used as the initial value
 * to start the accumulation. The first call to the callbackfn function provides this
 * value as an argument instead of an array value.
 */
exports.reduce = function (fn) {
    return function (arr, initialValue) {
        var length = arr.length;
        var i = 0;
        var value;
        if (typeof initialValue === 'undefined') {
            value = arr[i++];
        }
        else {
            value = initialValue;
        }
        ;
        for (i; i < length; i++) {
            var item = arr[i];
            value = fn(value, item, i, arr);
        }
        ;
        return value;
    };
};
exports.reduce_obj = function (fn) {
    return function (obj, initialValue) {
        var keys = Object.keys(obj);
        var length = keys.length;
        var i = 0;
        var value;
        if (typeof initialValue === 'undefined') {
            value = obj[keys[i++]];
        }
        else {
            value = initialValue;
        }
        ;
        for (i; i < length; i++) {
            var key = keys[i];
            var item = obj[key];
            value = fn(value, item, key, obj);
        }
        ;
        return value;
    };
};
//# sourceMappingURL=reduce.js.map