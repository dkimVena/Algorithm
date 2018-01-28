// Write a function that takes a string as input and returns the string reversed.
//
// Example:
// Given s = "hello", return "olleh".

class Solution {
    public String reverseString(String s) {
        char[] charArr = s.toCharArray();
        char[] resultArr = new char[s.length()];
        int len = s.length() - 1;

        for(int i=0; len >= i; i++) {
            resultArr[i] = charArr[len - i];
        }
        return String.valueOf(resultArr);
    }
}
