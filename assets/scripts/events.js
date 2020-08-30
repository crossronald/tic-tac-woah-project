'use strict'
const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')
const gameStore = require('./storeGame')







$('#board-container').hide()

let total = 0
let player = ""
let px = document.createTextNode("X")
let po = document.createTextNode("O")
let winnerArray = []



let turnCount = function() {
    total +=1
   
    if (total % 2 === 0) {
        player = "X"
      } else {
        player = "O"
    }
    if(player === "X") {
        $('#message').text('Player is O')
      } else {
        $('#message').text('Player is X')
    }
    if(total === 9) {
        $('#board-container').hide()
        $('#message').text('The game is over!')
        }
    return total
}


let restoreClicks = function () {
    document.getElementById('box-1').style.pointerEvents = 'auto'
    document.getElementById('box-2').style.pointerEvents = 'auto'
    document.getElementById('box-3').style.pointerEvents = 'auto'
    document.getElementById('box-4').style.pointerEvents = 'auto'
    document.getElementById('box-5').style.pointerEvents = 'auto'
    document.getElementById('box-6').style.pointerEvents = 'auto'
    document.getElementById('box-7').style.pointerEvents = 'auto'
    document.getElementById('box-8').style.pointerEvents = 'auto'
    document.getElementById('box-9').style.pointerEvents = 'auto'
}
let removeClicks = function () {
    document.getElementById('box-1').style.pointerEvents = 'none'
    document.getElementById('box-2').style.pointerEvents = 'none'
    document.getElementById('box-3').style.pointerEvents = 'none'
    document.getElementById('box-4').style.pointerEvents = 'none'
    document.getElementById('box-5').style.pointerEvents = 'none'
    document.getElementById('box-6').style.pointerEvents = 'none'
    document.getElementById('box-7').style.pointerEvents = 'none'
    document.getElementById('box-8').style.pointerEvents = 'none'
    document.getElementById('box-9').style.pointerEvents = 'none'
}




let checkWinCondition = function () {

if(winnerArray[0] === "X" && winnerArray[1] === "X" && winnerArray[2] === "X") {
   
     $('#message').text('The game is over! ' + player + ' wins!')
     removeClicks()
}
if(winnerArray[0] === "X" && winnerArray[4] === "X" && winnerArray[8] === "X") {
     $('#message').text('The game is over! ' + player + ' wins!')
      removeClicks()
}
if(winnerArray[0] === "X" && winnerArray[3] === "X" && winnerArray[6] === "X") {
     $('#message').text('The game is over! ' + player + ' wins!')
      removeClicks()
}
if(winnerArray[1] === "X" && winnerArray[4] === "X" && winnerArray[7] === "X") {
     $('#message').text('The game is over! ' + player + ' wins!')
      removeClicks()
}
if(winnerArray[2] === "X" && winnerArray[4] === "X" && winnerArray[6] === "X") {
     $('#message').text('The game is over! ' + player + ' wins!')
      removeClicks()
}
if(winnerArray[2] === "X" && winnerArray[5] === "X" && winnerArray[8] === "X") {
     $('#message').text('The game is over! ' + player + ' wins!')
      removeClicks()
}
if(winnerArray[3] === "X" && winnerArray[4] === "X" && winnerArray[5] === "X") {
     $('#message').text('The game is over! ' + player + ' wins!')
      removeClicks()
}
if(winnerArray[7] === "X" && winnerArray[7] === "X" && winnerArray[8] === "X") {
     $('#message').text('The game is over! ' + player + ' wins!')
      removeClicks()

}




if(winnerArray[0] === "O" && winnerArray[1] === "O" && winnerArray[2] === "O") {
     $('#message').text('The game is over! ' + player + ' wins!')
      removeClicks()
}
if(winnerArray[0] === "O" && winnerArray[4] === "O" && winnerArray[8] === "O") {
     $('#message').text('The game is over! ' + player + ' wins!')
      removeClicks()
}
if(winnerArray[0] === "O" && winnerArray[3] === "O" && winnerArray[6] === "O") {
     $('#message').text('The game is over! ' + player + ' wins!')
      removeClicks()
}
if(winnerArray[1] === "O" && winnerArray[4] === "O" && winnerArray[7] === "O") {
     $('#message').text('The game is over! ' + player + ' wins!')
      removeClicks()
}
if(winnerArray[2] === "O" && winnerArray[4] === "O" && winnerArray[6] === "O") {
     $('#message').text('The game is over! ' + player + ' wins!')
      removeClicks()
}
if(winnerArray[2] === "O" && winnerArray[5] === "O" && winnerArray[8] === "O") {
     $('#message').text('The game is over !' + player + ' wins!')
      removeClicks()
}
if(winnerArray[3] === "O" && winnerArray[4] === "O" && winnerArray[5] === "O") {
    $('#message').text('The game is over! ' + player + ' wins!')
     removeClicks()
}
if(winnerArray[6] === "O" && winnerArray[7] === "O" && winnerArray[8] === "O") {
    $('#message').text('The game is over! ' + player + ' wins!')
     removeClicks()
}

}







const onChangePassword = function(event) {
    event.preventDefault()//this line works
    const form = event.target//this line works
    const data = getFormFields(form)//this line works
    api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
} 
const onCreateGame = function(event) {
    event.preventDefault()
    $('#board-container').show()
    $('p').text('')
   restoreClicks()
    const form = event.target
    total = 0
    const data = getFormFields(form)
    
    api.createGame(data)
    
    .then(ui.onCreateGameSuccess)
    .catch(ui.onFailMessage)
}

