'use strict'
const storeGame = require("./storeGame")
const config = require("./config")
const store = require("./store")

//this is fake data to test updateGame
// const fakeData = {
//     "game": {
//       "cell": {
//         "index": 0,
//         "value": "x"
//       },
//       "over": false
//     }
//   }









const changePassword = function (data) {
    return $.ajax({
        url: config.apiUrl + '/change-password',
        method: 'PATCH',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        },
        data: data
    }) 
}



const createGame = function (data) {
    return $.ajax({
        url: config.apiUrl + '/games',
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        },
        data: data
    })
}
const getAllGames = function (data) {
    return $.ajax({
        url: config.apiUrl + '/games',
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        },
        data: data
    })
}
const getGame = function (data) {
    return $.ajax({
        url: config.apiUrl + '/games/' + storeGame.id,
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        },
        data: data
    })
}
const signIn = function (data) {
    return $.ajax({
        url: config.apiUrl + '/sign-in',
        method: 'POST',
        data: data
    })
}
const signOut = function (data) {
    return $.ajax({
        url: config.apiUrl + '/sign-out',
        method: 'DELETE',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        },
        data: data
    })
}
const signUp = function (data) {
    return $.ajax({
        url: config.apiUrl + '/sign-up',
        method: 'POST',
        data: data
    })
}
const updateGame = function (data) {
    return $.ajax({
        url: config.apiUrl + '/games/' + storeGame.id,
        method: 'PATCH',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        },
        data: data
    })
}

module.exports = {
    changePassword,
    createGame,
    getAllGames,
    getGame,
    signIn,
    signOut,
    signUp,
    updateGame
}