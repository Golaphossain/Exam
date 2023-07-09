var mongoose = require('mongoose')
var quizSchema = mongoose.Schema({
    quizname: {
        type: String,
        required: true
    },
    quizdescription: {
        type: String,
        required: true
    },
    upload:{
        type: Boolean, default: false
    },
    owner: {
        type: String,
    },
    owneremail: {
        type: String,
    },
    totalquestion: {
        type: Number,
        default: 0,
    },
})
module.exports = mongoose.model('quiz',quizSchema)

