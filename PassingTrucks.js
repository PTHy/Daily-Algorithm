function solution(bridge_length, weight, truck_weights) {
  let count = 0;
  let passingLength = [];
  let passingWeight = 0;
  
  while (count <= 20) {
      if (passingWeight < weight) {
          passingWeight += truck_weights[count];
          count++; 
      }
      
      for (let i = 0; i < count; i++) {
          passingLength[i] = passingLength[i] && passingLength[i] + 1 || 1;
          
          if (passingLength[i] === bridge_length)
              passingWeight -= truck_weights[count];
      }
      
      if (passingLength[truck_weights.length - 1] >= bridge_length)
          break;
      
      console.log(passingWeight)
  }

  console.log(passingLength)
  
  return passingLength[0] + 1;
}