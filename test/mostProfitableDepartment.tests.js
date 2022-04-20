describe('this test (mostProfitableDepartment)', function () {
    it('should return the only the the department name that has most profit ', function () {

        assert.equal('outdoor', mostProfitableDepartment(salesData), "Most profitable department is 'outdoor' for dataset 1");
        assert.equal('electronics', mostProfitableDepartment(salesData2), "Most profitable department is 'electronics' for dataset 2");




    });
    it('should return an an empty string if you enter an arrey ', function () {

        assert.deepEqual("", mostProfitableDepartment(salesData1));





    });
});
