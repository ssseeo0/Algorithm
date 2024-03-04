function solution(s){
    let sArr = s.toLowerCase().split('');
    
    let pNum = sArr.filter(function(str){
        return str === 'p';
    }).length; 
    let yNum = sArr.filter(function(str){
        return str === 'y';
    }).length;
    
    
    return pNum === yNum;
}