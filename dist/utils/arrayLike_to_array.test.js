"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrayLike_to_array_1 = require("./arrayLike_to_array");
var fixtures_test_1 = require("./fixtures.test");
describe('arrayLike_to_array', function () {
    it('should convert NodeLists to arrays', function () {
        var nodeList = fixtures_test_1.doc.querySelectorAll('p');
        expect(nodeList).toBeInstanceOf(fixtures_test_1.window.NodeList);
        expect(arrayLike_to_array_1.arrayLike_to_array(nodeList)).toBeInstanceOf(Array);
    });
    it('should convert FileLists to arrays', function () {
        var fileInput = fixtures_test_1.doc.getElementById('file');
        if (fileInput) {
            var filesList = fileInput.files;
            expect(filesList).toBeInstanceOf(fixtures_test_1.window.FileList);
            expect(arrayLike_to_array_1.arrayLike_to_array(filesList)).toBeInstanceOf(Array);
        }
    });
    it('should shallow copy arrays', function () {
        var arr = [1, 2, 3, 4];
        var arr2 = arrayLike_to_array_1.arrayLike_to_array(arr);
        expect(arr).toEqual(arr2);
        expect(arr).toBe(arr);
        expect(arr).not.toBe(arr2);
    });
});
//# sourceMappingURL=arrayLike_to_array.test.js.map