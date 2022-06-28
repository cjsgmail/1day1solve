function solution(arr) {
    //Math.min을 이용하여 최소값을 찾고 그 인덱스를 찾는다.
    const idx = arr.indexOf(Math.min(...arr))
    arr.splice(idx, 1)
    
    return arr.length <= 1 ? [-1] : arr
    }