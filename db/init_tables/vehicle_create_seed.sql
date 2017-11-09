-- === DROP TABLE ====================

DROP TABLE IF EXISTS vehicles;

-- === CREATE TABLE ==================

CREATE TABLE IF NOT EXISTS vehicles (
  id SERIAL PRIMARY KEY,
  make VARCHAR(255),
  model VARCHAR(255),
  year INTEGER,
  owner_id INTEGER REFERENCES users(id)
);

-- === INSERT STATEMENT ===============

INSERT INTO vehicles
(make, model, year, owner_id)
VALUES
('Toyota', 'Camry', 1991, 1),
('Honda', 'Civic', 1995, 1),
('Ford', 'Focus', 2005, 1),
('Ford', 'Taurus', 2003, 2),
('VW', 'Bug', 2010, 2),
('Mini', 'Cooper', 2013, 3);
