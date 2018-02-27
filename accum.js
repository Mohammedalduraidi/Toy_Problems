// This time no story, no theory. The examples below show you what do you need, write a function to accomplich that
// Examples:
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"

function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i], i); 
    } 
}

//cwAT == c = 0, w = 1, A = 2 , T = 3
    function accum(input){
        var num = 0
       var x = input.split("")
       var counter = ""
       each(x, function(elem, index){
          if (index === num){
            num++
        counter = elem + elem 
          }
           console.log(i)
       })
       return counter
       }
       
    