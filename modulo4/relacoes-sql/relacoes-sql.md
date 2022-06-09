### Exercicio 1

b) INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
"001",
"Muito bom!",
7,
"004"
);

d) ALTER TABLE Movie DROP COLUMN rating;

### Exercicio 2

b) INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"004",
"001"
)

### Exercicio 3

b) SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
