const page = require('../src/app');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe("Greet function", ()=>{
    it("Return Hello Jane", ()=>{
        assert.deepEqual(page.greet("Jane"), "Hello Jane", "The function should Return Hello Jane");  
    });
    it("Return Hello Mtho", ()=>{
        assert.deepEqual(page.greet("Mtho"), "Hello Mtho", "The function should Return Hello Mtho");
    });
    it("Return Hello John", ()=>{
        assert.deepEqual(page.greet("John"), "Hello John", "The function should Return Hello john");
    });
})
describe("isFromBellville function",()=>{
    it("Return True.", ()=>{
        assert.deepEqual(page.bell("CY 123"), true, "The test must return true");;
    });
    it("Return false", ()=>{
        assert.deepEqual(page.bell("Cj 123"), false, "The test must return true");;
    });
});
describe('regCheck function', () => {
    it("Function must check if registration number is for GP, L, EC, MP registration plates",()=>{
        assert.deepEqual(page.reg("DC 55 YU GP", "GP"), true, "Check for Gp registrations.");
    });
    it("Check for GP, L, EC, MP, if it is not then return false",()=>{
        assert.deepEqual(page.reg("DC 55 YU GP", "G"), false, "Function must check if registration number is for GP, L, EC, MP registration plates.");
    });
});
describe("countRegNumber function", ()=>{
    it("Return 3",()=>{
        assert.deepEqual(page.total("('CA 182736,CY 523519,CJ 812328')"), 3, "function that take's a string parameter and returns the number os registrations.");
    });
    it("Return 5",()=>{
        assert.deepEqual(page.total("('CA 182736, CA 182736,CY 523519,CJ 812328, CY 523519')"), 5, "function that take's a string parameter and returns the number of registrations.");
    });
})
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
describe('countAllPaarl', () => {
    it('return 3', () => {
        assert.deepEqual(page.all("CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123"), 3, "that takes a parameter and returns the number of registration numbers in the string for Paarl");
    });
    it('Return 1', () => {
        assert.deepEqual(page.all("CJ 2345, CL 123-546, CK 345"), 1, "that takes a parameter and returns the number of registration numbers in the string for Paarl");
    });
    it('Return 2', () => {
        assert.deepEqual(page.all("CJ 2345, CJ 2345, CL 123-546, CK 345"), 2, "that takes a parameter and returns the number of registration numbers in the string for Paarl");
    });
});
describe('countAllFromTown', () => {
    it("Return 3", ()=>{
        assert.deepEqual(page.from('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'), 3, "Suppose to return 3");
    });
    it("Return 4", ()=>{
        assert.deepEqual(page.from('CL 124, CL 124, CY 567, CL 345, CJ 456,CL 341','CL'), 4, "Suppose to return 4");
    });
});
//---------undeclraded functions---///

describe('transportFee', () => {
    it("Function must return R20",()=>{
        assert.deepEqual(page.trans("morning"), "R20", "Check for transport price.");
    });
    it("Function must return R10",()=>{
        assert.deepEqual(page.trans("afternoon"), "R10", "Check for transport price.");
    });
    it("Function must return Free",()=>{
        assert.deepEqual(page.trans("nightshift"), "free", "Check for transport price.");
    });
});
describe("totalPhoneBill", ()=>{
    it("Return R7.45",()=>{
        assert.deepEqual(page.totalp("call, sms, call, sms, sms"), "R7.45", "the function should return R7.45");
    });
     it("Return R12.95",()=>{
        assert.deepEqual(page.totalp("call, call, call, sms, call, sms, sms"), "R12.95", "the function should return R12.95");
    });
});

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

var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

var itemLis = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 13},
    {name : 'bananas', qty : 3},
    {name : 'apples', qty : 3},
];
var itemLi = [];
describe('findItemsOver20', () => {
    it("return all the products that have a quantity higher than 20", ()=>{
        assert.deepEqual(page.find(itemList), [{"name":"pears","qty":37},{"name":"bananas","qty":27}], " The function should return all the products that have a quantity higher than 20.");
    });
    it("return empty array", ()=>{
        assert.deepEqual(page.find(itemLis), [], " The function should return empty array.");
    });
     it("return undefined", ()=>{
        assert.deepEqual(page.find(itemLi), 0, " The function should return undefined.");
    });
});
var itemLists = [
{"name":"apples","qty":40},
{"name":"pears","qty":9},
{"name":"bananas","qty":23},
{"name":"apples","qty":37}
];
var itemListss = [
    {"name":"apples","qty":40},
    {"name":"pears","qty":9},
    {"name":"bananas","qty":23},
    {"name":"apples","qty":37}
    ];
