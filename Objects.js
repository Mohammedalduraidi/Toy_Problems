// 1-define objects for 5 of your classmater containing the following keys:
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!
var mate1  = {
	
 firstName: "abdullah ", middleName: "ahmad ", lastName: "alramahi ",age:29,favoriteSports:"football",nationality:"jordanien"}
var mate2 ={
 firstName: "fares ", middleName: "mohammed", lastName: "dunno ",age:23,favoriteSports:"football",nationality:"jordanien"}
var mate3={
 firstName: "raed ", middleName: "mohammed", lastName: "dunno ",age:24,favoriteSports:"football",nationality:"jordanien"
}
var mate4={
firstName: "mohammed ", middleName: "mohammed", lastName: "dunno ",age:24,favoriteSports:"football",nationality:"jordanien"}
var mate5={
firstName: "atheer ", middleName: "mohammed", lastName: "dunno ",age:28,favoriteSports:"football",nationality:"jordanien"}
var mates = [mate1 ,mate2 , mate3 , mate4 , mate5];
   
// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.
function olderClassMate(mates){
var result = 0
for(var i = 0; i<mates.length; i++){
	if (mates[i].age > result){
		result = mates[i].age
	}
	
}
return result
}

// 3-write a function that takes an object as argument and returns how many keys does that object contain.
	 nbOfObjKeys({}) // ==> 0
	 nbOfObjKeys({name:"housam",age:"3"}) // ==> 2

function takeItEasy (obj){
var total = 0
for (var key in obj){
	total++
}
return total
}
// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
	    ['hi','hello','welcome','hy'] // ==> ["hi","hy"]

		function string(array){
			var result = []
			for(var i = 0; i < array.length; i++){
				for(var j = i + 1 ; j < array.length; j++){
					if (array[i].length === array[j].length){
						result.push(array[i] , array[j])
					}
				}
			}
			return result
		}