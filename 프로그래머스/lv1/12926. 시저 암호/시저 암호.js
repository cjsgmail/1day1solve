function solution(s, n) {
    s = s.split('')
    
    for(let i = 0; i < s.length; i++){
       let ascii  = s[i].charCodeAt()
        if(ascii >= 65 && ascii <= 90){
            if(ascii + n > 90){
               ascii = ascii - 26 
            }
                s[i] = String.fromCharCode(ascii + n)
        } 
        if (ascii >= 97 && ascii <= 122){
            if(ascii + n > 122){
                ascii = ascii - 26
            }
                s[i] = String.fromCharCode(ascii + n)
        }
      
    } 
    return s.join('')
}