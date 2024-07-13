create database StartKick;

use StartKick;


create table Preferencia (
idPreferencia int primary key auto_increment,
TimeUsuario varchar(45),
liga varchar(45),
nacionalidade varchar(45),
estilo varchar(20)
);

create table Camisa (
idCamisa int primary key auto_increment,
nome varchar(45),
temporada varchar(45),
url_foto varchar(200)
) auto_increment = 10;

insert into Camisa values
(default, 'Al Hilal', '23/24', 'https://evoluasports.com.br/produtos/camisa-al-hilal-home-1-2023-24-puma-torcedor-masculina/?variant=709519939'),
(default, 'Alemanha', '23/24', 'https://evoluasports.com.br/produtos/camisa-alemanha-home-1-2024-adidas-torcedor-masculina/?variant=860212593'),
(default, 'Ajax', '23/24', 'https://evoluasports.com.br/produtos/camisa-ajax-home-1-2023-24-adidas-torcedor-masculina/?variant=709519077'),
(default, 'Barcelona', '23/24', 'https://evoluasports.com.br/produtos/camisa-barcelona-home-1-2023-24-nike-torcedor-masculina1/'),
(default, 'Inter de Milão', '23/24', 'https://evoluasports.com.br/produtos/camisa-inter-de-milao-home-1-2023-24-nike-torcedor-masculina1/'),
(default, 'Bayern', '23/24', 'https://evoluasports.com.br/produtos/camisa-bayern-de-munique-home-1-2023-24-adidas-torcedor-masculina/'),
(default, 'Inter Miami', '23/24', 'https://evoluasports.com.br/produtos/camisa-inter-miami-away-2-2024-25-adidas-torcedor-masculina/'),
(default, 'Italia', '23/24', 'https://evoluasports.com.br/produtos/camisa-italia-away-2-2023-adidas-torcedor-masculina/'),
(default, 'Japão', '23/24', 'https://evoluasports.com.br/produtos/camisa-japao-away-2-2023-adidas-torcedor-masculina/'),
(default, 'Juventus', '23/24', 'https://evoluasports.com.br/produtos/camisa-juventus-home-1-2023-24-adidas-torcedor-masculina/');


create table Usuario (
idUsuario int primary key auto_increment,
username varchar(45),
email varchar(45),
dtNasc date,
telfone char(11),
senha char(20),
fkPreferencia int,
	foreign key (fkPreferencia) references Preferencia (idPreferencia)
) auto_increment = 100;

insert into Usuario values
(default, 'bet', 'bettina@gmail.com', '2001-12-04', '998957733', '123', null);


create table Avaliacao (
idAvaliacao int auto_increment,
fkUsuario int,
primary key (idAvaliacao, fkUsuario),
nota1 int,
nota2 int,
nota3 int,
nota4 int,
nota5 int,
foreign key (fkUsuario) references Usuario(idUsuario)
) auto_increment = 1000; 

select * from Usuario;

select * from avaliacao;

select * from preferencia;

select TimeUsuario from preferencia
join Usuario on fkPreferencia = idPreferencia;

SELECT nota1, COUNT(*) AS quantidade
FROM Avaliacao
WHERE nota1 IN (1, 2, 3, 4, 5)
GROUP BY nota1;

SELECT nota2, COUNT(*) AS quantidade
FROM Avaliacao
WHERE nota2 IN (1, 2, 3, 4, 5)
GROUP BY nota2;
    
SELECT nota3, COUNT(*) AS quantidade
FROM Avaliacao
WHERE nota3 IN (1, 2, 3, 4, 5)
GROUP BY nota3;

SELECT nota4, COUNT(*) AS quantidade
FROM Avaliacao
WHERE nota4 IN (1, 2, 3, 4, 5)
GROUP BY nota4;

SELECT nota5, COUNT(*) AS quantidade
FROM Avaliacao
WHERE nota5 IN (1, 2, 3, 4, 5)
GROUP BY nota5;



