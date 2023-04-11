const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true // Campo obrigatorio
    },
    phone:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    // Subdocumento incorporado
    address:{
        street:{
            type: String,
            required: true
        },
        number:{
            type: String,
            required: true
        },
        complement:{
            type: String,
            required: false
        },
        district:{
            type: String,
            required: true
        },
        city:{
            type: String,
            required: true
        },
        state:{
            type: String,
            required: true
        },
        zipe_code: {
            type: String,
            required: false
        }
    }
})

/**
 * Parametros de mongoose.model:
 * 1º - Nome da model, para uso interno (Convenção: primeira letra maiuscula e singular)
 * 2º - Relação de campos do esquema(constante schema)
 * 3º - Nome da collection no banco de dados (concenção: Mesmo nome do model, mais com letra maiuscula e no plural)
 */

module.exports = mongoose.model('Supplier', schema, 'suppliers')