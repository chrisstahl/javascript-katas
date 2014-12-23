require(['underscore'], function (underscore) {
    underscore = underscore;
});

var mySpy = {

	myFunction : function(){
		console.log('I got called');
	}
};

//Example Module 
var multiplier = function(mySpy){

	var self = {};


	self.multiply_by = function(multiplier){
		mySpy.myFunction();
	};

	return self;
}(mySpy);


