const page = require('../src/isFromBellville');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe("isFromBellville function",()=>{
    it("Return True.", ()=>{
        assert.deepEqual(page.bell("CY 123"), true, "The test must return true");;
    });
    it("Return false", ()=>{
        assert.deepEqual(page.bell("Cj 123"), false, "The test must return true");;
    });
});