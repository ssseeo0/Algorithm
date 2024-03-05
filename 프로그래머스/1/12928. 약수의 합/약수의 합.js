function solution(n) {
    let answer = 0;
    var num = 1;
    let arr = [];
    while(num <= n){
        if(n % num === 0){
            answer += num;
        }
        num++;
    }
    
    return answer;
}