function solution(numbers) {
    // 0부터 9까지의 합에서 numbers의 합을 뺴면 됨 
    let sum = 0;
    for(let i = 0; i < 10; i++){
        sum += i; 
    }
    
    let numberSum = numbers.reduce(function(a, b){
        return a + b;
    });
    
    return sum - numberSum;
}