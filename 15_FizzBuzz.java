// Write a program that outputs the string representation of numbers from 1 to n.
//
// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.
//
// Example:
//
// n = 15,
//
// Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]

class Solution {
    public List<String> fizzBuzz(int n) {
        List<String> list = new LinkedList<String>();
        String inputStr;
        for(int i=1; n>=i; i++) {
            inputStr = "";
            if (i % 3 == 0) {
                inputStr += "Fizz";
            }
            if (i % 5 == 0) {
                inputStr += "Buzz";
            }
            list.add(inputStr.equals("") ? String.valueOf(i) : inputStr);
        }
        return list;
    }
}
