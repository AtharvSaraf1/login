const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});
userSchema.pre('save', async function(next) {
    const user = this;
    if (!user.isModified('password')) return next();
    const hashed_Password = await bcrypt.hash(user.password, 12);
    user.password = hashed_Password;
    next();
});
module.exports = mongoose.model('User', userSchema);