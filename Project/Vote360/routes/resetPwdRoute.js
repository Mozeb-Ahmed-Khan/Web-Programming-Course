
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('forget(InputValidation)'); 
});

router.post('/submit', (req, res) => {
    const email = req.body.email;

    res.send({ email: email }); 
});

module.exports = router;
