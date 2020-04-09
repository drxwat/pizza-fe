const express = require('express');
const path = require('path');
const request = require('request');

const apiUrl = 'https://pizza-be.herokuapp.com';
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/pizza-fe'));

app.use('/api', function (req, res) {
    var url = apiUrl + req.url;
    req.pipe(request({ qs:req.query, uri: url })).pipe(res);
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/pizza-fe/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
