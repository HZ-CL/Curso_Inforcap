use twitter;
select * from users;
update twitter.users set first_name = "trobe" where id = 1;
update twitter.users set first_name = "Kobe" where id = 1;

select *
from users
left join tweets
on users.id = tweets.user_id
where user_id = 1;

select tweets.tweet as Kobe_tweets
from users
left join tweets
on users.id = tweets.user_id
where user_id = 1;

select first_name, tweet
from users
left join faves on users.id = faves.user_id
left join tweets on faves.tweet_id = tweets.id
where users.id = 2;

SELECT users.first_name as followed, users2.first_name as follower
FROM users
LEFT JOIN follows
ON users.id = follows.followed_id
LEFT JOIN users as users2
ON users2.id = follows.follower_id
WHERE users.id = 1;

-- usuarios que no siguen al usuario de id 2
SELECT *
FROM users
WHERE users.id NOT IN (
SELECT follower_id
FROM follows
WHERE followed_id = 2
) AND users.id != 2;

select * from follows;

SELECT users.first_name as user, COUNT(users2.first_name) as follower_count
FROM users
LEFT JOIN follows
ON users.id = follows.followed_id
LEFT JOIN users as users2
ON users2.id = follows.follower_id
WHERE users.id = 1
GROUP BY users.id
;

-- el resulktado de left join muestra todos los datos de la tabla left incluido los que 
-- no tienen coincidencia en la otra tabla
SELECT first_name, tweet
FROM users
LEFT JOIN tweets
ON users.id = tweets.user_id
;

-- el resulatdo de join solo muestra los valopres coincidentes entre las tablas.
SELECT first_name, tweet
FROM users
JOIN tweets
ON users.id = tweets.user_id
;










