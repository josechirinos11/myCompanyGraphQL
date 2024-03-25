const mongoose = require('mongoose');

const EmpresasSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    imagen: {
        type: String,
        required: false,
        trim: true
    },
    identificacion: {
        type: String,
        required: false,
        trim: true
    },
    correo: {
        type: String,
        required: false,
        trim: true,
        unique: true,
        lowercase: true
    },
    telefono: {
        type: String,
        required: false,
        trim: true
    },
    direccion: {
        type: String,
        required: false,
        trim: true
    },
   
    registro: {
        type: Date,
        default: Date.now()
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
});

module.exports = mongoose.model('Empresa', EmpresasSchema);
