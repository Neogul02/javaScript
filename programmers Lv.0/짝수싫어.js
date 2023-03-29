function solution(n) {
    var answer = []
    for(let i=0; i<=n; i++){
        if(i%2===1){
        answer=[...answer, i];
        }
    }
    return answer;
}

function solution_2(n) {
    var answer = [];

    for (let i = 1; i<=n; i+=2) answer.push(i)

    return answer;
}