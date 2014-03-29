var assert = require("assert"),
    add = require('../index').add;
describe('add', function(){
    it('should return addition of 2 numbers', function(){
        assert.equal(6, add(5,1));
        assert.equal(8, add(6,2));
     })
})
