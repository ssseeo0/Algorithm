function solution(array, commands) {
    var answer = [];
    commands.forEach(command => {
        const [i, j, k] = command
        let slicedArray = array.slice(i - 1, j).sort((a, b) => a - b);
        answer.push(slicedArray[k - 1]);
      }
    )
    return answer;
}