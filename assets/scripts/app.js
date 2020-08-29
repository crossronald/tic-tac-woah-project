'use strict'

const authEvents = require('./events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

 

$(() => {

    
//User account related + game data managment
$('#change-password').on('submit',authEvents.onChangePassword)//change password
$('#create-game').on('click', authEvents.onCreateGame)//create game
$('#get-all-games').on('click', authEvents.onGetAllGames)//get all games
$('#get-game').on('click', authEvents.onGetGame)//get game
$('#sign-in').on('submit',authEvents.onSignIn)//sign in
$('#sign-out').on('submit',authEvents.onSignOut)//sign out
$('#sign-up').on('submit',authEvents.onSignUp)//sign up
$('#update-game').on('click', authEvents.onUpdateGame)//update game
$('#sign-out').on('click', authEvents.onSignOut)//update game
$('#play-again').on('click', authEvents.onCreateGame)//restart game

//game play management
$('#box-1').on('click', authEvents.boxOne)
$('#box-2').on('click', authEvents.boxTwo)
$('#box-3').on('click', authEvents.boxThree)
$('#box-4').on('click', authEvents.boxFour)
$('#box-5').on('click', authEvents.boxFive)
$('#box-6').on('click', authEvents.boxSix)
$('#box-7').on('click', authEvents.boxSeven)
$('#box-8').on('click', authEvents.boxEight)
$('#box-9').on('click', authEvents.boxNine)
})
/*

Developers should store JavaScript files in assets/scripts. The "manifest" or entry-point is assets/scripts/app.js. In general, only application initialization goes in this file. It's normal for developers to start putting all code in this file, but encourage them to break out different responsibilities and use the require syntax put references where they're needed.

*/