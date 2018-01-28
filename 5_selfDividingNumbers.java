// A self-dividing number is a number that is divisible by every digit it contains.
//
// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
//
// Also, a self-dividing number is not allowed to contain the digit zero.
//
// Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.
//
// Example 1:
// Input:
// left = 1, right = 22
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
// Note:
//
// The boundaries of each input argument are 1 <= left <= right <= 10000.

class Solution {
    public List<Integer> selfDividingNumbers(int left, int right) {
        List<Integer> list = new ArrayList<Integer>();
        int fourth, third, second, first;

        for(int i=left; right >= i; i++) {
            if(i < 10)
                list.add(i);
            else if(i < 100) {
                second = (i / 10);
                first = (i % 10);

                if( (first * second != 0) && ((i % first) + (i % second) == 0) ) {
                    list.add(i);
                }
            } else if(i < 1000) {
                third = (i / 100);
                second = ( (i - (third * 100)) / 10 );
                first = (i % 10);

                if( (first * second * third != 0) && ((i % first) + (i % second) + (i % third) == 0) ) {
                    list.add(i);
                }
            }  else if(i < 10000) {
                fourth = (i / 1000);
                third = ((i - (fourth * 1000)) / 100);
                second = ((i - (fourth * 1000 + third * 100)) / 10);
                first = (i % 10);

                if(first * second * third * fourth != 0 && ((i % first) + (i % second) + (i % third) + (i % fourth) == 0) ) {
                    list.add(i);
                }
            }
        }

        return list;
    }
}


// This is better
//
// class Solution {
// public List selfDividingNumbers(int left, int right) {
// List res = new LinkedList<>();
// for (int i = left; i <= right; i++) {
// if (isSelfDividing(i)) {
// res.add(i);
// }
// }
// return res;
// }
//
// private static boolean isSelfDividing(int a) {
//     int b = a;
//     while (b != 0) {
//         int d = b % 10;
//         if (d == 0) {
//             return false;
//         }
//         if (a % d != 0) {
//             return false;
//         }
//         b /= 10;
//     }
//     return true;
// }
// }
