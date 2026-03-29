SELECT * FROM reports
WHERE user_id = $1
ORDER BY created_at DESC
LIMIT 3;