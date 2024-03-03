function solution(n)
{
    var narr = n.toString().split('');
    let answer = 0;
    for (let i of narr){
        answer += Number(i);
    }
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log(answer);

    return answer;
}