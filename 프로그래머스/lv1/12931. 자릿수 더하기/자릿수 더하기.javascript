function solution(n)
{   
    let result = 0;
    let strN = n.toString();
    for(let i = 0; i < strN.length; i++){
        result = result + Number(strN[i])
    }
    return result
}