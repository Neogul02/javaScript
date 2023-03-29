function solution(n) {
    var answer = 0;
    for(let i = 4; i <= n; i++){
        console.log(j);
        for(let j = 2; j < i; j++){
            console.log(i);
            if(i % j === 0){
                answer += 1;
                break;
            }
        }
    }

    return answer;
}
