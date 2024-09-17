
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('signup(InputValidation)'); 
});

router.post('/submit', (req, res) => {
    const formData = req.body;
    const username = req.body.username;
    const password = req.body.password;
    const gender = req.body.gender;
    const age = req.body.age;
    const birthdate = req.body.birthdate;
    const phone = req.body.phone;
    const email = req.body.email;
    const zipcode = req.body.zipcode;
    const terms = req.body.terms;
    const subscribe = req.body.subscribe;

    const responseData = {
        username: username,
        password: password,
        gender: gender,
        age: age,
        birthdate: birthdate,
        phone: phone,
        email: email,
        zipcode: zipcode,
        terms: terms,
        subscribe: subscribe
    };

    res.send(responseData); 
});

module.exports = router;
