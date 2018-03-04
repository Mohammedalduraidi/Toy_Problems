// Write a function called characPosit, when provided with a letter, return its position in the alphabet.
// 	Input :: "a"
// 	Ouput :: "Position of alphabet: 1"
	function characPosit(character){
		var array ="abcdefghigklmnopqrstuvwxyz"
		
		for(var i = 0; i< array.length; i++){
			if(character === array[i]){
				return i + 1
			}
		}
	}

// Write a function called repeatStr which repeats the given
// string string exactly n times.
// repeatStr("hello",4) ==> 'hellohellohellohello'
	
	function repeatStr (n, s) {
		var str = ""
		for(var i = 0; i < s; i++){
			str = str +  n
		}
		return str
	}