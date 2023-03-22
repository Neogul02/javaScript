function solution(array) {
    var answer = [];
    for(let i=0; i<array.length; i++){
      if(Number(array[i])==1){
        answer.push(Number(array[i]));
      }
    }
    return answer;
}