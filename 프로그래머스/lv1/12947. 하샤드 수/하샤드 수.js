function solution(x) {
    let arr = x.toString().split('').map((el)=>parseInt(el))
    let result = 0;
    for(let i = 0; i < arr.length; i++){
        result = result + arr[i]
    }
    if(x % result === 0){
        return true
    } else {
        return false
    }
}