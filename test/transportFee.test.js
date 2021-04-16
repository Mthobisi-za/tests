const page = require('../src/transportFee');
const assert = require('chai').assert;
const expect = require('chai').expect;

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