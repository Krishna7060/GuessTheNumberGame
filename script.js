let randomNumber = parseInt(Math.random()*100+1);

const submiit =document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const guesSlot=document.querySelector('.guesses');
const remainig=document.querySelector('.lastresult');
const lowOrHigh=document.querySelector('.loworhigh')
const startOver=document.querySelector('.resultdiv');
const p = document.createElement('p');
 let prevGues=[];
 let noOfGuesss=1;

 let playGame=true;

 if(playGame){
   submiit.addEventListener('click',function(e){
      e.preventDefault()
      const guess=parseInt(userInput.value)
      console.log(guess)
      validateGuess(guess)

   })
 }



   function validateGuess(guess){
      if(isNaN(guess)){
         alert('please enter a valid number')
      } else if(guess<1){
         alert('please enter a number greaer than one')
      } else if(guess>100){
         alert('please enter a number less than 100')
      } else{
         prevGues.push(guess)
         if(noOfGuesss===11){
            displayGuess(guess)
            displayMessage(`Game over.random number was ${randomNumber}`)
            endGame()
         } else{
            displayGuess(guess)
            checkGuess(guess)
         }
      }

   }
   
     function checkGuess(guess){
      if(guess===randomNumber){
         displayMessage(`your won the game`)
         endGame()
      } else if(guess<randomNumber){
         displayMessage(`your number is too low`)
      } else if(guess>randomNumber){
         displayMessage(`your number is too high`)
      }

   }

     function displayGuess(guess){
      userInput.value=''
      guesSlot.innerHTML+=`${guess} , `
      noOfGuesss++
      remainig.innerHTML=`${11-noOfGuesss} ,`

     }
    

    function displayMessage(message){
      lowOrHigh.innerHTML=`<h2>${message}</h2>`

    }

    function endGame(){
      userInput.value='';
      userInput.setAttribute('disabled','')
      p.classList='button'
      p.innerHTML=`<button id="newGame">Start new Game</button>`
      startOver.appendChild(p)
      playGame=false;
      newGame();


    }


    function newGame(){
      const newGameButton=document.querySelector('#newGame')
      newGameButton.addEventListener('click',function(e){
         randomNumber = parseInt(Math.random()*100+1);
         prevGues=[]
         noOfGuesss=1
         guesSlot.innerHTML=''
         remainig.innerHTML=`${11-noOfGuesss}`;
         userInput.removeAttribute('disabled')
         startOver.removeChild(p)
         playGame=true;


      })
      
      
      




   }



      

  






