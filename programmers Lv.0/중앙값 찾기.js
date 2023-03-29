function solution(array) {
    array.sort(function (a, b) {return a - b; }); // 배열 오름차순 정렬
    console.log(array);

    var center = Math.floor(array.length/2)
    console.log(array[center]);
    return array[center];
    }

 // 1. 정렬
// 1-1 배열 중 가장 작은 값을 찾는다.
// 1-2 찾으면 새 배열에 넣는다.
// 1-3 원래 배열에 찾은 값은 지운다
// 1-4 만약 원래 배열 길이만큼 반복했으면 끝낸다.

    function solution(array){
        var array_2=[];
        for(var k=0; k<array.length; k++){
        var min_num=1000;
        for(var i=0; i<array.length; i++){ // 가장작은값 찾기
            if(min_num>array[i]){
                min_num=array[i]
            }  
        }
        array_2.push(min_num);
        for(var j=0; j<array.length; j++){
            if(min_num===array[j]){
                array[j]=1000;
                break;
            }
        }
        }
        console.log(array);
        console.log(array_2);
        
        middle_num=Math.floor((array_2.length)/2);
        console.log(array_2[middle_num]);
        return array_2[middle_num];
    }