const express = require('express');
const app = express();
const port = 3000;
const adminController = require('./controllers/adminController');
const shopController = require('./controllers/shopController');
const adminRoutes = require('./routes/adminRoutes');
const shopRoutes = require('./routes/shopRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors( { origin: true, credentials: true } ));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(adminRoutes);
app.use(shopRoutes);


app.listen(port);
console.log(`listening on port ${port}`)

module.exports = app;