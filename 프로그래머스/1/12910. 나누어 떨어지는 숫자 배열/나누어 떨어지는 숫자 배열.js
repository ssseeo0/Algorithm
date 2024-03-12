function solution(arr, divisor) {
    var answer = [];
    for(let i of arr){
        if(i % divisor === 0){
            answer.push(i);
        }
    }
    let sort = answer.sort(function(a,b){
        return a - b;
    });
    return sort.length === 0 ? [-1] : sort;
}