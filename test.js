const expect = require("expect");
const objFlattener = require("./objFlattener");

describe("Object flattener", () => {
   
    it("should flatten an object with one nested", () => {
        expect(objFlattener({ foo: { bar: false } })).toEqual({ "foo.bar": false });
    });
    it("should flatten an object with two nested objects", () => {
        expect(objFlattener({ foo: { bar: false }, test: { test1: true } })).toEqual({ "foo.bar": false ,  "test.test1": true });
    });
    it("should flatten an object with three level nested object", () => {
        expect(objFlattener({ foo: { bar: { test: false } } })).toEqual({ "foo.bar.test": false  });
    });
    it("should return the same object when is already flattened", () => {
        expect(objFlattener({ foo:  false })).toEqual({ foo: false });
    });
    it("should return empty object when is called with empty one", () => {
        expect(objFlattener({ })).toEqual({ });
    });
    it("should return empty object when is called with null", () => {
        expect(objFlattener(null)).toEqual({});
    });
    it("should return empty object when is called with one object which is null", () => {
        expect(objFlattener({test: null})).toEqual({});
    });
});