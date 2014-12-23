//Example Specs
describe("Example Tests", function(){

	beforeEach(function(){
		spyOn(mySpy, 'myFunction');
	});


	it("Test Multiply", function(){
		var result = multiplier.multiply_by(4);
		expect(mySpy.myFunction).toHaveBeenCalled();
	});
	
});