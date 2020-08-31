'use strict'

//Required Files
    const getFormFields = require('./../../lib/get-form-fields')
    const api = require('./api')
    const ui = require('./ui')
    const storeGame = require('./storeGame')

//Variables
    const px = document.createTextNode("x")
    const po = document.createTextNode("o")
    let total = 0
    let player = ""
    let winnerArray = []
    let cellNum = null
    let playerValue = "x"
    let over = false
    let clickArray = ['box-1', 'box-2', 'box-3', 'box-4', 'box-5', 'box-6', 'box-7', 'box-8', 'box-9']
    let data = {
        game: {
        cell: {
            index: cellNum,
            value: playerValue
        },
        over: over
        }
    }



// Game board Functions
    const hideBoard = function (){
    $('#board-container').hide()
    }
    const turnCounterer = function (){
        total += 1
        return total
    }
    const setPlayer = function() {
        if (total % 2 === 0) {
            player = "x"
        } else {
            player = "o"
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
        let x = x
        let o = o
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
    const onCreateGame = function(event) {
        event.preventDefault()
        $('#board-container').show()
        $('p').text('')
    restoreClicks()
        const form = event.target
        total = 0
        const data = getFormFields(form)
        storeGame.over = false
        api.createGame(data)
        .then(ui.onCreateGameSuccess)
        .catch(ui.onFailMessage)
    }
    const onGetAllGames = function(event) {
        event.preventDefault()
        const form = event.target
        const data = getFormFields(form)
    
        api.getAllGames(data)
        .then(ui.onGetAllGamesSuccess)
        .catch(ui.onFailMessage)
    }
    const onGetGame = function(event) {
        event.preventDefault()
        const form = event.target
        const data = getFormFields(form)
        api.getGame(data)
        .then(ui.onGetGameSuccess)
        .catch(ui.onFailMessage)
    }
    const onUpdateGame = function(event) {
        event.preventDefault()
        api.updateGame(data)
        .then(console.log)
        .catch(ui.onFailMessage)
        
    }


//Individual Box functions
    const boxOne = function () {
        turnCounter()
    let b1 = document.querySelector('#p1')
        if(player === "x") {
            b1.appendChild(px)
            cellNum = 0
            playerValue = "x"
            winnerArray[0] = "x"
            $('#p1').text('X')
            } else {
                b1.appendChild(po)
                cellNum = 0
                playerValue = "o"
                winnerArray[0] = "o"
                $('#p1').text('O')
            }
            document.getElementById('box-1').style.pointerEvents = 'none'
            checkWinCondition()
        }
    const boxTwo = function (event) {
        event.preventDefault()
        turnCounter()
        let b1 = document.querySelector('#p2')
        if(player === "x") {
            b1.appendChild(px)
            winnerArray[1] = "x"
            $('#p2').text('X')
            } else {
                b1.appendChild(po)
                winnerArray[1] = "o"
                $('#p2').text('O')
            }
            document.getElementById('box-2').style.pointerEvents = 'none'
            checkWinCondition()
            
    }
    const boxThree = function (event) {
        event.preventDefault()
        turnCounter()
        let b1 = document.querySelector('#p3')
        if(player === "x") {
            b1.appendChild(px)
            winnerArray[2] = "x"
            $('#p3').text('X')
            } else {
                b1.appendChild(po)
                winnerArray[2] = "o"
                $('#p3').text('O')
            }
            document.getElementById('box-3').style.pointerEvents = 'none'
            checkWinCondition()
    }
    const boxFour = function (event) {
        event.preventDefault()
        turnCounter()
        let b1 = document.querySelector('#p4')
        if(player === "x") {
            b1.appendChild(px)
            winnerArray[3] = "x"
            $('#p4').text('X')
            } else {
                b1.appendChild(po)
                winnerArray[3] = "o"
                $('#p4').text('O')
            }
            document.getElementById('box-4').style.pointerEvents = 'none'
            checkWinCondition()
    }
    const boxFive = function (event) {
        event.preventDefault()
        turnCounter()
        let b1 = document.querySelector('#p5')
        if(player === "x") {
            b1.appendChild(px)
            winnerArray[4] = "x"
            $('#p5').text('X')
            } else {
                b1.appendChild(po)
                winnerArray[4] = "o"
                $('#p5').text('O')
            }
            document.getElementById('box-5').style.pointerEvents = 'none'
            checkWinCondition()   
    }
    const boxSix = function (event) {
        event.preventDefault()
        turnCounter()
        let b1 = document.querySelector('#p6')
        if(player === "x") {
            b1.appendChild(px)
            winnerArray[5] = "x"
            $('#p6').text('X')
            } else {
                b1.appendChild(po)
                winnerArray[5] = "o"
                $('#p6').text('O')
            }
            document.getElementById('box-6').style.pointerEvents = 'none'
            checkWinCondition()
    }
    const boxSeven = function (event) {
        event.preventDefault()
        turnCounter() 
        let b1 = document.querySelector('#p7')
        if(player === "x") {
            b1.appendChild(px)
            winnerArray[6] = "x"
            $('#p7').text('X')
            } else {
                b1.appendChild(po)
                winnerArray[6] = "o"
                $('#p7').text('O')
            }
            document.getElementById('box-7').style.pointerEvents = 'none'
            checkWinCondition()
    }
    const boxEight = function (event) {
        event.preventDefault()
        turnCounter()
        let b1 = document.querySelector('#p8')
        if(player === "x") {
            b1.appendChild(px)
            winnerArray[7] = "x"
            $('#p8').text('X')
            } else {
                b1.appendChild(po)
                winnerArray[7] = "o"
                $('#p8').text('O')
            }
            document.getElementById('box-8').style.pointerEvents = 'none'
            checkWinCondition()
    }
    const boxNine = function (event) {
        turnCounter()
        let b1 = document.querySelector('#p9')
        if(player === "x") {
            b1.appendChild(px)
            winnerArray[8] = "x"
            $('#p9').text('X')
            } else {
                b1.appendChild(po)
                winnerArray[8] = "o"
                $('#p9').text('O')
            }
            document.getElementById('box-9').style.pointerEvents = 'none'
            checkWinCondition()
    }


//Auth Functions
    const onChangePassword = function(event) {
        event.preventDefault()
        const form = event.target
        const data = getFormFields(form
        api.changePassword(data)
        .then(ui.onChangePasswordSuccess)
        .catch(ui.onChangePasswordFailure)
    } 
    const onSignIn = function(event) {
        event.preventDefault()
        const form = event.target
        const data = getFormFields(form)
        api.signIn(data)
        .then(ui.onSignInSuccess)
        .catch(ui.onSignInFailure)
        $('#board-container').show()
    }
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

module.exports = {
    onChangePassword,
    onCreateGame,
    onGetAllGames,
    onGetGame,
    onSignIn,
    onSignOut,
    onSignUp,
    onUpdateGame,
    boxOne,
    boxTwo,
    boxThree,
    boxFour,
    boxFive,
    boxSix,
    boxSeven,
    boxEight,
    boxNine
}