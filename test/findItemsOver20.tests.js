describe('this test (findItemsOver20)', function () {
    it('should return the only the list of iterms with qty that is greater than 20 ', function () {

        assert.deepEqual(results, findItemsOver20(itemList));
        


        

    });
    it('should return an empty list if all the data in the list has qty less than 20 ', function () {

        assert.deepEqual(results2, findItemsOver20(itemList2));



        

    });
    it('should not return the data that is 20 on the dot', function () {

        assert.deepEqual(results3, findItemsOver20(itemList3));


        

    });
});
