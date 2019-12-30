/*
  프로그래머스 Hash Level 3
  베스트 엘범
  JavaScript
  https://programmers.co.kr/learn/courses/30/lessons/42579
  
  미완 (2019.12.30)
*/

function solution(genres, plays) {
  let answer = [];
  let record = {};

  for (let i = 0; i < genres.length; i++) {
      if (!record[genres[i]])
          record[genres[i]] = { total: 0, plays: [] };
      
      record[genres[i]].total += plays[i];
      record[genres[i]].plays.push({ idx: i, plays: plays[i] });
  }

  let total = [];
  
  Object.keys(record).forEach((key) => {
      total.push({ genre: key, total: record[key].total });
  });
  
  total.sort((a, b) => {
     return b.total - a.total; 
  });
  
  total.forEach(item => {
      record[item.genre].plays.sort((a, b) => {
          if (b.plays === a.plays)
              return a.index - b.index;
          return b.plays - a.plays;
      });
      
      for (let i = 0; i < 2; i++) {
          answer.push(record[item.genre].plays[i].idx);
      }
  });
  
  return answer;
}