const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
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
    descripcion: {
        type: String,
        required: false,
        trim: true
    },
    cantidad: {
        type: String,
        required: true,
        trim: true
    },
    
    registro: {
        type: Date,
        default: Date.now()
    },
    empresa: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Empresa'
    },
});

module.exports = mongoose.model('Producto', ProductoSchema);
