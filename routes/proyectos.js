const express = require('express');
const router = express.Router();
const Comida = require('../models/proyecto');

// Crear una comida
router.post('/', async (req, res) => {
  try {
    const nuevaComida = new Comida(req.body);
    const comidaGuardada = await nuevaComida.save();
    res.json(comidaGuardada);
  } catch (error) {
    res.json({ error: error.message });
  }
});

// Obtener todas las comidas
router.get('/', async (req, res) => {
  try {
    const comidas = await Comida.find();
    res.json(comidas);
  } catch (error) {
    res.json({ error: error.message });
  }
});

// Obtener una comida por ID
router.get('/:id', async (req, res) => {
  try {
    const comida = await Comida.findById(req.params.id);
    if (!comida) return res.json({ error: 'Comida no encontrada' });
    res.json(comida);
  } catch (error) {
    res.json({ error: error.message });
  }
});

// Actualizar una comida
router.put('/:id', async (req, res) => {
  try {
    const comidaActualizada = await Comida.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!comidaActualizada) return res.json({ error: 'Comida no encontrada' });
    res.json(comidaActualizada);
  } catch (error) {
    res.json({ error: error.message });
  }
});

// Eliminar una comida
router.delete('/:id', async (req, res) => {
  try {
    const comidaEliminada = await Comida.findByIdAndDelete(req.params.id);
    if (!comidaEliminada) return res.json({ error: 'Comida no encontrada' });
    res.json({ message: 'Comida eliminada' });
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = router;