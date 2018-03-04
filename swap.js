	// Given a string, swap the case for each of the letters.
	// IbrAHiM --> iBRahIm
	// ToYPRoblEm --> tOyprOBLeM
	function swap(input){
		var str = ""
		for ( var i = 0; i < input.length; i++){
			if (input[i] === input[i].toUpperCase()){
				str = str + input[i].toLowerCase()
			}
			else {
				str = str + input[i].toUpperCase()
			}
		}
	return str 
	
}
