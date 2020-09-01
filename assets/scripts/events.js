'use strict'

//Required Files
    const getFormFields = require('./../../lib/get-form-fields')
    const api = require('./api')
    const ui = require('./ui')
    const store = require('./store')


//Variables
    let total = 0

    let winnerArray = ["","","","","","","","",""]
    let cellNum = null
    let player = "x"
    
    const px = document.createTextNode("x")
    const po = document.createTextNode("o")
  

   

// Game board Functions
    const hideBoard = function (){
    $('#board-container').hide()
    }
 
    const setPlayer = function() {
        if (player === "x") {
            player = "o"
        } else {
            player = "x"
        }   
    }
    const currentPlayerMessage = function (){
    if(player === "x") {
        $('#message').text('Player is O')
    } else {
        $('#message').text('Player is X')
        }
    }
    const tieCondition = function (){
    if(total === 9) {
        $('#board-container').hide()
        $('#message').text('The game is over!')
        }
    }
    const restoreClicks = function () {
        for(let i = 0; i < clickArray.length; i++){
    let id = (document.getElementById(i).style.pointerEvents = 'auto')
    return id
        }
    }
    const removeClicks = function () {
        for(let i = 0; i < clickArray.length; i++){
    let id = (document.getElementById(i).style.pointerEvents = 'none')
    return id
        }
    }

    const checkWinCondition = function () { 
    [0, 1, 2]
    [0, 4, 8]
    [0, 3, 6]
    [1, 4, 7]
    [2, 4, 6]
    [2, 5, 8]
    [3, 4, 5]
    [6, 7, 8]
    }

    const gameOverMsg = function () {
        $('#message').text('The game is over! ' + player + ' wins!')
        removeClicks()
    }


//Game API Functions
    const onNewGame = function(event) {//This Function is GOOD!
        $('#board-container').show()
        const form = event.target
        const data = getFormFields(form)
        api.createGame(data)
        .then(ui.onNewGameSuccess)
        .catch(ui.onFailMessage)
    }
    const onOldGame = function(event) {//This Function is GOOD!
        const form = event.target
        const data = getFormFields(form)
        api.getGame(data)
        .then(ui.onOldGameSuccess)
        .catch(ui.onFailMessage)
    }
    const onAllOldGames = function(event) {//This Function is GOOD!
        const form = event.target
        const data = getFormFields(form)
        console.log(data)
        api.getAllGames(data)
        .then(ui.onAllOldGamesSuccess)
        .catch(ui.onFailMessage)
    }



//Individual Box functions
const clickedBox = function (event){
    console.log(event.target)

    let cellIndex = $(event.target).attr('data-cell-index')
    console.log('This is the cell index.', cellIndex)
    store.game.cells[cellIndex] = player
    setPlayer()
    let data = {
        game: {
          cell: {
            index: cellIndex,
            value: player
          },
          over: false
        }
      }
    api.updateGame(data)
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onFailMessage)
   
}


  


//Auth Functions
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
const onSignIn = function(event) {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)
    api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}
const onChangePassword = function(event) {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)
    api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
} 


module.exports = {
  onSignOut,
  onSignUp,
  onSignIn,
  onChangePassword,
  onNewGame,
  onOldGame,
  onAllOldGames,
  clickedBox
}