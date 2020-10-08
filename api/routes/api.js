var express = require("express");
var router = express.Router();
var Axios = require("axios");

const BeerDBUrl = 'https://sandbox-api.brewerydb.com/v2';


// Retrieving Beer information from DB
router.get('/beers', function(req, res, next) {
    Axios.get(
            `${BeerDBUrl}/beers?key=${process.env.APIKEY}`
        )
        .then((response) => {
            console.log("api respons", response.data.data);
            res.json({ beers: response.data.data });
        })
        .catch((err) => {
            console.log(`beers error: ${err}`);
            res.status(500);
            res.json({ err });
        });
});
// Retrieving Breweries information from DB

router.get('/breweries', function(req, res, next) {
    Axios.get(
            `${BeerDBUrl}/breweries?withLocations=Y&key=${process.env.APIKEY}&withLocations=Y`
        )
        .then((response) => {
            console.log("api response", response.data.data);
            res.json({ breweries: response.data.data });
        })
        .catch((err) => {
            console.log(`breweries error: ${err}`);
            res.status(500);
            res.json({ err });
        });
});


// router.get('/', function(req, res, next) {
//     res.send('API is working properly');
// });
module.exports = router;