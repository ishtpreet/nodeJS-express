const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

hostname = 'localhost';
port = 3000;

const app = express();
app.use(bodyparser.json());
app.use(morgan('dev'));
app.use('/dishes' , dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);
app.use(express.static(__dirname+'/public'));
app.use((req, res, next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end("<html><h1>First time using express.</h1></html>");
} );

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running on http://${hostname}:${port}`);
});