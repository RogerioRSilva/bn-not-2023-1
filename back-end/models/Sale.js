const mongoose = require('mongoose')

const schema = mongoose.Schema({
    datetime:{
        type: Date,
        required: true,
        default: Date.now()  // Data/Hora da gravação
    },
    number:{
        type: Number,
        required: true
    },
    customer:{
        type: mongoose.ObjectId, // Tipo para chave estrangeira
        ref: 'Customer',    // Model estrangeiro
        required: true
    }

})

/**
 * Parametros de mongoose.model:
 * 1º - Nome da model, para uso interno (Convenção: primeira letra maiuscula e singular)
 * 2º - Relação de campos do esquema(constante schema)
 * 3º - Nome da collection no banco de dados (concenção: Mesmo nome do model, mais com letra maiuscula e no plural)
 */

module.exports = mongoose.model('Sale', schema, 'sales')