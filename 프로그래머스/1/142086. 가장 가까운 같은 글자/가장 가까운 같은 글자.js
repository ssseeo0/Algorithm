function solution(s) {
    let lastIndex = {};
    let answer = []; 
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        if (lastIndex[char] !== undefined) {
            answer.push(i - lastIndex[char]);
        } else {
            answer.push(-1);
        }

        lastIndex[char] = i;
    }
    return answer;
}
    
