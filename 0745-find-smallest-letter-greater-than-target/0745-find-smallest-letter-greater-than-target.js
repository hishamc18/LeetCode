/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let targetCode = target.charCodeAt()
    let lettersCode = []
    for(let i = 0; i < letters.length; i++){
        if(letters[i].charCodeAt() > targetCode){
            lettersCode.push(letters[i].charCodeAt())
        }
    }
    if(lettersCode.length === 0){
        return letters[0]
    }
    return String.fromCharCode(lettersCode.sort((a,b) => a-b)[0])
};