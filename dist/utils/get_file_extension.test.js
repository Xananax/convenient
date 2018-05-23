"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_file_extension_1 = require("./get_file_extension");
describe('get_file_extension', function () {
    it("should return an file's extension", function () {
        expect(get_file_extension_1.get_file_extension('file.jpg')).toEqual('jpg');
    });
    it("should return an file's extension even if the name contains dots", function () {
        expect(get_file_extension_1.get_file_extension('file.a.b.c.d.jpg')).toEqual('jpg');
    });
    it("should return nothing if the file has no extension", function () {
        expect(get_file_extension_1.get_file_extension('file')).toEqual('');
        expect(get_file_extension_1.get_file_extension('.file')).toEqual('');
        expect(get_file_extension_1.get_file_extension('.file.jpg')).toEqual('jpg');
    });
    it("should return an file's extension as lowercase", function () {
        expect(get_file_extension_1.get_file_extension('file.JPG')).toEqual('jpg');
    });
});
//# sourceMappingURL=get_file_extension.test.js.map