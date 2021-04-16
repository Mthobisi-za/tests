const page = require('../src/countAllFromTown');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('countAllFromTown', () => {
    it("Function checks for registration numbers from Town and returns 3", ()=>{
        assert.deepEqual(page.from('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'), 3, "Suppose to return 3");
    });
    it("Function checks for registration numbers from Town and returns 4", ()=>{
        assert.deepEqual(page.from('CL 124, CL 124, CY 567, CL 345, CJ 456,CL 341','CL'), 4, "Suppose to return 4");
    });
});