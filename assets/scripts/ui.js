const store = require('./store')
const storeGame = require('./storeGame')

const onChangePasswordSuccess = function() {
    $('#message').text('Password successfully changed!')
    $('#change-password').trigger("reset")
}
const onCreateGameSuccess = function(response) {
    $('#message').text('Congratulations! You created the game!')
        storeGame.id = response.game._id
}
const onGetAllGamesSuccess = function() {
    $('#message').text('Here are all your games!')
}
const onGetGameSuccess = function() {
    $('#message').text('Here\'s the game you asked for!')
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
const onUpdateGameSuccess = function() {
    $('#message').text('Your game has been successfully updated!')
}


const onChangePasswordFailure = function () {
    $('#message').text('An error has occurred. Please try again!')
    $('#change-password').trigger("reset")
}
const onCreateGameFailure = function () {
    $('#message').text('An error has occurred. Please try again!')
}
const onGetAllGamesFailure = function () {
    $('#message').text('An error has occurred. Please try again!')
}
const onGetGameFailure = function () {
    $('#message').text('An error has occurred. Please try again!')
    
}
const onSignInFailure = function () {
    $('#message').text('An error has occurred. Please try again!')
    $('#sign-in').trigger("reset")
}
const onSignOutFailure = function () {
    $('#message').text('An error has occurred. Please try again!')
}
const onSignUpFailure = function () {
    $('#message').text('An error has occurred. Please try again!')
    $('#sign-up').trigger("reset")
}
const onUpdateGameFailure = function (error) {
    $('#message').text('An error has occurred. Please try again!')
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
onCreateGameFailure,
onGetAllGamesFailure,
onGetGameFailure,
onSignInFailure,
onSignOutFailure,
onSignUpFailure,
onUpdateGameFailure
}