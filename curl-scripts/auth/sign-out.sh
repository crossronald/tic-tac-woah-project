curl "https://tic-tac-toe-api-production.herokuapp.com" \
--include \
--request DELETE \
--header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}"
echo