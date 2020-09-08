'use strict'
//Required Files
    const getFormFields = require('./../../lib/get-form-fields')
    const api = require('./api')
    const ui = require('./ui')
    const store = require('./store')

//Variables
    let player = "x"
    let over = false
    let turns = 0
      
     
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
       $('#message-B').text(' ')
       $('#message').text(' ')
        const form = event.target
        const data = getFormFields(form)
        api.createGame(data)
        .then(ui.onNewGameSuccess)
        .catch(ui.onNewGameFailure)
    }
    const onOldGame = function(event) {//This Function is GOOD!
        const form = event.target
        const data = getFormFields(form)
        api.getGame(data)
        .then(ui.onOldGameSuccess)
        .catch(ui.onOldGameFailure)
    }
    const onAllOldGames = function() {//This Function is GOOD!
        api.getAllGames()
        .then(ui.onAllOldGamesSuccess)
        .catch(ui.onAllOldGamesFailure)
    }
    const clickedBox = function (event){
        let cellIndex = $(event.target).attr('data-cell-index')
        store.player = player
        store.game.cells[cellIndex] = player
       $(event.target).text(player)
        setPlayer()
       turns += 1
    
        winCondition()
  
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
        .catch(ui.onUpdateGameFailure)
     
    }

//Auth Functions
const onSignOut = function(event) {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)
    api.signOut(data)
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
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
    $('#all-old-games').hide()
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

    const winnerWinner = function () {
        let currentPlayer = null
        if(player === "x") {
            currentPlayer = "o"
        } else {
            currentPlayer = "x"
        }

        $('#message-B').text('The game is over! ' + currentPlayer + ' is the winner! ' + player + ' is the loser!'
         )
        $('#board-container').hide()
        over = true
      
    }

    let winCondition = function () {
        //I need to be able to determine where the x's and o's are
        let winnerArray = store.game.cells
      

        let WA0 = winnerArray[0]
        let WA1 = winnerArray[1]
        let WA2 = winnerArray[2]
        let WA3 = winnerArray[3]
        let WA4 = winnerArray[4]
        let WA5 = winnerArray[5]
        let WA6 = winnerArray[6]
        let WA7 = winnerArray[7]
        let WA8 = winnerArray[8]

        if(WA0 === "x" && WA1 === "x" && WA2 === "x" ) {
            winnerWinner()
        
        }
        if(WA0 === "x" && WA3 === "x" && WA6 === "x" ) {
            winnerWinner()
        }
        if(WA0 === "x" && WA4 === "x" && WA8 === "x" ) {
            winnerWinner()
        }
        if(WA1 === "x" && WA4 === "x" && WA7 === "x" ) {
            winnerWinner()
        }
        if(WA2 === "x" && WA4 === "x" && WA6 === "x" ) {
            winnerWinner()
        }
        if(WA2 === "x" && WA5 === "x" && WA8 === "x" ) {
            winnerWinner()
        }
        if(WA3 === "x" && WA4 === "x" && WA5 === "x" ) {
            winnerWinner()
        }
        if(WA6 === "x" && WA7 === "x" && WA8 === "x" ) {
            winnerWinner()
        }

        if(WA0 === "o" && WA1 === "o" && WA2 === "o" ) {
            winnerWinner()
        }
        if(WA0 === "o" && WA3 === "o" && WA6 === "o" ) {
            winnerWinner()
        }
        if(WA0 === "o" && WA4 === "o" && WA8 === "o" ) {
            winnerWinner()
        }
        if(WA1 === "o" && WA4 === "o" && WA7 === "o" ) {
            winnerWinner()
        }
        if(WA2 === "o" && WA4 === "o" && WA6 === "o" ) {
            winnerWinner()
        }
        if(WA2 === "o" && WA5 === "o" && WA8 === "o" ) {
            winnerWinner()
        }
        if(WA3 === "o" && WA4 === "o" && WA5 === "o" ) {
        winnerWinner()
    }
        if(WA6 === "o" && WA7 === "o" && WA8 === "o" ) {
        winnerWinner()
    }
    if(turns === 9 && over === false) {
        $('#message-B').text('The game is a tie!')
        
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