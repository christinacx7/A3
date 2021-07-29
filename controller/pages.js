
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const teaProducts = require('../models/teaProducts');
const coffeeProducts = require('../models/coffeeProducts');
const eatsProducts = require('../models/eatsProducts');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
}); 

router.get('/tea', (req, res) => {
    teaProducts.find()
    .then(results => {
        res.render('tea', {prod: results, pageTitle: 'Tea'});
    })
    .catch(err => console.log(err));  
});

router.get('/tea/:prodId', (req, res) => {
    teaProducts.findById(req.params.prodId)
        .then(result => {
            res.render('tea-details', {prod: result, pageTitle: 'TEA'});
        })
        .catch(err => console.log(err));  
});

router.get('/coffee', (req, res) => {
    coffeeProducts.find()
    .then(results => {
        res.render('coffee', {products: results, pageTitle: 'Coffee'});
    })
    .catch(err => console.log(err));  
}); 

router.get('/eats', (req, res) => {
    eatsProducts.find()
    .then(results => {
        res.render('eats', {products: results, pageTitle: 'Eats'});
    })
    .catch(err => console.log(err));  
}); 

router.get('/family/:prodId', (req, res) => {
    ct2products.findById(req.params.prodId)
        .then(result => {
            res.render('family-details', {prod: result, pageTitle: 'One of the Family Movies'});
        })
        .catch(err => console.log(err));  
});

router.get('/family', (req, res) => {
    //res.render('family');
    ct2products.find()
    .then(results => {
        res.render('family', {products: results, pageTitle: 'Family Movies'});
    })
    .catch(err => console.log(err));  
});

router.get('/contactUs', (req, res) => {
    res.render('contactUs');
});

module.exports = router;