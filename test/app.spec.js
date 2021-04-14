const page = require('../src/app');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe("Greet function", ()=>{
    it("The function should take a parameter name and return a greet string.", ()=>{
        assert.deepEqual(page.greet("Jane"), "Hello Jane", "The function must return a string and name greeting the neighbour");
    })
})
describe("isFromBellville function",()=>{
    it("The function should identify the origin of car's registration.", ()=>{
        assert.deepEqual(page.bell("CY 123"), true, "The test must return true");;
    })
});
describe('regCheck function', () => {
    it("Function must check if registration number is for GP, L, EC, MP registration plates",()=>{
        assert.deepEqual(page.reg("DC 55 YU GP", "GP"), true, "Check for Gp registrations.");
    })
});
describe("countRegNumber function", ()=>{
    it("function that take's a string parameter and returns the number os registrations.",()=>{
        assert.deepEqual(page.total("('CA 182736,CY 523519,CJ 812328')"), 3, "the function should return 3");
    })
})
describe('isWeekday', () => {
    it("that takes a string parameter - to find out if the parameter passed in is a day of the week (ie. Not a weekend day)",()=>{
        assert.deepEqual(page.week("Monday"), true, "The function must return true for weekdays.");
    })
});
describe('yearsAgo', () => {
    it("that takes in a year and return how many years ago that year is from the current year", ()=>{
        assert.deepEqual(page.years(2015), 6, "Must return different in years.");
    })
});
describe('countAllPaarl', () => {
    it('that takes a parameter and returns the number of registration numbers in the string for Paarl', () => {
        assert.deepEqual(page.all("CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123"), 3, "Must return number of registration that are from paarl");
    });
});
describe('countAllFromTown', () => {
    it(" that takes a string parameter and It should return number registration numbers", ()=>{
        assert.deepEqual(page.from('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'), 3, "Suppose to return 3");
    })
});
//---------undeclraded functions---///

describe('transportFee', () => {
    it("Function must return price",()=>{
        assert.deepEqual(page.trans("morning"), "R20", "Check for transport price.");
    })
});
describe("totalPhoneBill function", ()=>{
    it("function that takes in a string calls made and sms's sent. Calculate the total bill for the data provided.",()=>{
        assert.deepEqual(page.totalp("call, sms, call, sms, sms"), "R7.45", "the function should return R7.45");
    })
});
/*
describe('fromWhere', () => {
    it("that takes a string parameter - to find out if the parameter passed in is a day of the week (ie. Not a weekend day)",()=>{
        assert.deepEqual(page.week("Monday"), true, "The function must return true for weekdays.");
    })
});
describe('findItemsOver20', () => {
    it("that takes in a year and return how many years ago that year is from the current year", ()=>{
        assert.deepEqual(page.years(2015), 6, "Must return different in years.");
    })
});
describe('findItemsOver', () => {
    it('that takes a parameter and returns the number of registration numbers in the string for Paarl', () => {
        assert.deepEqual(page.all("CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123"), 3, "Must return number of registration that are from paarl");
    });
});
describe('mostProfitableDepartment', () => {
    it(" that takes a string parameter and It should return number registration numbers", ()=>{
        assert.deepEqual(page.from('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'), 3, "Suppose to return 3");
    })
});
*/
//---------undeclraded functions---///
