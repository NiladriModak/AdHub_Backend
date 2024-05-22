// const mongoose = require("mongoose");
// const orderSchema = new mongoose.Schema({
//   orderItems: [
//     {
//       name: {
//         type: String,
//         required: true,
//       },
//       link: {
//         type: String,
//         required: true,
//       },
//       image: {
//         type: String,
//         required: true,
//       },
//       product: {
//         type: mongoose.Schema.ObjectId,
//         ref: "Product",
//         required: true,
//       },
//     },
//   ],
//   user: {
//     type: mongoose.Schema.ObjectId,
//     ref: "User",
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     required: true,
//     default: Date.now(),
//   },
// });

// module.exports = mongoose.model("Order", orderSchema);
