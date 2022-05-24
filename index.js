const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const orderRoutes = require('./routes/order.routes');
const cors = require('cors');
const app = express();

//Middleware
app.use(express.json());
app.use(cors());
app.use('/api', orderRoutes);

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to Hair Room API!');
})

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

app.listen(process.env.PORT || 5000, () => console.log('Server is running on port: ', process.env.PORT));
