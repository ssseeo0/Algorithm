function solution(numbers) {
    // 0부터 9까지의 합에서 numbers의 합을 뺴면 됨 
    const sum = (9 * 10) / 2; 
    
    let numberSum = numbers.reduce(function(a, b){
        return a + b;
    });
    
    return sum - numberSum;
}