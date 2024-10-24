const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    availability: { type: String },
    provider: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

const Service = mongoose.model('Service', serviceSchema);
module.exports = Service;
