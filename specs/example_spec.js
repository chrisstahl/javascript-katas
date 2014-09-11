require(['../app/example'], function (multiplier) {
    multiplier = multiplier;
});

//Example Specs
describe("Example Tests", function(){
	it("Tests True vs False", function(){
		var result = multiplier.multiply_by(4);
		expect(result).toEqual([4,8,12,16,20]);
	});
});