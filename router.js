//create the router

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('about');
});

router.get('/somestuff', (req, res) => {
    res.render('somestuff');
});


router.get('/jeanluc', (req, res) => {
    res.render('jeanluc');
});

router.get('/links', (req, res) => {
    res.render('links');
});

router.get('/choosebetween', (req, res) => {
    res.render('chooseBetween');
});

router.use((req, res) => {
    res.status(404).render('404');
});

module.exports = router;

