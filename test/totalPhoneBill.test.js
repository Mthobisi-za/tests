const page = require('../src/totalPhoneBill');
const assert = require('chai').assert;
const expect = require('chai').expect;


describe("totalPhoneBill", ()=>{
    it("Return R7.45",()=>{
        assert.deepEqual(page.totalp("call, sms, call, sms, sms"), "R7.45", "the function should return R7.45");
    });
     it("Return R12.95",()=>{
        assert.deepEqual(page.totalp("call, call, call, sms, call, sms, sms"), "R12.95", "the function should return R12.95");
    });
});
