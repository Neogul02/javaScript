/*
머쓱이는 추운 날에도 아이스 아메리카노만 마십니다.
 아이스 아메리카노는 한잔에 5,500원입니다. 
 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 
 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 
 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

 money	result
 5,500	[1, 0]
 15,000	[2, 4000]

 */

 function solution(money) {
    var answer = [];
    var coffee = 0; // 아메리카노 수
    var rest= money%5500; // 나머지, 돈을 5500원으로 나눈 나머지
    for(var i=0; i<=(money/5500); i++){ // 돈/5500원 = 커피갯수
        coffee = i;
    }
    answer.push(coffee);
    answer.push(rest);
    console.log(answer);

    return answer;
}