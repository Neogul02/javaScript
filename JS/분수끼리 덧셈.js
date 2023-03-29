function solution(denum1, num1, denum2, num2) {
    denum=denum1*num2+denum2*num1; //분자
    num=num1*num2; //분모
    var a=1; // 최소공배수
    
    for(let i=1; i<=denum; i++){
        if(denum%i===0 && num%i===0){ // 분모와 분자 모두 나누어지는 값 찾기
            a=i;                      // 찾은 값이 최소공배수
        }
    }
    return[denum/a,num/a];  // 최소공배수로 나눠서 리턴
} 