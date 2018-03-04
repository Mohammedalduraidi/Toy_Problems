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

function accum(input){
    var str = ""
   var x = input.split("")
   each(x, function(element, I){
       for(var i = 0; i <= I; i++){
           if (i === 0){
        str = str + element.toUpperCase() 
           }
           else{
               str = str + element.toLowerCase()
           }
       }
    
       str = str + "-"
   })
   return str.slice(0,str.length -1)
}
