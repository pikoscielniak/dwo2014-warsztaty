var assert = require("assert"),
    add = require('../index').add;
    mod = require('../index').mod;
describe('add', function(){
    it('should return addition of 2 numbers', function(){
        assert.equal(6, add(5,1));
        assert.equal(8, add(6,2));
     })
})
describe('mod', function(){
    it('should return reminder from dividing of 2 numbers', function(){
        assert.equal(1, mod(3,2));
        assert.equal(3, mod(7,4));
        assert.equal(0, mod(9,3));
     })
})
