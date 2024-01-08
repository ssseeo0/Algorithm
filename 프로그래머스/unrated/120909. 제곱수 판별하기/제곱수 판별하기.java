class Solution {
    public int solution(int n) {
        int answer = 0;
       
        if(Math.sqrt(n) % 1 == 0){
            answer = 1;
        } else{
            answer = 2;
        }
        return answer;
    }
}
// Math.sqrt(n) : n의 제곱근 구하는 메소드 
// 다른 사람의 풀이 
class Solution {
    public int solution(int n) {
        if (n % Math.sqrt(n) == 0) {
            return 1;
        } else {
            return 2;
        }
    }
}
