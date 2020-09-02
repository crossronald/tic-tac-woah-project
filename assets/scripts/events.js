'use strict'
//Required Files
    const getFormFields = require('./../../lib/get-form-fields')
    const api = require('./api')
    const ui = require('./ui')
    const store = require('./store')

//Variables
    let player = "x"
    let over = false
 
      const possibleWins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ]
      
    
//Game API Functions
const setPlayer = function() {
    if (player === "x") {
        player = "o"
    } else {
        player = "x"
    }   
}
    const onNewGame = function(event) {//This Function is GOOD!
        $('#board-container').show()
       $('.box').css('pointer-events', 'auto')
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
        // console.log(data)
        api.getAllGames(data)
        .then(ui.onAllOldGamesSuccess)
        .catch(ui.onFailMessage)
    }
    const clickedBox = function (event){

        let cellIndex = $(event.target).attr('data-cell-index')
        store.player = player
        store.game.cells[cellIndex] = player
       $(event.target).text(player)
       winCondition()
      
        setPlayer()
        let data = {
            game: {
              cell: {
                index: cellIndex,
                value: player
              },
              over: over
            }
          }
        $(event.target).css('pointer-events', 'none')
        api.updateGame(data)
        .then(ui.onUpdateGameSuccess)
        .catch(ui.onFailMessage)
       console.log(over)
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

// Game board Functions
const hideStuff = function () {
    $('#board-container').hide()
    $('#change-password').hide()
    $('#new-game').hide()
    $('#sign-out').hide()
    $('#sign-up-email').hide()
    $('#sign-up-pw').hide()
    $('#sign-up-pw-confirm').hide()
    $('#sign-in-email').hide()
    $('#sign-in-pw').hide()
    $('#sign-up-button').hover(function(){
        $('#sign-up-email').show()
        $('#sign-up-pw').show()
        $('#sign-up-pw-confirm').show()
    })
    $('#sign-in-button').hover(function() {
        $('#sign-in-email').show()
        $('#sign-in-pw').show()
        })
    }

   
      
      const winCondition = function () {
         let gameBoard = store.game.cells
         const winningArray = []
         for(let i = 0; i < possibleWins.length; i++) {
             let singleWin = possibleWins[i]
          
            winningArray.push(gameBoard[singleWin[0]])
            winningArray.push(gameBoard[singleWin[1]])
            winningArray.push(gameBoard[singleWin[2]])

            if(winningArray[0] === winningArray[1] && winningArray[1] === winningArray[2] && winningArray[0] !== "") {
                over = true
                console.log(over)
                }
                
        
      }
     
    }

//Immediately invoked funcitons
    hideStuff()

module.exports = {
  onSignOut,
  onSignUp,
  onSignIn,
  onChangePassword,
  onNewGame,
  onOldGame,
  onAllOldGames,
  clickedBox,
  hideStuff,
}