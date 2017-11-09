INSERT INTO vehicles
(make, model, year, owner_id)
VALUES
($1, $2, $3, $4)
RETURNING *;