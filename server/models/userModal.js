const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    testsGiven: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Test' 
    }],
    tutorialsCompleted: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tutorial' 
    }]
}, {
    timestamps: true
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;