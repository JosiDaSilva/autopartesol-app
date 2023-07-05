const express = require("express");
const cors = require("cors");
const mysql= require("mysql");
const products = require("./products");

const app = express();

app.use(express.json());
app.use(cors());
const db =mysql.createConnection({
  host:"190.228.29.61",
  user:"kalel2016",
  password:"Kalel2016",
  database:"ausol"
})
app.get("/", (req, res) => {
  res.send("Welcome our to online shop API...");
});

app.get("/products", (req, res) => {
  res.send(products);
});



app.listen(8800, ()=>{
  console.log("Connected to backend")
})
