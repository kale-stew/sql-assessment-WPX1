-- === DROP TABLE ====================

DROP TABLE IF EXISTS users CASCADE;

-- === CREATE TABLE ==================

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255)
);

-- === INSERT STATEMENT ===============

INSERT INTO users
(name, email)
VALUES
('John Smith', 'john@smith.com'),
('Dave Davis', 'dave@davis.com'),
('Jane Janis', 'jane@janis.com');
