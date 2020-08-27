API="https://tic-tac-toe-api-production.herokuapp.com/create-game"
URL_PATH="/create-game"
curl "${API}${URL_PATH}/${ID}"\
--include \
--request PATCH
echo