describe('this test (findItemsOver)', function () {
    it('should return the only the name of iterms with qty that is over the threshold ', function () {

        assert.deepEqual(results, findItemsOver(itemList, 20));
        assert.deepEqual(results2, findItemsOver(itemList2, 20));
        assert.deepEqual(results3, findItemsOver(itemList3, 20));
        


    });

    it('should return an empty list if all data in the list is less than threshold ', function () {

        assert.deepEqual(results2, findItemsOver(itemList2, 20));
    
        


    });


});