// 58. Length of Last Word

// Start from the end of the string s, loop through every char
// Track the first " " and the second non-consecutive " ", 
// Transform their index to indexEnd and indexStart
// Use .slice() to get the substring(last word)
// Time complexity: O(n)-- num of spaces and chars
// Space complexity: O(n) -- substring.length

