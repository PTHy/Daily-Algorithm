/*
  프로그래머스 Stack/Queue Level 2
  다리를 지나는 트럭
  Javascript
  https://programmers.co.kr/learn/courses/30/lessons/42583
*/

function solution(bridge_length, weight, truck_weights) {
  let count = -1;
  let passingLength = [];
  let passingWeight = 0;
  
  while (true) {
      if (passingWeight + truck_weights[count + 1] <= weight) {
          count++;
          passingWeight += truck_weights[count];
      }
      
      for (let i = 0; i <= count; i++) {
          passingLength[i] = passingLength[i] && passingLength[i] + 1 || 1;
          
          if (passingLength[i] === bridge_length) {
              passingWeight -= truck_weights[i];
          }
      }
      
      if (passingLength[truck_weights.length - 1] >= bridge_length)
          break;
  }

  return passingLength[0] + 1;
}