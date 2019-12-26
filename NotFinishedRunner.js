/*
  프로그래머스 Hash Level 2
  완주하지 못한 선수
  Javascript
  https://programmers.co.kr/learn/courses/30/lessons/42577
*/

function solution(participant, completion) {
  participant.sort();
  completion.sort();
  
  for(let i = 0; i < participant.length; i++) {
      if (participant[i] !== completion[i]){
          return participant[i];
      }
  }
}