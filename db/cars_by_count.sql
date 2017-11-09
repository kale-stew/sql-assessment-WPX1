SELECT COUNT(id)
FROM vehicles
WHERE owner_id = $1;
