const {Schema, model} = require('mongoose')

const carShema = new Schema({
     title: {
        type: String,
        require: true
     },
     model:{
        type: String,
        require: true
     },
     description:{
        type: String,
     },
     color:{
        type: String,
        require: true
     },
     horsePower:{
        type: Number,
        require: true
     },
     carType:{
        type: String,
        require: true
     },
     charging:{
        type: String,
     },
     weight:{
        type: String,
        require: true
     },
     gasoline:{
        type: String,
        require: true
     },
     factoryOfPro:{
        type: String,
        require: true
     },
     addDay:{
        type: String,
        require: true
     },
     yearMachine:{
        type: String,
        require: true
     },
     price:{
        type: Number,
        require: true
     },
     image:{
        type: String,
        require: true
     }

})

const Cars = model('cars',carShema);
module.exports = Cars;