const onGetAllGames = function(event) {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)
   
    api.getAllGames(data)
    .then(ui.onGetAllGamesSuccess)
    .catch(ui.onFailMessage)
}
const onGetGame = function(event) {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)
   
    api.getGame(data)
    .then(ui.onGetGameSuccess)
    .catch(ui.onFailMessage)
}

// const onSaveGame = function (event) {
//     event.preventDefault()
//     const form = event.target
//     const data = getFormFields(form)
//     const email = store.user.email
//    const savedGame = storeGame.id
//     api.saveGame(data)
//     .then(ui.onSaveGameSuccess(email, savedGame))
//     .catch(ui.onFailMessage)
// }


const onSignIn = function(event) {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)
    api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
    $('#board-container').show()
}
const onSignOut = function(event) {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)
    api.signOut(data)
    .then(ui.onSignOutSuccess)
    .catch(ui.onFailMessage)
}
const onSignUp = function(event) {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)
    api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}
const onUpdateGame = function(event) {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)
    let email = store.user.email
    
    let gameID = gameStore.id
    let gameState = winnerArray
    api.updateGame(data)
    .then(ui.onUpdateGameSuccess(email, gameID, gameState))
    .catch(ui.onFailMessage)
}



const boxOne = function () {
    turnCount()
   
   let b1 = document.querySelector('#p1')
    if(player === "X") {
        b1.appendChild(px)
        winnerArray[0] = "X"
        $('#p1').text('X')
         } else {
             b1.appendChild(po)
             winnerArray[0] = "O"
             $('#p1').text('O')
         }
         document.getElementById('box-1').style.pointerEvents = 'none'
         checkWinCondition()
       
    }
const boxTwo = function (event) {
    event.preventDefault()
    turnCount()
   
    let b1 = document.querySelector('#p2')

    if(player === "X") {
        b1.appendChild(px)
        winnerArray[1] = "X"
        $('#p2').text('X')
         } else {
             b1.appendChild(po)
             winnerArray[1] = "O"
             $('#p2').text('O')
         }
         document.getElementById('box-2').style.pointerEvents = 'none'
         checkWinCondition()
        
}
const boxThree = function (event) {
    event.preventDefault()
    turnCount()
   
    let b1 = document.querySelector('#p3')
  
    if(player === "X") {
        b1.appendChild(px)
        winnerArray[2] = "X"
        $('#p3').text('X')
         } else {
             b1.appendChild(po)
             winnerArray[2] = "O"
             $('#p3').text('O')
         }
         document.getElementById('box-3').style.pointerEvents = 'none'
         checkWinCondition()
         
}
const boxFour = function (event) {
    event.preventDefault()
    turnCount()
 
    let b1 = document.querySelector('#p4')

    if(player === "X") {
        b1.appendChild(px)
        winnerArray[3] = "X"
        $('#p4').text('X')
         } else {
             b1.appendChild(po)
             winnerArray[3] = "O"
             $('#p4').text('O')
         }
     
         document.getElementById('box-4').style.pointerEvents = 'none'
         checkWinCondition()
       
}
const boxFive = function (event) {
    event.preventDefault()
    turnCount()

    let b1 = document.querySelector('#p5')

    if(player === "X") {
        b1.appendChild(px)
        winnerArray[4] = "X"
        $('#p5').text('X')
         } else {
             b1.appendChild(po)
             winnerArray[4] = "O"
             $('#p5').text('O')
         }
 
         document.getElementById('box-5').style.pointerEvents = 'none'
         checkWinCondition()
         
}
const boxSix = function (event) {
    event.preventDefault()
    turnCount()
    
    let b1 = document.querySelector('#p6')
   
    if(player === "X") {
        b1.appendChild(px)
        winnerArray[5] = "X"
        $('#p6').text('X')
         } else {
             b1.appendChild(po)
             winnerArray[5] = "O"
             $('#p6').text('O')
         }
         document.getElementById('box-6').style.pointerEvents = 'none'
         checkWinCondition()
         

}
const boxSeven = function (event) {
    event.preventDefault()
    turnCount()
   
    let b1 = document.querySelector('#p7')
   
    if(player === "X") {
        b1.appendChild(px)
        winnerArray[6] = "X"
        $('#p7').text('X')
         } else {
             b1.appendChild(po)
             winnerArray[6] = "O"
             $('#p7').text('O')
         }
   
         document.getElementById('box-7').style.pointerEvents = 'none'
         checkWinCondition()
        
}
const boxEight = function (event) {
    event.preventDefault()
    turnCount()
    
    let b1 = document.querySelector('#p8')
    
    if(player === "X") {
        b1.appendChild(px)
        winnerArray[7] = "X"
        $('#p8').text('X')
         } else {
             b1.appendChild(po)
             winnerArray[7] = "O"
             $('#p8').text('O')
         }
 
         document.getElementById('box-8').style.pointerEvents = 'none'
         checkWinCondition()
       
}
const boxNine = function (event) {
    // event.preventDefault()
    turnCount()
  
    let b1 = document.querySelector('#p9')
   
    if(player === "X") {
        b1.appendChild(px)
        winnerArray[8] = "X"
        $('#p9').text('X')
         } else {
             b1.appendChild(po)
             winnerArray[8] = "O"
             $('#p9').text('O')
         }
         document.getElementById('box-9').style.pointerEvents = 'none'
         checkWinCondition()
        

}



module.exports = {
    onChangePassword,
    onCreateGame,
    onGetAllGames,
    onGetGame,
    onSignIn,
    onSignOut,
    onSignUp,
    onUpdateGame,
    // onSaveGame,
    boxOne,
    boxTwo,
    boxThree,
    boxFour,
    boxFive,
    boxSix,
    boxSeven,
    boxEight,
    boxNine
}