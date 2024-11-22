const { default: axios } = require("axios");
const express = require("express");
const client = require('./client')

const app = express();

app.get("/", async (req, res) => {
    try {
      const cachedData = await client.call("JSON.GET", "todo", "$");  
      if (cachedData) {
        console.log("Data retrieved from Redis");
        return res.json(JSON.parse(cachedData));  
      }
  
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos");
      console.log("Data retrieved from API");
  
      await client.call("JSON.SET", "todo", "$", JSON.stringify(data));
      await client.expire('todo', 30)
  
      return res.json(data);
    } catch (err) {
      console.error("Error:", err);
      res.status(500).json({ message: "An error occurred while processing the request." });
    }
  });
app.listen(9000, ()=>{
    console.log('startd server');
})