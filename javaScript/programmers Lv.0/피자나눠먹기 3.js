// slice는 피자조각 수
// n은 먹는 사람 수
// n 명의 사람이 최소 한 조각 이상 피자를 먹으려면
// 7조각으로 나눈 피자를 10명이서 먹으려면 최소 2판이 필요
// 4조각으로 나눈 피자를 12명이서 먹으려면 최소 3판이 필요

function solution(slice, n) {
    for(var pizza=0; pizza<=n; pizza++){
        if(slice*pizza>=n){ // 조각 수 * 피자 수 >= 사람의 수 보다 크거나 같으면 피자 수가 맞는거죠
            return pizza;
        }
    }
}