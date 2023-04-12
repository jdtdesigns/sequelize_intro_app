DROP DATABASE IF EXISTS example_db;
CREATE DATABASE example_db;

USE example_db;

CREATE TABLE ssms (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(250),
  age INTEGER
);

CREATE TABLE students (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(250),
  ssm_id INT,
  FOREIGN KEY (ssm_id)
    REFERENCES ssms (id)
    ON DELETE SET NULL
);

INSERT INTO ssms (name) VALUES
  ('Jeanna');

INSERT INTO students (name, ssm_id) VALUES
  ('Cassandra', 1),
  ('Megan', 1);

UPDATE ssms SET email = 'enrique2@class.com' WHERE id = 1;


SELECT * FROM ssms;
SELECT * FROM students;


SELECT * FROM ssms WHERE id = 3;

SELECT
    students.name AS student_name,
    ssms.name AS ssm_name
  FROM students 
  JOIN ssms 
  ON students.ssm_id = ssms.id; 


