class Solution {
    public int solution(int n, int t) {
        int answer = 0;
        for (int i = 1; i <= t; i++){
            n *= 2; 
            answer = n;
        }
        return answer;
    }
}
// 다른 사람의 풀이
// 비트 연산자 정리 
class Solution {
    public int solution(int n, int t) {
        int answer = 0;

        answer = n << t;

        return answer;
    }
}
