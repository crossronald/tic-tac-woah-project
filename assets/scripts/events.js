'use strict'
const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
 
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
    const form = event.target
    const data = getFormFields(form)
    api.createGame(data)
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}
const onGetAllGames = function(event) {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)
    api.getAllGames(data)
    .then(ui.onGetAllGamesSuccess)
    .catch(ui.onGetAllGamesFailure)
}
const onGetGame = function(event) {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)
    api.getGame(data)
    .then(ui.onGetGameSuccess)
    .catch(ui.onGetGameFailure)
}
const onSignIn = function(event) {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)
    api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}
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
const onUpdateGame = function(event) {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)
    api.updateGame(data)
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onUpdateGameFailure)
}




module.exports = {
    onChangePassword,
    onCreateGame,
    onGetAllGames,
    onGetGame,
    onSignIn,
    onSignOut,
    onSignUp,
    onUpdateGame
}