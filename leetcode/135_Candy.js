// 135. Candy
// param {ratings[]},return{number}

// 🐥 maitain the "more candies than neighbors" while minimizing candy usage

// Iterate through the line of childre, giving them candies one by one. 
// Each children receives at least one candy. 
// Initialize the distribution by starting giving one candy to each childe
// Increasing rating, when encounter a child with a higher rating than the
// previous one, give them one more.
// Decreasing or equal ratings: consider the candies already given to their 
// neighbors and adjust accodingly to maintain the 2rd condition

var candy = function(ratings){
// Edge cases
// 1. All the ratings are equal
// 2. input arr.length is 1

}