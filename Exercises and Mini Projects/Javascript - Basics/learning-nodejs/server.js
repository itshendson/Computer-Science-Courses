const express = require('express');
const path = require('path');


const app = express();

// Middleware
const logger = (req, res, next) => {
    console.log(`The request endpoint is: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

// Init middleware
app.use(logger);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API Routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));