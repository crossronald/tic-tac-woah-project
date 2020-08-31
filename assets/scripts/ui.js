//Require file functions
    const store = require('./store')

//Fail Message Funciton
    const onFailMessage = function () {
        $('#message').text('An error has occurred. Please try again!')
    }

//Click event functions Auth Success
    const onSignOutSuccess = function() {
        $('#message').text('You have been signed out!')  
    }
    const onSignUpSuccess = function() {
        $('#message').text('Congratulations! Your account is created!')
        $('#sign-up').trigger("reset")
    }
    const onSignInSuccess = function(response) {
        store.user = response.user 
        $('#message').text('You are now signed in!')
        $('#sign-in').trigger("reset")
    }
    const onChangePasswordSuccess = function() {
        $('#message').text('Password successfully changed!')
        $('#change-password').trigger("reset")
    }

//Click event functions Auth Failure
    const onSignOutFailure = function () {
        failMessage()
        $('#sign-out').trigger("reset")
    }
    const onSignUpFailure = function () {
        failMessage()
        $('#sign-up').trigger("reset")
    }
    const onSignInFailure = function () {
        failMessage()
        $('#sign-in').trigger("reset")
    }
    const onChangePasswordFailure = function () {
        failMessage()
        $('#change-password').trigger("reset")
    }

//Click event functions Game Success
    const onNewGameSuccess = function(response) {
        $('#message').text('Congratulations! You created the game!')
        store.game  =  response.game
    }
    const onOldGameSuccess = function() {
        $('#message').text('Here\'s the game you asked for!')
    }  
    const onAllOldGamesSuccess = function(response) {
        $('#message').text('Here are all your games!')
        return response
            
    } 
    const onSaveGameSuccess = function() {
        $('#message').text('Your game has been successfully updated!')
    }

//Click Event Function Game Failure
    const onNewGameFailure = function() {
        failMessage()
    }
    const onOldGameFailure = function(){
        failMessage()
    }  
    const onAllOldGamesFailure = function() {
        failMessage()     
    } 
    const onSaveGameFailure = function() {
        failMessage()
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
onSaveGameSuccess,
onSaveGameFailure,
onFailMessage
}