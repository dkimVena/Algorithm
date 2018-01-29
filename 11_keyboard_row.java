// Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.
//
//
// American keyboard
//
//
// Example 1:
// Input: ["Hello", "Alaska", "Dad", "Peace"]
// Output: ["Alaska", "Dad"]
// https://leetcode.com/problems/keyboard-row/description/

class Solution {
    public String[] findWords(String[] words) {
        StringBuffer sb = new StringBuffer();
        String[] result = new String[0];

        for(String word: words) {
           if (word.matches("^[qwertyuiopQWERTYUIOP]*$")) {
                sb.append(word + " ");
            } else if (word.matches("^[asdfghjklASDFGHJKL]*$")) {
                sb.append(word + " ");
            } else if(word.matches("^[zxcvbnmZXCVBNM]*$")) {
                sb.append(word + " ");
            }
        }

        if(sb.toString().equals("")) {
            return result;
        }

        return result = sb.toString().split(" ");
    }
}
