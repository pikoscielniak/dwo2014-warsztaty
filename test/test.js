var assert = require("assert"),
    fnlist = require('../index'),
    add = fnlist.add,
    divide = fnlist.divide;
    
describe('add', function(){
    it('should return addition of 2 numbers', function(){
        assert.equal(6, add(5,1));
        assert.equal(8, add(6,2));
     })
})

describe('divide', function() {
    it('should return one number divided by second', function() {
        assert.equal(13, divide(169, 13));
        assert.equal(6, divide(48, 8));
    });
});
