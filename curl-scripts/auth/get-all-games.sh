API="https://tic-tac-toe-api-production.herokuapp.com/get-all-games"
URL_PATH="/get-all-games"
curl "${API}${URL_PATH}/${ID}"\
--include \
--request PATCH
echo