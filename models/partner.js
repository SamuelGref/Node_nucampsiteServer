const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("mongoose-currency").loadType(mongoose);

const partnerSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

const Partner = mongoose.model("Partner", partnerSchema);

module.exports = Partner;
