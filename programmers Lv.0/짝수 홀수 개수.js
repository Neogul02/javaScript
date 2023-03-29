/*
정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 
짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

num_list	    result
[1, 2, 3, 4, 5]	[2, 3]
[1, 3, 5, 7]	[0, 4]

*/

function solution(num_list) {
    var answer = [];
    var zzak_su = 0;
    var hole_su = 0;
    for(var i=0; i<num_list.length; i++){
        if(num_list[i]%2==0){
            zzak_su ++;
        }else{
            hole_su ++;
        }
    }
    return [zzak_su,hole_su];
}