function solution(box, n) {
    let answer = 1;
    let cnt = 0;
    while(cnt<3){
      answer *= parseInt(box[cnt]/n);
      cnt ++;
    }
    console.log(answer);
    return answer;
}