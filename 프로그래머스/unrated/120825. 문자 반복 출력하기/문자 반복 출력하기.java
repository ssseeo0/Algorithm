class Solution {
    public String solution(String my_string, int n) {
        StringBuilder answer = new StringBuilder();
        int str = my_string.length(); // 문자열 길이 
        
        for (int i = 0; i < str; i++){ // 그걸 문자열의 길이만큼 반복 
            for(int j = 0; j < n; j++){ // 한 글자 당 n번 반복 
            answer.append(my_string.charAt(i));
            }
        }
        return answer.toString();
    }
}
// 다른 사람의 풀이
class Solution {
    public String solution(String my_string, int n) {
        StringBuilder sb = new StringBuilder();
        for(char c : my_string.toCharArray()){
            sb.append((c + "").repeat(n));
        }
        return sb.toString();
    }
}
