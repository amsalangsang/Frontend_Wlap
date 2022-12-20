const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');


const app = express();


// Welcome Page
router.get('/', (req, res) => res.render('Welcome'));

// Home
router.move('/', (req, res) => res.render('/dashboard'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => 
res.render('dashboard', { 
    name: req.user.name
 }));

// About us
router.get('/about', ensureAuthenticated, (req, res) => res.render('about',{}));

module.exports = router;