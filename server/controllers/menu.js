const MenuItem = require('../models/MenuItem');

const getAllMenuItems = async (res) => {
	try {
		const menuItems = await MenuItem.find();
		res.json(menuItems);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving menu items' });
	}
};

const getMenuItemById = async (req, res) => {
	const { id } = req.params;

	try {
		const menuItem = await MenuItem.findById(id);
		if (menuItem) {
			res.json(menuItem);
		} else {
			res.status(404).json({ message: 'Menu item not found' });
		}
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving menu item' });
	}
};

const createMenuItem = async (req, res) => {
	const { name, price } = req.body;

	try {
		const newMenuItem = new MenuItem({ name, price });
		await newMenuItem.save();

		res.status(201).json(newMenuItem);
	} catch (error) {
		res.status(500).json({ message: 'Error creating menu item' });
	}
};

const updateMenuItem = async (req, res) => {
	const { id } = req.params;
	const { name, price } = req.body;

	try {
		const updatedMenuItem = await MenuItem.findByIdAndUpdate(
			id,
			{ name, price },
			{ new: true }
		);

		if (updatedMenuItem) {
			res.json(updatedMenuItem);
		} else {
			res.status(404).json({ message: 'Menu item not found' });
		}
	} catch (error) {
		res.status(500).json({ message: 'Error updating menu item' });
	}
};

const deleteMenuItem = async (req, res) => {
	const { id } = req.params;

	try {
		const deletedMenuItem = await MenuItem.findByIdAndDelete(id);

		if (deletedMenuItem) {
			res.json(deletedMenuItem);
		} else {
			res.status(404).json({ message: 'Menu item not found' });
		}
	} catch (error) {
		res.status(500).json({ message: 'Error deleting menu item' });
	}
};

module.exports = {
	getAllMenuItems,
	getMenuItemById,
	createMenuItem,
	updateMenuItem,
	deleteMenuItem,
};
