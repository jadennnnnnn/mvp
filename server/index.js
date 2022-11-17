require('dotenv').config();

const express = require('express');
const morgan = require('morgan')
const controllers = require('./controllers.js');

const app = express();

app.use(express.json());
app.use(morgan('combined'))


app.use(express.static("build"));

app.get('/presets', (req, res) => {
  controllers.searchPreset(req.query.author, req.query.name, (err, result) => {
    if (err) {
      console.log(err)
      res.status(400).send(err)
    } else {
      res.send(result)
    }
  })
})

app.post('/presets', (req, res) => {
  controllers.postPreset(req.body, (err, result) => {
    if (err) {
      console.log(err)
      res.status(400).send(err)
    } else {
      res.send(result)
    }
  })
})

app.delete('/presets/:id', (req, res) => {
  controllers.deletePreset(req.params.id, (err, result) => {
    if (err) {
      console.log(err)
      res.status(404).send(err)
    } else {
      res.send(result)
    }
  })
})

app.put('/presets/:id', (req, res) => {
  controllers.likePreset(req.params.id, (err, result) => {
    if (err) {
      console.log(err)
      res.status(204).send(err)
    } else {
      res.send(result)
    }
  })
})

const PORT = process.env.PORT;

app.listen(PORT);
