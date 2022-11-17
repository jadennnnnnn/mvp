require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`)
  .then(()=>{console.log('db connected')})

const PresetSchema = new mongoose.Schema({
  author: {type: String, required: true},
  name: {type: String, required: true},
  preset: {
    waveform: {type: Number, required: true},
    detune: {type: Number, required: true},
    frequency: {type: Number, required: true},
    q: {type: Number, required: true},
    attack: {type: Number, required: true},
    decay: {type: Number, required: true},
    sustain: {type: Number, required: true},
    release: {type: Number, required: true},
    time: {type: Number, required: true},
    feedback: {type: Number, required: true}
  },
  likes: {type: Number, default: 0}
}, { timestamps: true });

const Preset = new mongoose.model('Preset', PresetSchema);

// Preset.deleteMany({})
//   .then(()=>{console.log('reset')})
//   .catch(err=>{console.log(err)})

module.exports = Preset;