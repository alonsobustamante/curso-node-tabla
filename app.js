const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors')


console.clear()

console.log(argv)

crearArchivo(argv.b, argv.l, argv.e)
    .then( nombreArchivo => console.log(colors.rainbow(nombreArchivo), 'creado'))
    .catch( err => console.log(err))