/*
  프로그래머스 Hash Level 1
  전화번호부
  Java
  https://programmers.co.kr/learn/courses/30/lessons/42576
*/

import java.util.Arrays;
class Solution {
    public boolean solution(String[] phone_book) {
        Arrays.sort(phone_book);
        for(int i = 0; i < phone_book.length - 1; i++) {
            if (phone_book[i+1].startsWith(phone_book[i]))
                return false;
        }
        return true;
    }
}