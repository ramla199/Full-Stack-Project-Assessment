const mongoose = require('mongoose');
const schema = mongoose.Schema;

const videoSchema = new schema({
    vidId: Number,

    "title": {
        type: String,
        required: true
    },
    "embedId": {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
})

const videoModels = mongoose.model('video', videoSchema);

module.exports = videoModels;