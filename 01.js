// 프로그래머스 알고리즘 문제풀이

// 두 수의 차
function solution(num1, num2) {
    var answer = num1 - num2;
    return answer;
}



// 두 수의 곱
function solution(num1, num2) {
    var answer = num1 * num2;
    return answer;
}


// 몫 구하기
function solution(num1, num2) {
    for (let i = 0; i <= 100; i++){
        let answer = Math.floor(num1 / num2)
    return answer;
    }
}

// 나이 출력
function solution(age) {
    for(let i = 1; i < 120; i++){
    var answer = 2022 - (age - 1);
    }
   
    return answer;
}


// 숫자 비교하기
function solution(num1, num2) {
    if(num1 === num2){
        return 1;
    }
    else{
        return -1;
    }
}

