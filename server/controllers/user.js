const User = require('../models/User');

const getAllUsers = async (res) => {
	try {
		const users = await User.find();
		res.json(users);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving users' });
	}
};

const getUserById = async (req, res) => {
	const { id } = req.params;

	try {
		const user = await User.findById(id);
		if (user) {
			res.json(user);
		} else {
			res.status(404).json({ message: 'User not found' });
		}
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving user' });
	}
};

const createUser = async (req, res) => {
	const { name, email } = req.body;

	try {
		const newUser = new User({ name, email });
		await newUser.save();

		res.status(201).json(newUser);
	} catch (error) {
		res.status(500).json({ message: 'Error creating user' });
	}
};

const updateUser = async (req, res) => {
	const { id } = req.params;
	const { name, email } = req.body;

	try {
		const updatedUser = await User.findByIdAndUpdate(
			id,
			{ name, email },
			{ new: true }
		);

		if (updatedUser) {
			res.json(updatedUser);
		} else {
			res.status(404).json({ message: 'User not found' });
		}
	} catch (error) {
		res.status(500).json({ message: 'Error updating user' });
	}
};

const deleteUser = async (req, res) => {
	const { id } = req.params;

	try {
		const deletedUser = await User.findByIdAndDelete(id);

		if (deletedUser) {
			res.json(deletedUser);
		} else {
			res.status(404).json({ message: 'User not found' });
		}
	} catch (error) {
		res.status(500).json({ message: 'Error deleting user' });
	}
};

module.exports = {
	getAllUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
};
