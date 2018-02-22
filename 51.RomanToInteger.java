// Given a roman numeral, convert it to an integer.
//
// Input is guaranteed to be within the range from 1 to 3999.

class Solution {
    public int romanToInt(String s) {
        HashMap<Character, Integer> hashmap = new HashMap<Character, Integer>();
        hashmap.put('I', 1);
        hashmap.put('V', 5);
        hashmap.put('X', 10);
        hashmap.put('L', 50);
        hashmap.put('C', 100);
        hashmap.put('D', 500);
        hashmap.put('M', 1000);

        int size = s.length();
        int result = 0;
        boolean last = false;

        for(int i=0; size-1>i; i++) {
            if(hashmap.get(s.charAt(i)) < hashmap.get(s.charAt(i+1))){
                result += hashmap.get(s.charAt(i+1)) - hashmap.get(s.charAt(i));

                if(i+1 == size-1)
                    last = true;
                i++;
            }
            else
                result += hashmap.get(s.charAt(i));
        }

        if(last == true)
            return result;
        else
            return result + hashmap.get(s.charAt(size-1));
    }
}
