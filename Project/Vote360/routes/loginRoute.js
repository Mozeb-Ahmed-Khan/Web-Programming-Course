
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('login(InputValidation)'); 
});

router.post('/', (req, res) => {
    const { username, password } = req.body; 
    res.send(`Submitted Username: ${username}, Password: ${password}`);
});

module.exports = router;
