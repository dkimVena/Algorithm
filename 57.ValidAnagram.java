// Given two strings s and t, write a function to determine if t is an anagram of s.
//
// For example,
// s = "anagram", t = "nagaram", return true.
// s = "rat", t = "car", return false.
//
// Note:
// You may assume the string contains only lowercase alphabets.
//
// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

class Solution {
    public boolean isAnagram(String s, String t) {
        int[] temp = new int[26];
        int size = s.length();
        int tSize = t.length();

        for(int i=0; size>i; i++) {
            int ch = s.charAt(i) - 'a';
            temp[ch]++;
        }

        for(int i=0; tSize>i; i++) {
            int ch = t.charAt(i) - 'a';

            if(temp[ch] == 0)
                return false;
            else
                temp[ch]--;
        }

        for(int i=0; 26>i; i++) {
            if(temp[i] != 0)
                return false;
        }

        return true;
    }
}
