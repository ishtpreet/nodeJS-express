const express = require('express');
const bodyparser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyparser.json());

dishRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req, res, next) => {
    res.end("Getting all the dishes");
})
.post((req, res, next) => {
    res.end("Will add the dish "+req.body.name+" with details "+req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end("Cannot USe PUT");
})
.delete((req, res, next) => {
    res.end("Deleting all the dishes");
});

dishRouter.route('/:dishId')
.get((req, res, next) => {
    res.end("Getting the details of the dish with the id: "+req.params.dishId);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end("Cannot use POST!");
})
.put((req, res, next) => {
    res.write("updating the dish "+req.params.dishId);
    res.end("\nWill update the dish: "+req.body.name+ ' with details '+req.body.description);
})
.delete((req, res, next) => {
    res.end("Deleting the dish with id: "+req.params.dishId);
});


module.exports = dishRouter;