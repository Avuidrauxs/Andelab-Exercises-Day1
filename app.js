module.exports = {

findMinMax : function (arr){
				if (Math.min(...arr) === Math.max(...arr)) return [Math.max(...arr)] ;
	  			return [Math.min(...arr),Math.max(...arr)];
				}

};