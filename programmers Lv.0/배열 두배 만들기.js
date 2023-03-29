var arr=[1,2,3,4,5];
//solution(arr)
solution_2(arr)

function solution(numbers){
    var answer=[];
    for(let i=0; i<numbers.length; i++){
        answer[i] = numbers[i]*2
    }
    return answer;
}

function solution_2(numbers){
    return numbers.map(number=>number*2)
}