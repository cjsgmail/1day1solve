function solution(n) {
   if(!Number.isInteger(Math.sqrt(n))){
       return -1
   } else if (Math.sqrt(n)){
       return Math.pow(Math.sqrt(n) + 1 , 2) 
   }
}