UPDATE vehicles
SET owner_id = null
WHERE id = $1
RETURNING *;