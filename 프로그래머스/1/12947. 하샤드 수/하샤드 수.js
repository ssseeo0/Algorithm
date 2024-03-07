function solution(x) {
    let arr = x.toString().split("");
    let sum = arr.reduce(function(a, b){
        return Number(a) + Number(b);
    });
    return x % sum === 0 ? true : false;
}