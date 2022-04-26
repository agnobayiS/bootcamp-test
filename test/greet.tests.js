
describe('this test (greet)' , function(){
    it('should return hello and a name that is given' , function(){
        assert.equal('Hello, boo',greet('boo'));

        
    });

    it('should return hello even if you enter a number' , function(){
        assert.equal("Hello, 2",greet(2));


    });
    it('should return hello even if you enter an empty string' , function(){
        assert.equal("Hello, ",greet(""));


    });
   

});