'use strict'

let apiUrl
const apiUrls = {
  production: '<replace-with-heroku-url>',
  development: 'http://localhost:4741'
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