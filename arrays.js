var peaks = ["green", "bear", "sanitas", "flagstaff"]
var zipCodes =[01776, 80302, 15217, 30302]
var fakeNews = [false, false, false, false]

//Calling the push method on the array peaks will add the missing peak to the array, as the final element.
//It will return the number of array items, post-operation, if we are interested. 
peaks.push("South Boulder Peak") 
//Calling the method, shift, on zipCodes will eliminate the first zip code. Bye Bye Sudbury. 
//It will return that element if we would like to capture it. 
zipCodes.shift()
//Calling the pop method on the fakeNews array will eliminate the final element in the array
//It will also return that element, if we decide to capture it. 
fakeNews.pop()