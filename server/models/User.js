const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	fullName: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		enum: ['Admin', 'User'],
		default: 'User',
	},
});

const User = mongoose.model('User', userSchema);

module.exports = User;
