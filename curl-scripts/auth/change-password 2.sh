curl "https://tic-tac-toe-api-production.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=4ca722ddbca7349726798425ef037f74" \
  --header "Content-Type: application/json" \
  --data '{
      "passwords": {
          "old": "'"${OLDPW}"'",
          "new": "'"${NEWPW}"'"
          }
        }'
echo