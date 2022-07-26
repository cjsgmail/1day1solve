function solution(n) {
    return parseInt(n.toString().split('').map((el)=>parseInt(el)).sort((a,b)=>{
        if(a>b){
            return b - a;
        } else if (a === b){
            return 0;
        } else {
            return a + b;
        }
    }).join(''))
}