const express = require('express');
const bodyparser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyparser.json());

leaderRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req, res, next) => {
    res.end("Getting all the leaderes");
})
.post((req, res, next) => {
    res.end("Will add the leader "+req.body.name+" with details "+req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end("Cannot USe PUT");
})
.delete((req, res, next) => {
    res.end("Deleting all the leaders");
});

leaderRouter.route('/:leaderId')
.get((req, res, next) => {
    res.end("Getting the details of the leader with the id: "+req.params.leaderId);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end("Cannot use POST!");
})
.put((req, res, next) => {
    res.write("updating the leader "+req.params.leaderId);
    res.end("\nWill update the leader: "+req.body.name+ ' with details '+req.body.description);
})
.delete((req, res, next) => {
    res.end("Deleting the leader with id: "+req.params.leaderId);
});


module.exports = leaderRouter;