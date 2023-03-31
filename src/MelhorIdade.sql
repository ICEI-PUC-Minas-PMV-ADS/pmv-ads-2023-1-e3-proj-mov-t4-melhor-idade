USE Melhoridade;

SELECT * FROM Usuario;
DELETE FROM Usuario WHERE Codigo = 1;
SELECT * FROM Usuario;

SELECT * FROM checkup;
UPDATE checkup SET DataProximo = '2002/03/24' WHERE Codigo = '4';
SELECT * FROM checkup;