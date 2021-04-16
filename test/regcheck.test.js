const page = require('../src/regCheck');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('regCheck function', () => {
    it("Function must check if registration number is for GP, L, EC, MP registration plates",()=>{
        assert.deepEqual(page.reg("DC 55 YU GP", "GP"), true, "Check for Gp registrations.");
    });
    it("Check for GP, L, EC, MP, if it is not then return false",()=>{
        assert.deepEqual(page.reg("DC 55 YU GP", "G"), false, "Function must check if registration number is for GP, L, EC, MP registration plates.");
    });
});