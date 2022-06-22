const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const orderController = require('../api-hairroom/controllers/order.controller')
const userController = require('../api-hairroom/controllers/user.controller')
const cors = require('cors');
const app = express();
const { checkApiKey, checkAdminRole, checkRoles } = require('./middlewares/auth.handler');
const passport = require('passport');
const { session } = require('passport');
const port = process.env.PORT; 



//Middleware
app.use(express.json());
app.use(cors());
require('./utils/auth/index');
app.use('/api', orderController);
app.use('/api/auth', userController);

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to Hair Room API!');
})

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

app.listen(process.env.PORT || 5000, () => console.log('Server is running on port: ', process.env.PORT));
