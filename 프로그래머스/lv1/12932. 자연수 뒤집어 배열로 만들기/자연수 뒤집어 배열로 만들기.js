function solution(n) {
   let strNum = n.toString()
   let strArr = strNum.split('');
   let result = []
   
   for(let i = 0; i < strArr.length; i++){
       result.unshift(parseInt(strArr[i]))
   }
    return result
}