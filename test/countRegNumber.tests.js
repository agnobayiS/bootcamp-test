describe('this test (countRegNumber)' , function(){
    it('should return the number the number of regNo in the list' , function(){
        assert.equal(3,countRegNumber("111 CY,233 CY,222 CY"));

        // assert.deepEqual([2,2],[2,2]);
    });

    it('should return one when the is an empty string' , function(){
        assert.equal(1,countRegNumber(''));

    //     assert.deepEqual([2,2],[2,2]);
    });

});