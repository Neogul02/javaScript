// 주어진 배열중 가장 자주 나오는 값 = 최빈값
// 최빈값이 여러개면 -1 을 리턴

// 1. 정렬
// 1-1 배열 중 가장 작은 값을 찾는다.
// 1-2 찾으면 새 배열에 넣는다.
// 1-3 원래 배열에 찾은 값은 지운다
// 1-4 만약 원래 배열 길이만큼 반복했으면 끝낸다.

function solution(array){
    var sortedArray=[];
    for(var k=0; k<array.length; k++){
    var min_num =1000;
    for(var i=0; i<array.length; i++){ // 가장 작은값 찾기
        if(array[i]<min_num){
            min_num=array[i];
        }
    }
    sortedArray.push(min_num);
        for(var j=0; j<array.length; j++){
            if(min_num===array[j]){
                array[j]=1000;
                break;
            }
        }
    }
    // 1. 앞에서부터 차례대로 원소를 확인하며 갯수를 센다.
    // 2. 최빈값을 그때그때 기록한다.
    let cnt = 0;

    let choi = -1; // 최빈값
    let choiRepeatCnt = 0; //최빈값이 몇번 반복해서 된 값

    let repeatCnt = 0; // 현재 똑같은 숫자가 몇번 반복했는지
    let beforeNumber = -1; // 지금 보고있는 숫자 이전숫자
    let isDupChoi = false;
    while(cnt<sortedArray.length){
        if(beforeNumber !== sortedArray[cnt]){ //경계가 넘어간 상황
            repeatCnt = 1; //반복하기 시작
        } else{ 
            repeatCnt = repeatCnt + 1;
        }

        if(repeatCnt===choiRepeatCnt){
            if(choi !== sortedArray[cnt]){
            isDupChoi = true;
            }
        }

        if(repeatCnt>choiRepeatCnt){
            choi=sortedArray[cnt];
            choiRepeatCnt= repeatCnt;
            isDupChoi = false;
        }

        beforeNumber=sortedArray[cnt];
        cnt=cnt+1;
    }
    if(isDupChoi) return -1;
    return choi;
}

