'use strict'
//Require File Functions
    const authEvents = require('./events')

 
 
//JQUERY Event Listener Function
    $(() => {
        //Auth Management
            $('#sign-out').on('click', authEvents.onSignOut)
            $('#sign-up').on('submit',authEvents.onSignUp)
            $('#sign-in').on('submit',authEvents.onSignIn)
            $('#change-password').on('submit',authEvents.onChangePassword)

        //Game Management
            $('#new-game').on('click', authEvents.onNewGame)
            $('#old-game').on('click', authEvents.onOldGame)
            $('#all-old-games').on('click', authEvents.onAllOldGames)
            $('#save-game').on('click', authEvents.onSaveGame)

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
