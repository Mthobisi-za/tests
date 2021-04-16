const page = require('../src/isWeekday');
const assert = require('chai').assert;
const expect = require('chai').expect;


describe('isWeekday', () => {
    it("Return true for Monday",()=>{
        assert.deepEqual(page.week("Monday"), true, "that takes a string parameter - to find out if the parameter passed in is a day of the week ie. Not a weekend day.");
    });
    it("Return true for weekday Tuesday",()=>{
        assert.deepEqual(page.week("Tuesday"), true, "that takes a string parameter - to find out if the parameter passed in is a day of the week ie. Not a weekend day");
    });
    it("Return false for Sunday",()=>{
        assert.deepEqual(page.week("Sunday"), false, "that takes a string parameter - to find out if the parameter passed in is a day of the week ie. Not a weekend day");
    });
});