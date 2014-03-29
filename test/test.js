var assert = require("assert"),
    add = require('../index').add,
	subtract = require('../index').subtract;
describe('add', function(){
    it('should return addition of 2 numbers', function(){
        assert.equal(6, add(5,1));
        assert.equal(8, add(6,2));
     })
})
describe('subtract', function(){
    it('should return subtraction of 2 numbers', function(){
        assert.equal(4, subtract(5,1));
        assert.equal(6, subtract(8,2));
     })
})