const page = require('../src/findItemsOver');
const assert = require('chai').assert;
const expect = require('chai').expect;

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