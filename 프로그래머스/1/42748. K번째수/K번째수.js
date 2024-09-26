function solution(array, commands) {
    var answer = [];
    commands.forEach(command => {
        let i = command[0] - 1;
        let j = command[1];
        let k = command[2] - 1;
        let slicedArray = array.slice(i, j).sort((a, b) => a - b);
        answer.push(slicedArray[k]);
      }
    )
    return answer;
}