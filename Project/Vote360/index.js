const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Set the port for your server

// Import route files
const landingRoute = require('./routes/landingRoute');
const loginRoute = require('./routes/loginRoute');
const signupRoute = require('./routes/signupRoute');
const verificationRoute = require('./routes/verificationRoute');
const resetPwdRoute = require('./routes/resetPwdRoute');
const verificationSentRoute = require('./routes/verificationSentRoute');
// Add more routes as needed

// Set up middleware to parse incoming JSON data
app.use(express.json());
// Set up middleware to parse incoming URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Set up views directory and view engine
app.set('views', './views');
app.set('view engine', 'html'); // Assuming you're using EJS as the template engine

// Link routes to the server
app.use('/', landingRoute);
app.use('/login', loginRoute);
app.use('/signup', signupRoute);
app.use('/forget', resetPwdRoute);
app.use('/verify', verificationRoute);
app.use('/verifySent', verificationSentRoute);
// Add more routes as needed

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
