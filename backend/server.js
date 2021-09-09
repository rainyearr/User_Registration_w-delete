const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = 4000;
const userRoutes = express.Router();
let User = require('./user.model');

app.use(cors());
app.use(bodyParser.json())

mongoose.connect('mongodb://127.0.0.1:27017/users', {useNewUrlParser:true});
const connection = mongoose.connection;

connection.once('open',function(){
    console.log("MongoDB database connection established successfully!");
})
userRoutes.route('/').get(function(req,res){
    User.find(function(err,users){
        if(err){
            console.log(err)
        }else{
            res.json(users);
        }
    })
})

userRoutes.route('/:id').get(function(req, res){
    let id = req.params.id;
    User.findById(id, function(err, user){
        res.json(user);
    })
})
userRoutes.route('/add').post(function(req, res){
    let user = new User(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'user':'user added successfully'})
        })
        .catch(err => {
            res.status(400).send('adding new user failed');
    })
})

userRoutes.route('/update/:id').post(function(req, res){
    User.findById(req.params.id, function(err, user){
        if(!user){
            res.status(400).send("data is not found");
        }
        else{
            user.user_name = req.body.user_name;
            user.user_age = req.body.user_age;
            user.user_gender = req.body.user_gender;
            user.user_email = req.body.user_email;
            user.user_phonenumber = req.body.user_phonenumber;
        }
        user.save().then(user => {
            res.json('User Update');
        })

        .catch(err => {
            res.status(400).send("Update not possible");
        })
    })
})

userRoutes.route('/:id').delete((req, res)=>{
    User.findByIdAndDelete(req.params.id)
        .then(()=> res.json('User Item Deleted.'))
        .catch(err => res.status(400).json('Error:'+ err));
});

app.use('/users', userRoutes)

app.listen(PORT, function(){
    console.log("Server is running on port:" + PORT)
})