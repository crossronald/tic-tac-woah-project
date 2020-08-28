'use strict'

let apiUrl
const apiUrls = {
  production: 'https://tic-tac-toe-api-production.herokuapp.com',
  development: 'https://tic-tac-toe-api-development.herokuapp.com'
}
 
if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}


/*
Developers should set apiUrls.production and apiUrls.development in assets/scripts/config.js. With apiUrls set, developers may rely on apiUrl as the base for API URLs.*/