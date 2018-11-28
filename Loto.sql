Create Database Loto

use Loto

Create Table Users(
UserId int identity (1,1) NOT NULL,
UserName varchar (30) NOT NULL,
UserPassword varchar (30) NOT NULL,
Constraint PK_User Primary Key (UserId),
)
go


Create table TypeGame(
TypeId int identity (1,1) Primary Key not null,
TypeName varchar (30) not null,
)
go

create table Pega3(
Pega3Id int identity (1,1) Primary Key not null,
Peg3Num1 varchar (2) not null,
Peg3Num2 varchar (2) not null,
Peg3Num3 varchar (2) not null,
fecha smalldatetime,
TypeId int Foreign Key references TypeGame(TypeId)
)
go

Create table Simbolos(
SimboloId int identity (1,1) Primary Key not null,
SimboloNumero varchar(2) not null,
Simbolo varchar (30) not null,
)
go 

Create Table Diaria(
DiariaId int identity(1,1) Primary Key not null,
DiariaNum varchar (2) not null,
fecha smalldatetime,
TypeId int Foreign key references TypeGame(TypeId),
SimboloId int Foreign Key references Simbolos(SimboloId)
)
Create table Game(
GameId int identity (1,1) Primary Key not null,
UserId int Foreign key references Users(UserId),
TypeId int Foreign key references TypeGame(TypeId) 
)
go