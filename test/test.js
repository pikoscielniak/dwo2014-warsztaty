var assert = require("assert"),
    add = require('../index').add;
describe('add', function(){
    it('should return addition of 2 numbers', function(){
        assert.equal(6, add(5,1));
        assert.equal(8, add(6,2));
     })
})

describe('sub', function(){
    it('should return subtraction of 2 numbers', function(){
	assert.equal(4, sub(6,2));
	assert.equal(-1, sub(2,3));
     )}
})
