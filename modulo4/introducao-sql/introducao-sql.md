### Exercicio 1

SHOW DATABASES -> Mostra 'information_schema'
e 'shaw-21815109-pereira'

SHOW TABLES -> Mostra 'Actor'

DESCRIBE Actor -> Mostra
'id', 'varchar(255)', 'NO', 'PRI', NULL, ''
'name', 'varchar(255)', 'NO', '', NULL, ''
'salary', 'float', 'NO', '', NULL, ''
'birth_date', 'date', 'NO', '', NULL, ''
'gender', 'varchar(6)', 'NO', '', NULL, ''

### Exercicio 2

a)

b) INSERT INTO Actor (id, name ,salary, birth_date, gender) VALUES( "002", "G", 1200000, "23-08-1964", "female" ) Error Code: 1292. Incorrect date value: '23-08-1964' for column 'birth_date' at row 1

c) INSERT INTO Actor (id, name, salary) VALUES( "003", "Fernanda Montenegro", 300000, "1929-10-19", "female" ) Error Code: 1136. Column count doesn't match value count at row 1

d) INSERT INTO Actor (id, salary, birth_date, gender) VALUES( "004", 400000, "1949-04-18", "male" ) Error Code: 1364. Field 'name' doesn't have a default value

e) INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES( "005", "Juliana Paes", 719333.33, 1979-03-26, "female" ) Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1

### Exercicio 3

a)SELECT id, name from Actor WHERE gender = "female";

b)SELECT id, salary from Actor WHERE name = "Tony Ramos";

c)SELECT id, name from Actor WHERE gender = "invalid";

d)SELECT id, name, salary from Actor WHERE salary < 500000;

e) SELECT id, nome from Actor WHERE id = "002" LIMIT 0, 1000 Error Code: 1054. Unknown column 'nome' in 'field list'

### Exercicio 4

a)

b)SELECT \* FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;

c)SELECT \* FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

d)SELECT \* FROM Actor
WHERE
(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
AND salary BETWEEN 350000 AND 900000;

### Exercicio 5

a) CREATE TABLE Filmes (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR (255) NOT NULL,
sinopse TEXT NOT NULL,
release_date DATE NOT NULL,
evaluation VARCHAR(6) NOT NULL
);

b)INSERT INTO Filmes (id, name, sinopse, release_date, evaluation)
VALUES(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
"7"
);

c)INSERT INTO Filmes (id, name, sinopse, release_date, evaluation)
VALUES(
"002",
"Doce de mãe",
"ona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2006-12-27",
"10"
);

d)INSERT INTO Filmes (id, name, sinopse, release_date, evaluation)
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
"8"
);

e) INSERT INTO Filmes (id, name, sinopse, release_date, evaluation)
VALUES(
"004",
"Deus é Brasileiro",
"Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
"2003-01-31",
"9"
);

### Exercicio 6

a)SELECT id, name, evaluation FROM Filmes WHERE id = "003";

b)SELECT \* FROM Filmes WHERE name = "Deus é Brasileiro";

c)SELECT id, name, sinopse FROM Filmes WHERE evaluation > 7;

### Exercicio 7

a)SELECT \* FROM Filmes
WHERE name LIKE "%vida%";

b)SELECT \* FROM Filmes
WHERE name LIKE "%TERMO DE BUSCA%" OR
sinopse LIKE "%TERMO DE BUSCA%";

c)SELECT \* FROM Filmes
WHERE release_date < "2020-05-04";

d)SELECT \* FROM Filmes
WHERE release_date < "2020-05-04" AND
(name LIKE "%TERMO DE BUSCA%" OR
sinopse LIKE "%TERMO DE BUSCA%") AND evaluation > 7;
