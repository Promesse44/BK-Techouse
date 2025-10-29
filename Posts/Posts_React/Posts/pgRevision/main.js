// const {Client}= require('pg')
import { Client } from "pg";
// import express from express;
// const { con } = Client;


const con = new Client({
  host:"localhost",
  user: "postgres",
  port: 5432,
  password : "2014",
  database: "Demopost"
}) 

con.connect().then(()=> console.log('connected...'))






