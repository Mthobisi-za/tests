const page = require('../src/greet');
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