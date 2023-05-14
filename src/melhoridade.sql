CREATE DATABASE melhoridade;
USE melhoridade;

CREATE TABLE Medicamentos (
	Codigo int(3) PRIMARY KEY,
	Nome varchar(20),
	Dosagem varchar(10),
	Horario varchar(5),
	Data datetime(6));
    
CREATE TABLE AtividadeFisica (
	Codigo int(3) PRIMARY KEY,
	Nome varchar(20),
	Duracao varchar(10),
	Horario varchar(20),
	Data datetime(6));

CREATE TABLE IngestaoAgua (
	Codigo int(3) PRIMARY KEY,
	Data datetime(6),
	Horario varchar(5),
	QuantidadeCopos int(3));

CREATE TABLE CheckUp (
	Codigo int(3) PRIMARY KEY,
	DataUltimo datetime(6),
	DataProximo datetime(6));
    
CREATE TABLE Usuario (
    Codigo INT(3) PRIMARY KEY,
	Nome varchar(50),
    Telefone varchar(20),
    DataNascimento datetime(6),
    Cidade varchar(30),
    Estado varchar(2),
    Senha varchar(8),
    Medicamentos int(3),
    AtividadeFisica int(3),
    IngestaoAgua int(3),
    CheckUp int(3),
    CONSTRAINT FK_Usuario_Medicamentos foreign key (Medicamentos) references Medicamentos(Codigo),
    CONSTRAINT FK_Usuario_AtividadeFisica foreign key (AtividadeFisica) references AtividadeFisica(Codigo),
    CONSTRAINT FK_Usuario_IngestaoAgua foreign key (IngestaoAgua) references IngestaoAgua(Codigo),
    CONSTRAINT FK_Usuario_CheckUp foreign key (CheckUp) references CheckUp(Codigo));

Insert into Medicamentos values (1, 'Paracetamol', '500mg', '10:00', '23/03/30');
Insert into Medicamentos values (2, 'Dipirona', '1g', '14:00', '23/03/27');

Select * from Medicamentos;

Insert into AtividadeFisica values (4, 'Caminhada', '45min', '08:00-08:45', '23/03/21');
Insert into AtividadeFisica values (5, 'Natação', '1h', '19:00-20:00', '23/03/22');

Select * from AtividadeFisica;

Insert into IngestaoAgua values (6, '23/03/29', '11:00', 8);
Insert into IngestaoAgua values (7, '23/03/28', '17:30', 2);

Select * from IngestaoAgua;

Insert into CheckUp values (8, '23/03/29', '24/03/29');
Insert into CheckUp values (9, '23/03/28', '23/09/28');

Select * from CheckUp;

Insert into Usuario values (10, 'Carlos Drummond', 'carlos@gmail.com', '40/01/01', 'Itabira', 'MG', '12345', 1, 4, 6, 8);
Insert into Usuario values (11, 'Ligia Fagundes', 'ligia@yahoo.com', '30/02/02', 'São Paulo', 'SP', '98765', 2, 5, 7, 9);

ALTER TABLE Usuario RENAME COLUMN Telefone TO Email;

Select * from Usuario;
