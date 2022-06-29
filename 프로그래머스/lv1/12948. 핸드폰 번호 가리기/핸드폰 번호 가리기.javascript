function solution(phone_number) {
    let result = ""
    let length = phone_number.length
    for(let i = 0; i < length; i++){
        if(i < length - 4){
            result = result + "*"
        } else {
            result = result + phone_number[i]
        }
    }
    return result
}