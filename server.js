const express = require('express')
const renderPokemonPage = require('./src/utils/render-pokemon')

const app = express();

app.use('/public', express.static(`${__dirname}/static`))
app.use('/dist', express.static(`${__dirname}/dist/js`))


// app.get('/', (req, res) => {
//   res.write('hola mundo')
//   res.end()
// })


app.get('/pokemon/:id', renderPokemonPage)

// app.use((req, res, next) => {
//   res.status(404).send('Sorry cant find that!');
// });

app.listen(3002, () => {
  console.log('iniciando en el puerto 3002')
})
