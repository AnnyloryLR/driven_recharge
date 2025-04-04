CREATE DATABASE drivencharge;

CREATE TABLE carriers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  code INT NOT NULL
);

INSERT INTO carriers (name, code) VALUES ('Vivo', 15);
INSERT INTO carriers (name, code) VALUES ('Tim', 41);
INSERT INTO carriers (name, code) VALUES ('Oi', 31);
INSERT INTO carriers (name, code) VALUES ('Claro', 21);

CREATE TABLE phones (
  id SERIAL PRIMARY KEY,
  phone_number TEXT NOT NULL,
  carrier TEXT NOT NULL,
  name VARCHAR(255) NOT NULL,
  cpf TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL
);

CREATE TABLE recharges (
  id SERIAL PRIMARY KEY,
  recharge INTEGER,
  phone_id INTEGER NOT NULL,
  CONSTRAINT fk_phone_id
    FOREIGN KEY(phone_id)
    REFERENCES phones(id)
);