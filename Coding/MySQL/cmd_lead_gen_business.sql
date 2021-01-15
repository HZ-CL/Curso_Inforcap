use lead_gen_business;

select * from clients;

insert into clients (id, first_name, last_name, email, joined_datetime) values (11, "steve", "dolar", "stevedlr@village88.com", now());

select * from clients;

update clients
set email = "stevedlr@live.com"
where id = 11;

select * from clients
where id = 11;

delete from clients 
where id = 11;
