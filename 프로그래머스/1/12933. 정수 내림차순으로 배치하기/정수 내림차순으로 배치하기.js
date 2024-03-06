function solution(n) {
    let large ='';
    let arr = n.toString().split('').sort(function(a, b){
        return b - a;
    });
    
    for(let i of arr){
        large += i;
    }
    
    return Number(large);
    
}