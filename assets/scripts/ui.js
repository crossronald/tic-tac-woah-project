const store = require('./store')
const storeGame = require('./storeGame')

const onFailMessage = function () {
    $('#message').text('An error has occurred. Please try again!')
}


const onChangePasswordSuccess = function() {
    $('#message').text('Password successfully changed!')
    $('#change-password').trigger("reset")
}
const onCreateGameSuccess = function(response) {
    $('#message').text('Congratulations! You created the game!')
      
        storeGame.id = response.game._id
        
}

// const onSaveGameSuccess = function (email, savedGame) {
//     //THIS IS EXPERIMENTAL CODE
//     object = {
//         email: updateGame.com,
//         savedGame: 893u839749032
//     }

// //THIS IS EXPERIMENTAL CODE
// }

const onGetAllGamesSuccess = function() {
    $('#message').text('Here are all your games!')
    return storeGame //DOUBLE CHECK THIS IF YOU HAVE ANY ISSUES
        
} 
const onGetGameSuccess = function(response ) {
    $('#message').text('Here\'s the game you asked for!')
    console.log(response.user.email)
    if(store.user.email = response.user.email){
        // storeGame.id = TRY HEREEEEEEEEEEEE
        }
  
}  
const onSignInSuccess = function(response) {
    store.user = response.user 
    $('#message').text('You are now signed in!')
    $('#sign-in').trigger("reset")
    
}
const onSignOutSuccess = function() {
    $('#message').text('You have been signed out!')  
}
const onSignUpSuccess = function() {
    $('#message').text('Congratulations! Your account is created!')
    $('#sign-up').trigger("reset")
}
const onUpdateGameSuccess = function(email, gameID, gameState) {
    $('#message').text('Your game has been successfully updated!')
    console.log('the thing after this is the store cosole.')
    console.log(store)
    console.log(storeGame)
    console.log(email)
    console.log(gameID)
    console.log(gameState)
    store.user.email = email
    storeGame.id = gameID.id
    storeGame.cells = gameState
    console.log(storeGame.cells)
    
}


const onChangePasswordFailure = function () {
    failMessage()
    $('#change-password').trigger("reset")
}

const onSignInFailure = function () {
    failMessage()
    $('#sign-in').trigger("reset")
}

const onSignUpFailure = function () {
    failMessage()
    $('#sign-up').trigger("reset")
}


module.exports = {
onChangePasswordSuccess,
onCreateGameSuccess,
onGetAllGamesSuccess,
onGetGameSuccess,
onSignInSuccess,
onSignOutSuccess,
onSignUpSuccess,
onUpdateGameSuccess,
onChangePasswordFailure,
onFailMessage,
onSignInFailure,
onSignUpFailure,
// onSaveGameSuccess
}