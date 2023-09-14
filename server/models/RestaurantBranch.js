const mongoose = require('mongoose');
const { Schema } = mongoose;

const restaurantBranchSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	coordinates: {
		type: [Number],
		required: true,
	},
});

const RestaurantBranch = mongoose.model(
	'RestaurantBranch',
	restaurantBranchSchema
);

module.exports = RestaurantBranch;
