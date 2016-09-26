import fs from 'fs';
import gzippo from 'gzippo';
import express from 'express';
import morgan from 'morgan';
import jsonServer from 'json-server';

const app = express(),
      logger = morgan('combined'),
      router = jsonServer.router('db.json'),
      port = Number(process.env.PORT || 3000);

var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'})
app.use(morgan('combined', {stream: accessLogStream}));
app.use(gzippo.staticGzip("" + __dirname + "/www"));
// You may want to mount JSON Server on a specific end-point, for example /api
// Optiona,l except if you want to have JSON Server defaults
// server.use('/api', jsonServer.defaults()); 
app.use('/api', jsonServer.router('db.json'));
app.listen(port);