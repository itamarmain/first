let toGuess = "lion"
let wordElement = document.getElementById('word')
let container = document.getElementById('container')
let guessCount = 0
function guess(){
    let firstLetter = wordElement.value.charAt(0)
    let secondLetter = wordElement.value.charAt(1)
    let thirdLetter = wordElement.value.charAt(2)
    let forthLetter = wordElement.value.charAt(3)
    container.innerHTML +=  `
    <div class="letter" style ="background-color: ${checkLetter(firstLetter,0)} ;">${firstLetter}</div>
    <div class="letter" style ="background-color: ${checkLetter(secondLetter,1)} ;">${secondLetter}</div>
    <div class="letter" style ="background-color: ${checkLetter(thirdLetter,2)} ;">${thirdLetter}</div>
    <div class="letter" style ="background-color: ${checkLetter(forthLetter,3)} ;">${forthLetter}</div>
    `
    

    let inputWord = wordElement.value.trim().toLowerCase() ;
 
    if (inputWord.length < 4)  {
     alert("need 4 letters ")
     window.location.reload();
     return ;
     
    }else if ( inputWord.length > 4){
        alert("need 4 letters ")
        window.location.reload();
        return ;
    }
    if(wordElement.value === toGuess){
        alert('you stupid  MAN you lucky skill issue')

        window.location.reload();
    }  
    guessCount =  guessCount + 1
    if (guessCount == 6) {
        // Alert the user that maximum guesses have been reached
        alert("Maximum guesses reached!");
        
        window.location.reload();
        

  
}


}
function checkLetter(letter, index){
    if(toGuess.charAt(index)== letter ){
        return "green"
    }
    if (toGuess.includes (letter) ){
        return "yellow"
    }
    return "red"
}



