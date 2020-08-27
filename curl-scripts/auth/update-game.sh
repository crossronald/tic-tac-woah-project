API="https://tic-tac-toe-api-production.herokuapp.com/update-game"
URL_PATH="/update-game"
curl "${API}${URL_PATH}/${ID}"\
--include \
--request PATCH
echo