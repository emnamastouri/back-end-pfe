
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
app.use('/getagentimage', express.static('./profils/agent'));
app.use('/getadminimage', express.static('./profils/administrateur'));

// Start server
app.listen(3100, () => {
    console.log('Server is running on port 3100');
});