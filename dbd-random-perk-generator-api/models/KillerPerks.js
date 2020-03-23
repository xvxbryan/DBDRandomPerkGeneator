const mongoose = require('mongoose');
const { Schema } = mongoose;

const killerPerkSchema = new Schema ({
    perkName: String,
    perkImage: String
});

mongoose.model('killerperks', killerPerkSchema);