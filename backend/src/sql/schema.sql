CREATE TABLE reports (
    id SERIAL PRIMARY KEY,
    user_id TEXT,
    month TEXT,
    total_spent INT,
    top_category TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);