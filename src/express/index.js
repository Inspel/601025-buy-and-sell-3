'use strict';

const express = require(`express`);
const homeRoute = require('./routes/homeRoute');
const searchRoutes = require(`./routes/search`);
const myRoutes = require(`./routes/my`);
const loginRoutes = require(`./routes/login`);
const offersRoutes = require(`./routes/offers`);
const registerRoutes = require(`./routes/register`);

const app = express();
const port = 8080;

app.use(`/`, homeRoute);
app.use(`/login`, loginRoutes);
app.use(`/my`, myRoutes);
app.use(`/offers`, offersRoutes);
app.use(`/register`, registerRoutes);
app.use(`/search`, searchRoutes);


app.listen(port);
