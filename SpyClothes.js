/*
  프로그래머스 Hash Level 2
  스파이의 옷
  Javascript
  https://programmers.co.kr/learn/courses/30/lessons/42578
*/

function solution(clothes) {
  let record = {};
  let answer = 1;
  
  clothes.forEach(cloth => {
      record[cloth[1]] = (record[cloth[1]] && record[cloth[1]] + 1) || 1;
  });
  
  Object.keys(record).forEach(key => {
      answer *= record[key]+1;
  });

  return answer - 1;
}