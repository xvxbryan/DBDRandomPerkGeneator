const mongoose = require('mongoose');
const { Schema } = mongoose;

const survivorPerkSchema = new Schema ({
    perkName: String,
    perkImage: String
});

mongoose.model('survivorperks', survivorPerkSchema);