function solution(array) {
    array.sort(function (a, b) {return a - b; }); // 배열 오름차순 정렬
    console.log(array);

    var center = Math.floor(array.length/2)
    console.log(array[center]);
    return array[center];
    }