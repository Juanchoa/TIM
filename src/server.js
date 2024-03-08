const express = require('express');
const app = express();
const port = process.env.PORT || 1337;

app.use(express.json());
app.use(express.urlencoded({extended: false}));