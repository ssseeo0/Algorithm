function solution(arr)
{
  return arr.filter((value, index) => {
     return index === 0 || value !== arr[index -1]; 
  });
}