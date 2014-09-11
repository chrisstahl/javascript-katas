require(['underscore'], function (underscore) {
    underscore = underscore;
});

//Example Module 
var multiplier = function(){

	var self = {};


	self.multiply_by = function(multiplier){
		return _.map([1,2,3,4,5], function(foo){
			return foo * multiplier;
		});
	};

	return self;
}();