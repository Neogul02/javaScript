const numbers = [1];

numbers.map((number, index, source) => {

    // number: 요소값
    // index: source에서 요소의 index
    // source: 순회하는 대상

    console.log(number);
    // 1

    console.log(index);
    // 0

    console.log(source);
    // [1]

    return number * number;
});

/* ex)
function solution_2(numbers){
    return numbers.map(number=>number*2) 배열 모든 요소에 *2배
} */