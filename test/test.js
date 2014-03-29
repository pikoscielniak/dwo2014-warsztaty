var assert = require("assert"),
    func = require('../index').func;
var add = func.add,
    is_odd = func.is_odd;
describe('add', function(){
    it('should return addition of 2 numbers', function(){
        assert.equal(6, add(5,1));
        assert.equal(8, add(6,2));
     })
})

describe('is_odd', function(){
    it('should check if nubmber is odd', function(){
        assert.equal(true, is_odd(3));
        assert.equal(false, is_odd(4));
     })
})

