function solution(s) {
    let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    for(let i = 0; i < 11; i++){
        s = s.split(arr[i]).join(i)
    }
    return parseInt(s)
}