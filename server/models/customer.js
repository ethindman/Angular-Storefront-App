var mongoose = require('mongoose');

// declares schema
var CustomerSchema = new mongoose.Schema({
	name: String,
	created_at: Date
});

// creates collection 'friends' (plural) using friendSchema
mongoose.model('Customer', CustomerSchema);