
// imports
const express = require('express');
require('./config/connect');
const administrateurapi = require('./routes/administrateur');
const agentapi = require('./routes/agent');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use('/administrateur', administrateurapi);
app.use('/agent', agentapi);
app.use('/getimage', express.static('./profils'));

// Start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});