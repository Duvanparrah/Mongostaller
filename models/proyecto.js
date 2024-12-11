const mongoose = require('mongoose');

const ComidaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  ingredientes: { type: [String], required: true },
  categoria: { type: String, enum: ['desayuno', 'almuerzo', 'cena', 'postre'], required: true },
  tiempoPreparacion: { type: Number, required: true }, //
  instrucciones: { type: String, required: true }
});

module.exports = mongoose.model('Comida', ComidaSchema);