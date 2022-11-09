var peaks = ["green", "bear", "sanitas", "flagstaff"]
var zipCodes =[01776, 80302, 15217, 30302]
var fakeNews = [false, false, false, false]

//Calling the push method on the array peaks will add the missing peak to the array, as the final element.
//It will return the number of array items, post-operation, if we are interested. 
peaks.push("South Boulder Peak") 
console.log(peaks) 
//Calling the method, shift, on zipCodes will eliminate the first zip code. Bye Bye Sudbury. 
//It will return that element if we would like to capture it. 
zipCodes.shift()
console.log(zipCodes)
//Calling the pop method on the fakeNews array will eliminate the final element in the array
//It will also return that element, if we decide to capture it. 
fakeNews.pop()
console.log(fakeNews)

/* ARRAY INDEX POSITIONS
Array index positions start from zero, so the first element is located at index 0. if we want to convert from the index position to the "ordinal" position in the way that we are used to describing them in plain english (first, second, third... ), we can use the following (completely useless) function :) */

function convertToIndex(ordinal) {
    return --ordinal //need the decrement operator to be prefix, otherwise we will return the value prior to oeprating on it 
}
let ordinalExample = 5

console.log(convertToIndex(ordinalExample))
