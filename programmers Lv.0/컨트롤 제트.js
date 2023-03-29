/*숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다. 
문자열에 있는 숫자를 차례대로 더하려고 합니다. 이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다. 
숫자와 "Z"로 이루어진 문자열 s가 주어질 때, 머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요.
*/
// "1 2 Z 3"	4
solution("10 20 Z 30");

function solution(s) {
  let answer = 0;
  let numbers = [];
  let collectNumber = "";
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (item === "Z") {
      // Z 이면
      numbers.pop();
    } else if (item === " ") {
      //공백이면
      numbers.push(Number(collectNumber));
      collectNumber = "";
    } else {
      //숫자
      collectNumber = collectNumber + item;
    }
  }
  if (collectNumber !== "") {
    numbers.push(Number(collectNumber));
  }
  let sum = 0;
  for (let j = 0; j < numbers.length; j++) {
    sum = sum + numbers[j];
  }
  return sum;
}
