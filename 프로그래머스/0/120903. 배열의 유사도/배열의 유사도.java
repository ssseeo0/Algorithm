class Solution {
    public int solution(String[] s1, String[] s2) {
        int answer = 0;
        
        for(int i = 0; i < s1.length; i++){
            for (int j = 0; j < s2.length; j++){
                if(s1[i].equals(s2[j])){
                answer += 1;
               }
            }
            
        }
        return answer;
    }
}
// 다른 사람의 풀이 
class Solution {
    public int solution(String[] s1, String[] s2) {
        Set<String> set = new HashSet<>(Arrays.asList(s1));
        // HashSet은 중복된 값을 가지지 않음 배열 s1에서 중복된 값 제거 
        // s2을 스트림으로 변환 -> set과 동일한 값만 필터링 -> 갯수 리턴 (long -> int 타입으로 변환)
        return (int)Arrays.stream(s2).filter(set::contains).count();
    }
}
