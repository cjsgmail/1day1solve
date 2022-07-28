function solution(arr1, arr2) {
    let result = [];
    arr1.forEach((row, rowIndex)=>{
       result.push(row.map((col, colIndex)=>{
           return col + arr2[rowIndex][colIndex]
       })
    )})
    return result
}

function solution(arr1, arr2) {
  const answer = [];
  arr1.forEach((row, rowIndex) => {
    answer.push(row.map((col, colIndex) => col + arr2[rowIndex][colIndex]));
  });
  return answer;
}