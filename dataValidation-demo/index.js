const mongoose=require('mongoose')
const Joi = require('joi');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const express = require('express');
const { connect } = require('./routes/genres');
const app = express();

mongoose.connect('mongodb://localhost/vidly')
.then(()=> console.log('Connected to mongodb...'))
.catch(err => console.log('Can not connect to mongodb'))

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));