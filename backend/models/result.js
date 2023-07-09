var mongoose = require('mongoose')
var resultSchema = mongoose.Schema({
    quizid: {
        type: String,
        required: true
    },
    st_email: {
        type: String,
        
    },
    score: {
        type: Number,
        default:0,
    }
})
module.exports = mongoose.model('result',resultSchema)

