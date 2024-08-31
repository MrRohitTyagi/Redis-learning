// 👉 open linus terminal
// 👉 commands to start
`redis-server`;
`sudo service redis-server stop`; // if server is already running then kill the server

// 👉 CRUD commands for strings

1 - `GET [key]`; // ex : GET name
2 - `SET [key] [value]`; // ex : SET name rohit
2 - `SETEX [key] [Time in sec] [value]`; //Set values with expiry // ex : SET name rohit
3 - `DEL [key] `; // ex : DEL name

// 👉 More commands

1 - `flushall`; // flush entire DB
2 - `keys *`; // get all keys in DB

// 👉 Expiry
1 - `EXPIRE [key] [time in seconds]`; // ex : EXPIRE name 10

// 👉 ttl (Time to live)

1 - `ttl [key]`; // ex : ttl name
// rersponses in TTL  (-1 = no expiry) , (-2 = expired)

// 👉 CRUD FOR ARRAYS

1 - `LPUSH [key] [value]`; // pushed a value at 1st indeex in a array(list in redis) //ex : lpush names john
2 - `RPUSH [key] [value]`; // pushed a value at last index in a array(list in redis) //ex : rpush names joi
3 - `LRANGE [key] [start index] [end index]`; // get the list , ex : lrange names 0 -1(-1 means till last index)
4 - `LPOP [key]`; // pops an item from left(0th intex) //ex : LPOP names
4 - `RPOP [key]`; // pops an item from right(last intex) //ex : RPOP names

// 👉 Sets in redis
1 - `SADD [key] [value]`; // to add a set member // ex SADD games gta
1 - `SREM [key] [value to remove]`; // to rema  set member // ex SREM games gta
1 - `SMEMBERS [key]`; // to get a complete set //ex smembers games;
