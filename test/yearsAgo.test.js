const page = require('../src/yearsAgo');
const assert = require('chai').assert;
const expect = require('chai').expect;


describe('yearsAgo', () => {
    it("Must return the different of 6", ()=>{
        assert.deepEqual(page.years(2015), 6, "that takes in a year and return how many years ago that year is from the current year.");
    });
    it("Must return the different of 10", ()=>{
        assert.deepEqual(page.years(2011), 10, "that takes in a year and return how many years ago that year is from the current year.");
    });
    it("Must return the different of 0", ()=>{
        assert.deepEqual(page.years(2021), 0, "that takes in a year and return how many years ago that year is from the current year.");
    });
});