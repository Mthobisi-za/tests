const page = require('../src/findItemsOver20');
const assert = require('chai').assert;
const expect = require('chai').expect;

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
    it("should return all the products that have a quantity higher than 20", ()=>{
        assert.deepEqual(page.find(itemList), [{"name":"pears","qty":37},{"name":"bananas","qty":27}], " The function should return all the products that have a quantity higher than 20.");
    });
    it("should return empty array", ()=>{
        assert.deepEqual(page.find(itemLis), [], " The function should return empty array.");
    });
     it("should return undefined", ()=>{
        assert.deepEqual(page.find(itemLi), 0, " The function should return undefined.");
    });
});