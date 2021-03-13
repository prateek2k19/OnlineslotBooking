const mongoose = require('mongoose');

var shops = mongoose.model('shops', {
    shop_id:{type: Number},
    name: { type: String },
    Rating: { type: Number },
    reserved_slots:{type: Array}
   
});

module.exports = { shops };