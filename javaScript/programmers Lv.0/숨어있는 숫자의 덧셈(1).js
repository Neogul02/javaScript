// 문자열 my_string이 매개변수로 주어집니다.
// my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

solution("aAb1B2cC34oOp");
function solution(my_string) {
  var answer = 0;
  for (let i = 0; i < my_string.length; i++) {
    const item = my_string[i];
    if (Number.isNaN(Number(item))) {
      continue;
    } else {
      answer += Number(item);
    }
  }
  return answer;
  console.log(answer);
}
