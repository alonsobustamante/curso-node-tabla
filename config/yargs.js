const argv = require('yargs')
                .options({
                    'b' : {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla de multiplicar'
                    },
                    'l' : {
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'Muestra la tabla en consola'
                    },
                    'e' : {
                        alias: 'end',
                        type: 'number',
                        default: 10,
                        describe: 'Limite de la tabla'
                    } 
                })
                .check((argv, options) => {
                   if(isNaN(argv.b)){
                        throw 'la base tiene que ser un numero'
                   }
                   return true
                })
                .argv

module.exports = argv