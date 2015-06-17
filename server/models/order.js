var mongoose = require('mongoose');

// declares schema
var OrderSchema = new mongoose.Schema({
	name: String,
	product: String,
	quantity: Number,
	created_at: Date
});

// creates collection 'friends' (plural) using friendSchema
mongoose.model('Order', OrderSchema);