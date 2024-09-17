
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('verification_email_sent'); 
});

module.exports = router;
