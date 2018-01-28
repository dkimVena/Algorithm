// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
//
// Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Note: In the string, each word is separated by single space and there will not be any extra space in the string.

class Solution {
    public String reverseWords(String s) {
        String[] strArr = s.split(" ");
        StringBuffer sb = new StringBuffer();
        int len = strArr.length;

        for(int i=0; len>i; i++) {
            sb.append(reverseString(strArr[i])).append(" ");
        }

        return sb.toString().trim();
    }

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
