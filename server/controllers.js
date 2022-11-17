const Presets = require('./db.js');

module.exports = {
  searchPreset: (author, name, cb) => {
    Presets.find({author: {$regex: author, $options: 'i'}, name: {$regex: name, $options: 'i'}})
      .then((result) => {cb(null, result)})
      .catch((err) => {cb(err)});
  },
  postPreset: (preset, cb) => {
    Presets.create(preset)
      .then((result) => {cb(null, result)})
      .catch((err) => {cb(err)});
  },
  deletePreset: (id, cb) => {
    Presets.deleteOne({_id: id})
      .then((result) => {cb(null, result)})
      .catch((err) => {cb(err)});
  },
  likePreset: (id, cb) => {
    Presets.findOneAndUpdate({_id: id}, {$inc : {likes: 1}})
      .then((result) => {cb(null, result)})
      .catch((err) => {cb(err)});
  }
}