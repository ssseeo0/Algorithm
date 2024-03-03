function solution(angle) {
    return angle < 90 ? 1 : angle === 180 ? 4 : angle > 90 ? 3 : 2 ;
}