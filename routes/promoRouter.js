const express = require('express');
const bodyparser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyparser.json());

promoRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req, res, next) => {
    res.end("Getting all the promotions");
})
.post((req, res, next) => {
    res.end("Will add the promotion name "+req.body.name+" with details "+req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end("Cannot USe PUT");
})
.delete((req, res, next) => {
    res.end("Deleting all the promotions");
});

promoRouter.route('/:promoId')
.get((req, res, next) => {
    res.end("Getting the details of the promo with the id: "+req.params.promoId);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end("Cannot use POST!");
})
.put((req, res, next) => {
    res.write("updating the promo "+req.params.promoId);
    res.end("\nWill update the promo: "+req.body.name+ ' with details '+req.body.description);
})
.delete((req, res, next) => {
    res.end("Deleting the promo with id: "+req.params.promoId);
});


module.exports = promoRouter;