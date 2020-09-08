//Require file functions
    const store = require('./store')
    
//Fail Message Funciton
     function onFailMessage() {
        $('#message').text('An error has occurred. Please try again!')
    }
 
//Click event functions Auth Success
    const onSignOutSuccess = function() {
        $('#message').text('You have been signed out!')  
        $('#change-password').hide()
        $('#new-game').hide()
        $('#sign-out').hide()
        $('#sign-in').show()
        $('#sign-up').show()
        $('#board-container').hide()
        $('#all-old-games').hide()

    }
    const onSignUpSuccess = function() {
        $('#message').text('Congratulations! Your account is created!')
        $('#sign-up').trigger("reset")
    }
    const onSignInSuccess = function(response) {
        store.user = response.user 
        $('#message').text('You are now signed in!')
        $('#change-password').show()
        $('#new-game').show()
        $('#sign-out').show()
        $('#sign-in').trigger("reset")
        $('#sign-in').hide()
        $('#sign-up').hide()
        $('#all-old-games').show()
    }
    const onChangePasswordSuccess = function() {
        $('#message').text('Password successfully changed!')
        $('#change-password').trigger("reset")
    }

//Click event functions Auth Failure
    const onSignOutFailure = function () {
        $('#message').text('An error has occurred. Please try again!')
        $('#sign-out').trigger("reset")
    }
    const onSignUpFailure = function () {
        console.log('this is a sign up failure')
        $('#message').text('An error has occurred. Please try again!')
        $('#sign-up').trigger("reset")
    }
    const onSignInFailure = function () {
        $('#message').text('An error has occurred. Please try again!')
        $('#sign-in').trigger("reset")
    }
    const onChangePasswordFailure = function () {
        $('#message').text('An error has occurred. Please try again!')
        $('#change-password').trigger("reset")
    }

//Click event functions Game Success
    const onNewGameSuccess = function(response) {
        $('#message').text('Congratulations! You created the game!')
        $('#board-container').show()
        store.game  =  response.game
        $('.box').text('')

    }
    const onOldGameSuccess = function() {
        $('#message').text('Here\'s the game you asked for!')
    }  
    const onAllOldGamesSuccess = function(response) {
        store.games = response.games
        let stored = store.games

        $('#message-B').text(`You have played ${stored.length} games so far!`)
        
            
    } 
    const onUpdateGameSuccess = function(response) {
       
      let currentPlayer = store.player
      if(currentPlayer === "x") {
          currentPlayer = "o"
      } else {
          currentPlayer = "x"
      }
       $('#message').text(`The game has been updated! It's ${currentPlayer}'s turn!`)
   
      

    }


//Click Event Function Game Failure
    const onNewGameFailure = function() {
        onfailMessage()
    }
    const onOldGameFailure = function(){
        onfailMessage()
    }  
    const onAllOldGamesFailure = function() {
        onfailMessage()     
    } 
    const onUpdateGameFailure = function() {
        onfailMessage()
    }



module.exports = {
onSignOutSuccess,
onSignOutFailure,
onSignUpSuccess,
onSignUpFailure,
onSignInSuccess,
onSignInFailure,
onChangePasswordSuccess,
onChangePasswordFailure,
onNewGameSuccess,
onNewGameFailure,
onOldGameSuccess,
onOldGameFailure,
onAllOldGamesSuccess,
onAllOldGamesFailure,
onUpdateGameSuccess,
onUpdateGameFailure,
onFailMessage
}