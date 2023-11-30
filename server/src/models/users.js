const { Schema, model } = require("mongoose");

const  UserSchema =  new Schema ({
    nombre: String,
    email: String,
    password: String,
    Cellphone: Number,
}, {
    timestamps: true
});

module.exports = model ('user', UserSchema);

