const mongoose = require("mongoose")

const ComplaintSchema = new mongoose.Schema({
  // userId: ObjectId,
  category: String,
  description: String,
  urgency: String,
  contact: {
    name: String,
    email: String,
    phone: String,
  },
  status: {
    type: String,
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

})
const ComplaintModel = mongoose.model("complaints", ComplaintSchema)
module.exports = ComplaintModel