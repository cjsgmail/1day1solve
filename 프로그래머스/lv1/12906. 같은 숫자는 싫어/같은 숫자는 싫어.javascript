function solution(arr){ 
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i-1]===arr[i] && !result.includes(arr[i])){
            result.push(arr[i])
        }
        if(arr[i-1]!==arr[i]){
            result.push(arr[i])
        }
    }
    return result
}
