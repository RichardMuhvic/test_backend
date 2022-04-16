const express = require('express');
const mongoose = require('mongoose');
const thing = require('./model/thing');
const app = express();



mongoose.connect('mongodb+srv://Richard:love1988@cluster0.0le2j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.post('/api/products', (req, res, next) => {
    delete req.body._id;
    const products =  new products [{
        name: String,
        description: String,
        price: Number,
        inStock: Boolean,
    }];
    thing.save()
        .then(product => res.status(200).json({ product }))
        .catch(error =>  res.status(400).json({ error }))
    next();
});

app.get('/api/products', (req, res, next) => {
    res.status(200).json(products);
    next();
});

app.get('/api/products/:id', (req, res, next) => {
    const productID = {
        _id: String,
    };
    next();
});


app.put('/api/products/:id', (req, res, next) => {
    Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Modified !'}))
      .catch(error => res.status(400).json({ error }));
});

app.delete('/api/products:id', (req, res, next) => {
    Thing.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Deleted !'}))
      .catch(error => res.status(400).json({ error }));
  });

module.exports = app;