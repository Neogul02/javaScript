
// 1,2,3 명이면 1판만 시켜도 됨
// 4명이면 2판시켜야함
// 5명이면 5판 시켜야함
// 6명이면 1판 시켜도 됨

function solution(n){ // n 은 사람의 수
                      // pizza 는 피자의 조각 수
    for(var pizza=1; pizza<=n; pizza++){
        if((pizza*6)%n==0){
            return pizza;
        }
    }
}