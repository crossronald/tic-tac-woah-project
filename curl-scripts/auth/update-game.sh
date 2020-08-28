curl "https://tic-tac-toe-api-production.herokuapp.com/games/5f485b049314ac0017a1a000" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer 267b0c272761786da87579490f97261d" \
  --data '{
  "game": {
    "cell": {
      "index": 0,
      "value": "x"
    },
    "over": false
  }
}'

echo
