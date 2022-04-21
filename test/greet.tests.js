console.log(greet("Bob"));
console.log(greet("sam"));

describe('this test (greet)' , function(){
    it('should return hello and a name that is given' , function(){
        assert.equal('Hello, boo',greet('boo'));

        
    });

    it('should return hello even if you enter a number' , function(){
        assert.equal("Hello, sam",greet('sam'));


    });
    it('should return hello even if you enter a number' , function(){
        assert.equal("Hello, ",greet(""));


    });
   

});