const page = require('../src/countRegNumber');
const assert = require('chai').assert;
const expect = require('chai').expect;


describe("countRegNumber function", ()=>{
    it("Count all the registration numbers",()=>{
        assert.deepEqual(page.total("('CA 182736,CY 523519,CJ 812328')"), 3, "function that take's a string parameter and returns the number os registrations.");
    });
    it("ount all the registration numbers",()=>{
        assert.deepEqual(page.total("('CA 182736, CA 182736,CY 523519,CJ 812328, CY 523519')"), 5, "function that take's a string parameter and returns the number of registrations.");
    });
})