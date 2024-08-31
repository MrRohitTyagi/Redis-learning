import Redis from "ioredis";

const REDIS_URL = process.env.REDIS_URL;
// console.log("REDIS_URL", REDIS_URL);

const client = new Redis(REDIS_URL);

const key = "foo";

async function getVal() {
  const get = await client.get(key);
  console.log(get);
}

async function init() {
  await client.set(key, "bar123");

  await getVal();
}
init().catch((e) => {
  console.log("e", e);
});
