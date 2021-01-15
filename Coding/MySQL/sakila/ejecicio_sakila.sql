use sakila;

-- 1. ¿Qué consulta ejecutarías para obtener todos los clientes dentro de city_id = 312?
-- Su consulta debe devolver el nombre, apellido, correo electrónico y dirección del cliente.
select * from customer;
select * from address;
select * 
from address
where city_id = 312;

select concat(customer.first_name," ", customer.last_name) as "Nombre Cliente", customer.email as Email, address.address as Direccion, address.city_id as id
from address
inner join customer on customer.address_id = address.address_id
where address.city_id = 312
;

-- 2. ¿Qué consulta harías para obtener todas las películas de comedia?
-- Su consulta debe devolver el título de la película, la descripción, el año de estreno, la calificación, las características especiales y el género (categoría).
select * from category; -- category.category_id = 5
select * from film;
select * from film_category;

select film.title as Titulo, film.description as Descripcion, film.release_year as Estreno, film.rating as Clasificacion, film.special_features as Caracteristicas_Especiales, category.name as Genero
from film_category
inner join film on film_category.film_id = film.film_id
inner join category on film_category.category_id = category.category_id
where category.category_id = 5;

-- 3. ¿Qué consulta harías para obtener todas las películas unidas por actor_id = 5?
-- Su consulta debe devolver la identificación del actor, el nombre del actor, el título de la película, la descripción y el año de lanzamiento.
select * from actor where actor.actor_id=5;
select * from film_actor where film_actor.actor_id = 5;

select actor.actor_id as id, concat(actor.first_name, " ", actor.last_name) as Nombre, film.title as Titulo, film.description as Descripcion, film.release_year as Estreno
from film_actor
inner join actor on film_actor.actor_id = actor.actor_id
inner join film on film_actor.film_id = film.film_id
where actor.actor_id = 5
;

-- 4. ¿Qué consulta ejecutaría para obtener todos los clientes en store_id = 1 y dentro de estas ciudades (1, 42, 312 y 459)?
-- Su consulta debe devolver el nombre, apellido, correo electrónico y dirección del cliente.
select * from store;
select * from address where address.city_id in (1, 42, 312, 459) ;
select * from customer; -- store_id
select * from city;

select concat(customer.first_name, " ", customer.last_name) as Nombre_Cliente, customer.email as Email, address.address as Direccion
from customer
inner join store on customer.store_id = store.store_id
inner join address on customer.address_id = address.address_id
where store.store_id = 1 and address.city_id in (1, 42, 312, 459)
;


-- 5. ¿Qué consulta realizarías para obtener todas las películas con una "calificación = G" y "característica especial = detrás de escena", unidas por actor_id = 15?
-- Su consulta debe devolver el título de la película, la descripción, el año de lanzamiento, la calificación y la función especial.
-- Sugerencia: puede usar la función LIKE para obtener la parte 'detrás de escena'.
select * from film where rating = 'G' and special_features like '%Behind the Scenes%' ; -- title/description/release_year/rating/special_features
select * from actor where actor_id = 15;
select * from film_actor;

select film.title as Titulo, film.description as Descripcion, film.release_year as año_lanza, film.rating as calificación, film.special_features as funcion_espe
from film_actor
inner join actor on film_actor.actor_id = actor.actor_id
inner join film on film_actor.film_id = film.film_id
where film.rating = 'G' and film.special_features like '%Behind the Scenes%' and actor.actor_id = 15;


-- 6. ¿Qué consulta harías para obtener todos los actores que se unieron en el film_id = 369? Su consulta debe devolver film_id, title, actor_id y actor_name.

select * from film where film_id = 369;

select film.film_id as film_id, film.title titulo, actor.actor_id, actor.first_name nombre_actor
from film_actor
inner join actor on film_actor.actor_id = actor.actor_id
inner join film on film_actor.film_id = film.film_id
where film.film_id = 369
;


-- 7. ¿Qué consulta harías para obtener todas las películas dramáticas con una tarifa de alquiler de 2.99?
-- Su consulta debe devolver el título de la película, la descripción, el año de estreno, la calificación,
-- las características especiales y el género (categoría).

select * from payment;
select * from rental;
select * from inventory;

select film.title as titulo, film.description as descripcion, film.release_year as año_estreno, film.rating as calificacion, film.special_features as carac_esp, category.name as genero, film.rental_rate as alquiler
from film_category
inner join category on film_category.category_id = category.category_id
inner join film on film.film_id = film_category.film_id
where category.name = 'Drama' and film.rental_rate = 2.99;


-- 8. ¿Qué consulta harías para obtener todas las películas de acción a las que se une SANDRA KILMER? 
-- Su consulta debe devolver el título de la película, la descripción, el año de estreno, la calificación, 
-- las características especiales, el género (categoría) y el nombre y apellido del actor.
select * from actor where first_name like "%dra";-- actor_id = 23
select * from film_actor where actor_id = 23;
select * from film;
select * from category; -- categoy_id = 1

-- tablas a consultar: film, category, actor
select film.title as Titulo, film.description as Descripcion, film.release_year as Estreno, film.rating as clasificacion, film.special_features as Caracteristicas_Especiales, category.name, concat(actor.first_name, " ", actor.last_name) as Nombre_Actor
from film
inner join film_actor on film.film_id = film_actor.film_id
inner join actor on film_actor.actor_id = actor.actor_id
inner join film_category on film.film_id = film_category.film_id
inner join category on film_category.category_id = category.category_id
where actor.actor_id = 23 and category.category_id = 1
;










