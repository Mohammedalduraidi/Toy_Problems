	// Given a string, swap the case for each of the letters.
	// IbrAHiM --> iBRahIm
	// ToYPRoblEm --> tOyprOBLeM
	function swap(input){

		var x = input.split("")
		var result = ""
		for(var i = 0; i < x.length; i++){
		result = result + x.slice(-1,x.length)	
		
	}
	return result
}