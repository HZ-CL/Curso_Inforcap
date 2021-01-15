-- cada comando tiene que terminar con ; para ejecutarce

-- inicializar mysql
mysql -u root -p

-- visualizar bases de datos
show databases;

-- seleccionar una base de datos (entar a una base de dato)
--use (nombre de base de datos);
use libreria;

-- dentro de una base de datos mostramos la tablas
show tables;

-- crear nuevas bases de datos
create database libreria;

-- crear tablas simples dentro de la base de datos
create table libros (
    id int,
    nombre varchar(255),
    anno int --mariaDB no entiende letra Ñ
);

-- insercion en la tabla (para mas de una linea de datos a insertar, separar por coma , )
insert into libros (id, nombre, anno) values (1, "Historia de dos ciudades", 2015), (2, "Historia de dos ciudades", 2015), (3, "nuevo libro", 2020)

-- saber tipo y columnas de una tabla (para sabar los tipos de datos a insertar en la tabla)
describe libros; --describe "nombre_tabla"

-- sonsultar el registro de mi tabla
select *from libros; -- select *from "nombre-tabla"

-- eliminar datos/registro de una tabla (comando trabaja con primary key)
delete from libros where id = 1;

-- actualizar un registro
update libros --nombre de la tabla
set nombre = "libro viejo" --la columna
where id = 3; -- para seleccionar cual fila

-- para modificar/eliminar columnas
alter table libros change anno año int; -- modificar columnas

alter table libros rename as nuevo-nombre;

-- eliminar bases de datos


-- importar base de datos en terminal
mysql -u root -p < world.sql -- <nombre archivo a importar

-- unir dos valores de tablas(obtener un valor unido)
select concat ("varchar"," ", tabla.columna_1, " ", tabla.columna_2) from tablas; --poner espopacios para separar datos
select concat_ws("varchar", tabla.columna_1, tabla.columna_2) from tablas -- no necesita poner espacios para separar los datos

-- para obtener el largo del elemnto consulatdo
select length(tabla.columna_1) as largo_nombre from tablas;

-- para obtener los datos sin letras mayusculas
select lower(tabla.columna_1) as nombre_minusculas from tablas;

-- obtener la hora guardada en un campo datetime
select hour(tabla.columnadatatime) as hora from tablas

-- obtener nombre del dia segun la columna datetime
select DAYNAME(tabla.columnadatatime) as nombre_dia from tablas;

-- obtener el mes segun la columna datatime
select month(tabla.columnadatatime) as numero_mes from tablas;

-- obtener fecha y hora al ejecutar el comando
select now(tabla.columnadatatime) as hora_actual; -- no tiene from

--darle formato a las fechas y hora
