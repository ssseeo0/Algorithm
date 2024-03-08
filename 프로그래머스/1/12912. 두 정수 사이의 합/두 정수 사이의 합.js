function solution(a, b) {
    var answer = 0;
    if(a < b){
        while(a <= b){
            answer += a;
            a++;
        }
    } else if(a > b){
        while(b <= a){
            answer += b;
            b++;
        }
    } else{
        return a;
    }
    return answer;
}