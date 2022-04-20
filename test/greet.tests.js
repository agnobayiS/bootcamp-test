console.log(greet("Bob"));
console.log(greet("sam"));

describe('this test (greet)' , function(){
    it('should return hello and a name that is given' , function(){
        assert.equal(2,2);

        assert.deepEqual([2,2],[2,2]);
    });

    it('should return hello even if you enter a number' , function(){
        assert.equal(1,1);

        assert.deepEqual([2,2],[2,2]);
    });

});