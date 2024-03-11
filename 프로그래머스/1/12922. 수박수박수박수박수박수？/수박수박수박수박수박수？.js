function solution(n) {
    var answer = '수박'; 
    answer = answer.repeat(n / 2);
    return n % 2 === 0 ? answer : answer + "수";

}