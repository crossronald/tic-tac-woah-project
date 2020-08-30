curl "https://tic-tac-toe-api-production.herokuapp.com/games/5f485b049314ac0017a1a000" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer b9696a0a8239614085c435aabfe2c66c" \
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
