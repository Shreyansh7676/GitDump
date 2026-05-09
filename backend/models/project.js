const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    longDescription: {
        type: String,
        required: true
    },
    liveurl: {
        type: String
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    gitUrl: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    techStack: {
        type: [String]
    },
    monthlyRevenue: {
        type: Number
    },
    activeUsers: {
        type: Number
    },
    uptime: {
        type: Number
    }

}, { timestamps: true })


const Project = mongoose.model("Project", projectSchema);
module.exports = Project