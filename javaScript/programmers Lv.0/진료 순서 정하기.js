/*
외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다.
 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 
진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.

emergency	             result
[3, 76, 24]	            [3, 1, 2]
[1, 2, 3, 4, 5, 6, 7]	[7, 6, 5, 4, 3, 2, 1]
[30, 10, 23, 6, 100]	[2, 4, 3, 5, 1]

*/

solution([30,10,23,6,100]);
      function solution(emergency) {

      var new_Emergency_Array =[];
      var big_num = 0;
      for(let i=0; i<emergency.length; i++){
        new_Emergency_Array.push({value: emergency[i], index: i});
      }
      new_Emergency_Array.sort((a,b) => b.value - a.value); //value 값을 기준으로 정렬

      var answer = new Array(emergency.length);

      for(let j=0; j<new_Emergency_Array.length; j++){
        let item = new_Emergency_Array[j];
        answer[item.index] = j+1;
      }

      console.log(answer);
      return answer;
      }