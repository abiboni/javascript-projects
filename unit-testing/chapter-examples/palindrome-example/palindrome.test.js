const isPalindrome = require('../palindrome.js');

describe("isPalindrome", function(){

   test("should return true for a single letter", function() {
      expect(isPalindrome("a")).toBe(true);
   });

   test("should return true for a single letter repeated", function() {
      expect(isPalindrome("aaa")).toBe(true);
   });

   test("should return true for a simple palindrome", function() {
      expect(isPalindrome("aba")).toBe(true);
   });

   test("should return true for a longer palindrome", function() {
      expect(isPalindrome("racecar")).toBe(true);
   });

});