var Quiz = require('../models/quiz')
var User = require('../models/user')
var Result = require('../models/result')
var Question = require('../models/question')
const jwt = require('jsonwebtoken')


exports.setScore = (req, res) => {
    console.log("req body: ",req.body);
    var email = req.email;
    var qid= req.body.quizid;
    var score=req.body.score;
    console.log("req body. qid: ",req.body.quizid);
    Result.find({quizid:qid}, (err, qz) => {
        if (err) {
            console.log(error);
            res.json({ msg: "some error!" });
        }
        else {
          
                    var rs = new Result({
                        quizid: qid,
                        st_email: email,
                        score: score
                    });
        
                    rs.save((error, rst) => {
                        if (error) {
                            console.log(error);
                            res.json({ msg: "some error!" });
                        }
                        else {
                            res.status(200).json({ message: "Score added!!" })
                        }
                    })
                    console.log(qid);
                      
            }
        })    
}

exports.getallquiz = (req, res) => {
    Quiz.find({upload:true}, (err, qz) => {
        if (err) {
            console.log(error);
            res.json({ msg: "some error!" });
        }
        else {
            res.json({ quiz: qz });
        }
    })
}


exports.getAllQuestion = (req, res) => {

    Question.find({ quizid: req.params.id }, (err, qz) => {
        if (err) {
            console.log(error);
            res.json({ errormsg: "some error!" });
        }
        else {
            res.json({ msg: qz });
        }
    })
}


exports.blockMe = (req, res) => {
    var id = req.userId
    User.updateOne({ _id: id }, { blocked: true }, function (err, user) {
        if (err) {
            console.log(err)
            res.status(500).json({ msg: "something went wrong!!" })
        }
        else {
            console.log("blocked user");
            res.status(201).json({ message: "blocked user!" });
        }
    })

}

exports.verifyToken = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).send("unauthorized req")
    }
    let token = req.headers.authorization.split(' ')[1]
    // console.log(token);  
    if (token == 'null') {
        return res.status(401).send("unauthorized req")
    }
    let payload = jwt.verify(token, 'secretkey')
    if (!payload) {
        return res.status(401).send("unauthorized req")
    }
    // console.log("in middleware");
    // console.log(payload.subject);
    // console.log(payload.email);
    req.userId = payload.subject
    req.email = payload.email;
    // console.log(req.userId);
    // console.log(req.email);
    next()
}