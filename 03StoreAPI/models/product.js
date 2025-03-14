const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required field"],
    maxLength: 20,
  },
  price: {
    type: Number,
    required: [true, "Price is required field"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,

  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company:{
    type:String,
    enum:{
        values:['ikea' , 'liddy' , 'caressa' , 'marcos'],
        message:'{VALUE} is not supported'
    }
  }
});

module.exports = mongoose.model('Products' ,ProductSchema )
