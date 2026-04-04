const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const app = express();
app.use(cors({
    origin: 'https://login-c0wa.onrender.com', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express.json());
app.use('/api/auth', authRoutes);

module.exports = app;
