/*
    Time Complexity: 0(n) Loop
    Space Complexity: 0(1) constant variables
    // given a string s
    // return true if it is a palindrome, or false otherwise
    // Input: s = "A man, a plan, a canal: Panama"
    // Output: true
    // Explanation: "amanaplanacanalpanama" is a palindrome.
    // 1. Create regex to replace special characters with ""
    // 2. Create leftIndex variable to keep track of the left pointer.
    // 3. Create rightIndex variable to keep track of the right pointer.
    // 4. Create while loop until the pointers equal to each other.
        a. Create condition to see if values of pointers don't equal to each other. Return false.
        b. Increment leftIndex.
        c. Decrement rightIndex.
    5. Return true because all the values in the string are equal to each other.
    */

function validPalindrome(s) {
  s = s.replace(/[^a-z0-9]/gi, "");
  let leftIndex = 0;
  let rightIndex = s.length - 1;
  while (leftIndex < rightIndex) {
    if (s[leftIndex].toLowerCase() !== s[rightIndex].toLowerCase()) {
      return false;
    }

    leftIndex++;
    rightIndex--;
  }
  return true;
}
