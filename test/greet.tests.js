console.log(greet("Bob"));
console.log(greet("sam"));


var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
  ];
  
  var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
  ];
  
  var itemList2 = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 19},
    {name : 'bananas', qty : 17},
    {name : 'apples', qty : 3},
  ];
  
  var results2 = [];
  
  var itemList3 = [
    {name : 'apples', qty : 40},
    {name : 'pears', qty : 20},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
  ];
  
  var results3 = [
    {name : 'apples', qty : 40},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
  ];
  

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