-- 1. ¿Qué consulta harías para obtener todos los países que hablan esloveno?
-- Tu consulta debe devolver el nombre del país, el idioma y el porcentaje de idioma.
-- Tu consulta debe organizar el resultado por porcentaje de idioma en orden descendente.

select * from languages where language like "%loven%";
select * from countries where id = 16;
select * from countries where id in (16, 96, 107, 200);

-- query join
select * from languages
inner join countries on languages.country_id = countries.id
where language = "Slovene"
;

select countries.name as pais, languages.language as lenguaje, languages.percentage as porcentaje
from languages
inner join countries
on languages.country_id = countries.id
where language = 'Slovene'
order by languages.percentage desc
;


-- 2. ¿Qué consulta ejecutarías para mostrar el número total de ciudades para cada país?
-- Su consulta debe devolver el nombre del país y el número total de ciudades.
-- Tu consulta debe organizar el resultado por el número de ciudades en orden descendente.
select * from cities;
describe cities;

select * from cities
inner join countries on cities.country_id = countries.id
;

select countries.name
from cities
inner join countries on cities.country_id = countries.id
group by countries.id
;

select count(cities.id), countries.name, countries.id
from cities
inner join countries on cities.country_id = countries.id
group by countries.id
order by count(cities.id) desc
;

-- se ordena segun la pocicion del dato en "order by"
select countries.name, countries.id, count(cities.id)
from cities
inner join countries on cities.country_id = countries.id
group by countries.id
order by 3 desc
;

-- se agrega un alias para trabajar en "order by"
select countries.name nombre_pais, count(cities.id) total_ciudades
from cities
inner join countries on cities.country_id = countries.id
group by countries.id
order by total_ciudades desc
;




-- 3. ¿Qué consulta harías para obtener todas las ciudades de México con una población de más de 500,000?
-- Tu consulta debe organizar el resultado por población en orden descendente. 
select * from countries where name like "%xico%"; -- id = 136

select cities.name, cities.population
from cities
inner join countries on cities.country_id = countries.id
where countries.id = 136
and cities.population > 500000
order by cities.population desc
;



-- 4. ¿Qué consulta ejecutarías para obtener todos los idiomas en cada país con un porcentaje superior al 89%? 
-- Tu consulta debe organizar el resultado por porcentaje en orden descendente.
describe languages; -- 
select countries.name pais, languages.language lenguaje, languages.percentage porcentaje
from languages
inner join countries on languages.country_id = countries.id
where languages.percentage >= 89
order by languages.percentage desc
;



-- 5. ¿Qué consulta haría para obtener todos los países con un área de superficie inferior a 501 y una población superior a 100,000? (2)

select countries.name as  nombre, countries.surface_area, countries.population
from countries
where countries.surface_area < 501
and countries.population >100000
;

select name nombre_pais , surface_area area , population poblacion from
countries
where surface_area < 501 and
population > 100000;



-- 6. ¿Qué consulta harías para obtener países con solo Monarquía Constitucional
--  con un capital superior a 200 y una esperanza de vida superior a 75 años?
select name, life_expectancy, government_form, capital 
from countries
where government_form = 'Constitutional Monarchy' and life_expectancy > 75 and capital > 200
order by name;



-- 7. ¿Qué consulta harías para obtener todas las ciudades de Argentina dentro del distrito de Buenos Aires y tener una población superior a 500,000?
-- La consulta debe devolver el nombre del país, el nombre de la ciudad, el distrito y la población. (2)
select * from countries;
select * from cities;
SELECT countries.name as nombre_pais, cities.name as nombre_ciudad, cities.district as distrito, cities.population as poblacion 
FROM cities 
INNER JOIN countries ON cities.country_id = countries.id 
WHERE  cities.district = 'Buenos Aires' AND cities.population > 500000 
;


-- 8. ¿Qué consulta harías para resumir el número de países en cada región? La consulta debe mostrar el nombre de la región y el número de países. 
-- Además, la consulta debe organizar el resultado por el número de países en orden descendente.

select countries.region, count(countries.region) total_paises
from countries
group by countries.region
order by total_paises desc
;























