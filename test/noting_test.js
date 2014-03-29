do_nothing = require('../index').do_nothing;
describe('do_nothing', function(){
    it('should return null', function(){
        assert.equal(null, do_nothing());
    })
})