describe('findItemsOver', () => {
    it('return products that are more than 20', () => {
        assert.deepEqual(page.findi(itemLists, 20), [{"name":"apples","qty":40},{"name":"bananas","qty":23},{"name":"apples","qty":37}], "The function should return products that have quantity higher than the threshold");
    });
    it('return products that are more than 10', () => {
        assert.deepEqual(page.findi(itemLists, 10), [{"name":"apples","qty":40},{"name":"bananas","qty":23},{"name":"apples","qty":37}], "The function should return products that have quantity higher than the threshold");
    });
    it('return products that are more than 30', () => {
        assert.deepEqual(page.findi(itemListss, 30), [{"name":"apples","qty":40},{"name":"apples","qty":37}], "The function should return products that have quantity higher than the threshold");
    });
});
var data = [
    {department: 'hardware', sales: 4500, day: 'Monday'},
    {department: 'outdoor', sales: 1500, day: 'Monday'},
    {department: 'carpentry', sales: 5500, day: 'Monday'},
    {department: 'hardware', sales: 7500, day: 'Tuesday'},
    {department: 'outdoor', sales: 2505, day: 'Tuesday'},
    {department: 'carpentry', sales: 1540, day: 'Tuesday'},
    {department: 'hardware', sales: 1500, day: 'Wednesday'},
    {department: 'outdoor', sales: 8507, day: 'Wednesday'},
    {department: 'carpentry', sales: 8009, day: 'Wednesday'},
    {department: 'hardware', sales: 12000, day: 'Thursday'},
    {department: 'outdoor', sales: 18007, day: 'Thursday'},
    {department: 'carpentry', sales: 6109, day: 'Thursday'},
    {department: 'hardware', sales: 7005, day: 'Friday'},
    {department: 'outdoor', sales: 12006, day: 'Friday'},
    {department: 'carpentry', sales: 16109, day: 'Friday'}
];
var data1 = [
    {department: 'hardware', sales: 4500, day: 'Monday'},
    {department: 'outdoor', sales: 15000, day: 'Monday'},
    {department: 'carpentry', sales: 5500, day: 'Monday'},
    {department: 'hardware', sales: 7500, day: 'Tuesday'},
    {department: 'outdoor', sales: 2505, day: 'Tuesday'},
    {department: 'carpentry', sales: 1540, day: 'Tuesday'},
    {department: 'hardware', sales: 1500, day: 'Wednesday'},
    {department: 'outdoor', sales: 8507, day: 'Wednesday'},
    {department: 'carpentry', sales: 8009000, day: 'Wednesday'},
    {department: 'hardware', sales: 12000, day: 'Thursday'},
    {department: 'outdoor', sales: 18007, day: 'Thursday'},
    {department: 'carpentry', sales: 6109, day: 'Thursday'},
    {department: 'hardware', sales: 7005, day: 'Friday'},
    {department: 'outdoor', sales: 12006, day: 'Friday'},
    {department: 'carpentry', sales: 16109, day: 'Friday'}
];
var data2 = [
    {department: 'hardware', sales: 4500, day: 'Monday'},
    {department: 'outdoor', sales: 15000, day: 'Monday'},
    {department: 'carpentry', sales: 5500, day: 'Monday'},
    {department: 'hardware', sales: 7500, day: 'Tuesday'},
    {department: 'outdoor', sales: 2505, day: 'Tuesday'},
    {department: 'carpentry', sales: 1540, day: 'Tuesday'},
    {department: 'hardware', sales: 1500, day: 'Wednesday'},
    {department: 'outdoor', sales: 8507, day: 'Wednesday'},
    {department: 'carpentry', sales: 8009, day: 'Wednesday'},
    {department: 'hardware', sales: 12000, day: 'Thursday'},
    {department: 'outdoor', sales: 18007, day: 'Thursday'},
    {department: 'carpentry', sales: 6109, day: 'Thursday'},
    {department: 'hardware', sales: 70050000, day: 'Friday'},
    {department: 'outdoor', sales: 12006, day: 'Friday'},
    {department: 'carpentry', sales: 16109, day: 'Friday'}
];
describe('mostProfitableDepartment', () => {
    it("return outdoor ", ()=>{
        assert.deepEqual(page.most(data), "outdoor", "Suppose to return outdoor");
    });
    it("return carpentry",()=>{
        assert.deepEqual(page.most(data1), "carpentry", "must return carpentry");
    });
    it("return hardware",()=>{
        assert.deepEqual(page.most(data2), "hardware", "must return hardware");
    });
});

