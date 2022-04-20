describe('this test (isWeekday)' , function(){
    it('should return true if the dayis a weekday', function(){
        assert.equal(true,isWeekday('Monday'));

    
    });

    it('should return falls if its not weekday' , function(){
        assert.equal(false,isWeekday('sunday'));

    
    });

});