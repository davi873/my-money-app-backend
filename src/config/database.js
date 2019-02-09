const mongoose = require('mongoose')
mongoose.Promise = global.Promise 

const nameDb = 'mymoney'

module.exports = mongoose.connect(`mongodb://localhost/${nameDb}`)

//MENSAGENS DE ERRO
mongoose.Error.messages.general.min = "'{VALUE}' informado é menor que o limite mínimo de '{MIN}'"
mongoose.Error.messages.general.max = "'{VALUE}' informado é maior que o limite máximo de '{MAX}'"
mongoose.Error.messages.general.enum = "'{VALUE}' não é válido pra o atributo '{PATH}'"
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório"