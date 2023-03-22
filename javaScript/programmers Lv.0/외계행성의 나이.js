/*
우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다. 
입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 
나이를 알파벳으로 말하고 있습니다. a는 0, b는 1, c는 2, ..., j는 9입니다. 
예를 들어 23살은 cd, 51살은 fb로 표현합니다. 나이 age가 매개변수로 주어질 때 
PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.

age	result
23	"cd"
51	"fb"
100	"baa
*/
/*
1=a, 2=b, 3=c, 4=d, 5=f, 6=g, 7=h, 8=i, 9=j \
아스키 코드
48번 = 0
57번 = 9
97번 = a
106번 = j
*/

solution(100);
function solution(age) {
var answer = [];
var alphabet = ['a','b','c','d','e','f','g','h','i','j']
var str_age = String(age);
for(let i=0; i<=str_age.length; i++){
  for(let j=0; j<9; j++){
    if(str_age[i]==j){
    answer.push(alphabet[j]);
    }
  }   
}
return answer.join('');
}