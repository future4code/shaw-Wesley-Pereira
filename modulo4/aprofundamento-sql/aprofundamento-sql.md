### Exercicio 2

a) name = "Moacyr Franco",
birth_date = "2020-02-10"
WHERE id = "003";

b)UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

c)UPDATE Actor
SET
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";

d)UPDATE Actor SET name = "Moacyr Franco", birth_date = "2020-02-10", salary = 600000, gender = "male" WHERE id = "010" 0 row(s) affected Rows matched: 0 Changed: 0 Warnings: 0

### Exercicio 3

a)DELETE FROM Actor WHERE name = "Fernanda Montenegro"

b)DELETE FROM Actor
WHERE
gender = "male" AND
salary > 1000000

### Exercicio 4

a)SELECT MAX(salary) FROM Actor

b)SELECT MIN(salary) FROM Actor WHERE gender = "female"

c)SELECT COUNT(\*) FROM Actor WHERE gender = "female"

d)SELECT SUM(salary) FROM Actor

### Exercicio 5

b) SELECT id, name FROM Actor
ORDER BY name DESC;

c)SELECT \* FROM Actor
ORDER BY salary;

d)SELECT \* FROM Actor
ORDER BY salary DESC
LIMIT 3;

e)SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

### Exercicio 6

a)ALTER TABLE Filmes ADD playing_limit_date VARCHAR(255);

b)ALTER TABLE Filmes CHANGE evaluation evaluation FLOAT;

c)UPDATE Filmes
SET
playing_limit_date = "2020-12-31"
WHERE id = "001"
