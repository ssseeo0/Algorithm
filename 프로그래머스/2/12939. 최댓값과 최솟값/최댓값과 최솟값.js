function solution(s) {
    var answer = '';
    let numbers = s.split(" ").map(Number);
    
    numbers.sort((a, b) => a - b);
    
    return `${numbers[0]} ${numbers[numbers.length - 1]}`;
}