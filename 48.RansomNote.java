// Given an arbitrary ransom note string and another string containing letters from all the magazines,
// write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.
//
// Each letter in the magazine string can only be used once in your ransom note.
//
// Note:
// You may assume that both strings contain only lowercase letters.
//
// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true

class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        int size = ransomNote.length();
        int sizeMagazine = magazine.length();

        int[] arr = new int[26];

        for(int i=0; size>i; i++) {
            int t = ransomNote.charAt(i) - 'a';
            arr[t]++;
        }

        for(int i=0; sizeMagazine>i; i++) {
            int t = magazine.charAt(i) - 'a';
            arr[t]--;
        }

        for(int i=0; 26>i; i++) {
            if(arr[i]>0)
                return false;
        }
        return true;
    }
}
