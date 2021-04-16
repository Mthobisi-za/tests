const page = require('../src/fromWhere');
const assert = require('chai').assert;
const expect = require('chai').expect;


describe('fromWhere', () => {
    it("return from Bellville ",()=>{
        assert.deepEqual(page.fromw("CY"), "Bellville", "that takes a car registration number as a parameter and returns the town the car is from.");
    });
    it("return from Paarl ",()=>{
        assert.deepEqual(page.fromw("CJ"), "Paarl", "that takes a car registration number as a parameter and returns the town the car is from.");
    });
    it("return from Cape Town ",()=>{
        assert.deepEqual(page.fromw("CA"), "Cape Town", "that takes a car registration number as a parameter and returns the town the car is from.");
    });
     it("return from Some other place! ",()=>{
        assert.deepEqual(page.fromw("CK"), "Some other place!", "that takes a car registration number as a parameter and returns the town the car is from.");
    });
});