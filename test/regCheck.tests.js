
describe('this test (regCheck)' , function(){
    it('should return true if reg is from town', function(){
        assert.equal(true,regCheck('2020 CY', 'CY'));

    
    });

    it('should return falls if regNo is not from town' , function(){
        assert.equal(false,regCheck('2020 CY', 'CA'));

    
    });

});