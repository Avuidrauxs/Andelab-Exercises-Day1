module.exports = {
//Funtion to find Minimum and Maximum numbers in an Array
findMinMax : function (arr){
				if (Math.min(...arr) === Math.max(...arr)) return [Math.max(...arr)] ;
	  			return [Math.min(...arr),Math.max(...arr)];
				}

};