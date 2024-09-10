function solution(price, money, count) {
    let totalPrice = 0;
    
    for(let i = 1; i <= count; i++){
        totalPrice += price * i ;
    }
    
    let answer = money - totalPrice;
    
    return answer > 0 ? 0 : -answer;
}