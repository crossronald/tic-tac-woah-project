API="https://tic-tac-toe-api-production.herokuapp.com/get-game"
URL_PATH="/get-game"
curl "${API}${URL_PATH}/${ID}"\
--include \
--request PATCH
echo