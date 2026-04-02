const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.login = async(req, res) => {
    try {

        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: "No such User exists" });
        }
        const password_match = await bcrypt.compare(password, user.password);
        if (!password_match) {
            return res.status(400).json({ message: "Wrong Password" });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        return res.status(200).json({ token, username: user.username });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};
exports.register = async(req, res) => {
    try {
        const { username, password } = req.body;
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "Username already taken" });
        }

        const newUser = new User({ username, password });
        await newUser.save();
        return res.status(201).json({ message: "User Registered Successfully" });
    } catch (error) {
        console.error("REGISTER ERROR:", error);
        res.status(500).json({ message: "Server Error" });
    }
};