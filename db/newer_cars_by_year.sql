SELECT vehicles.*, users.name
FROM users INNER JOIN vehicles
ON vehicles.owner_id = users.id
WHERE vehicles.year > 2000
ORDER BY vehicles.year DESC;