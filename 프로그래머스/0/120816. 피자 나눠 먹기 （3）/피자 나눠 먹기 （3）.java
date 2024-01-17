class Solution {
    public int solution(int slice, int n) {
        int answer = 0;
        
        if (n % slice == 0){ 
            answer = n / slice;
        } else { // 조각 수가 사람 수보다 적으면 
            answer = n / slice + 1;
        }
        
        return answer;
    }
}
// 다른 사람의 풀이 (삼항연산자 사용)
// 조건식 ? 반환값1 : 반환값2
class Solution {
    public int solution(int slice, int n) {
        return n % slice > 0 ? n/slice+1 : n/slice;
    }
}
