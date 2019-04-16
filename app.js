import express from "express";
import bodyParser from "body-parser";


const app = express();

const pgp = require("pg-promise")(/*options*/);



const db = pgp("postgres://postgres:sublimean@127.0.0.1:5432/postgres");
app.use (bodyParser.json ());
app.use (bodyParser.urlencoded ({extended: false}));

db.connect();