function solution(n) {
    let sqrt = Math.sqrt(n);
    if(sqrt === Math.trunc(sqrt)){
        return (sqrt + 1) ** 2;
    } else {
        return -1;
    }
}