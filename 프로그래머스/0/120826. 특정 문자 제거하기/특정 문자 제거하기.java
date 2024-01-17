import java.util.*;
class Solution {
    public String solution(String my_string, String letter) {
        StringBuilder answer = new StringBuilder();
        
        for(int i = 0; i < my_string.length(); i++){
            if(!letter.equals(String.valueOf(my_string.charAt(i)))){
                answer.append(my_string.charAt(i));
            }
        }
        
        return answer.toString();
    }
}
// 다른 사람의 풀이 
// replace() 사용 
// str.replace(CharSequence target, CharSequence replacement); 모든 target replacement로 치환 
class Solution {
    public String solution(String my_string, String letter) {
        return my_string.replace(letter, "");
    }
}
