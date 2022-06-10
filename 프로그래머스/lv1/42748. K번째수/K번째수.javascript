function solution(array, commands) {
    let answer = [];
    
    return commands.map((cmd)=> {
        answer = array
                .slice(cmd[0]-1,cmd[1])
                .sort((a, b) => a - b);
        return answer[cmd[2]-1]
    })
    
    // let slicedArr = [];
    // let newArr = [];
    // //commands라는 2차원 배열을 순회
    // for(let i = 0; i < commands.length; i++){
    // //commands의 i번째 인덱스에 있는 배열의 요소는 [a,b,c] 인덱스가a-1번째 부터 b-1까지 array를 자른다.
    //     slicedArr = array.slice(commands[i][0]-1,commands[i][1]);
    //     newArr = slicedArr.sort(); //잘린 배열 정렬
    //     answer.push(newArr[commands[i][2]-1])
    // }
}