const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  name: String,
  description: String,
  images: {
    type: [String],
    default: "https://farm4.staticflickr.com/3906/14371649195_1f16c4b08e.jpg"
  }
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

module.exports = mongoose.model('Service', serviceSchema);