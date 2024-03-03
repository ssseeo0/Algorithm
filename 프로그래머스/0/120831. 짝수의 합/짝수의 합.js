function solution(n) {
    var answer = 0;
    let num = Math.floor(n / 2); // 짝수 갯수 
    for(let i = 1; i <= num; i++){
        answer += 2 * i;
    } 
    return answer;
}