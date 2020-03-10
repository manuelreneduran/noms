const express = require('express');
const parser = require("body-parser");
const path = require('path');
const app = express();
const axios = require('axios');


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Parse all requests
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));


app.post('/yelp', (req, res) => {
  const loc = req.body.loc;
  const cat = req.body.cat;
  axios.get(`https://api.yelp.com/v3/businesses/search?location=${loc}`, {
    headers: {
      Authorization: `Bearer ${process.env.YELP_API_KEY}`
  },
    params: {
    term: `${cat}`,
    limi: 50
  }
  })
  .then((response) => {
      if (response.status !== 200) {
        res.status(response.status);
      } else {
        console.log("works");
        res.status(200).send(response.data);
      }
    })
  .catch(err => {
  })
});



// Serve public folder
app.use(express.static(path.join(__dirname, '../public')));

module.exports = app;
