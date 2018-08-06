const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  text: String,
  image: String,
  // comments: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Comment'
  // }]
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

module.exports = mongoose.model('Post', postSchema);