const express = require("express");
const axios = require("axios");
const Redis = require("redis");
const app = express();

const redisClient = Redis.createClient();

app.get("/photos/", async (req, res) => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/photos"
  );
  res.send(data);
});

app.get("/photos/:id", async (req, res) => {
  const { id } = req.params;
  redisClient.set(`photo${id}`,'hello');
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/photos/${id}`
    );
    res.send(data);
  } catch (error) {
    res.status(500).send(id);
    console.log("error", error);
  }
});

app.listen(5000, () => {
  console.log("server running at port 5000");
});
