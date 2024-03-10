function solution(arr) {
    let min = Math.min(...arr);
    
    if(min === arr[0]){
        return [-1];
    }
    
    arr.splice(arr.indexOf(min), 1);
    
    return arr;
}