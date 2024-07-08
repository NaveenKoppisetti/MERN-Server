const mongooes = require('mongoose');

const productSchema = mongooes.Schema({
    imageUrl :{type:String, required:true},
    price :{type:Number, required:true},
    name :{type:String, required:true},
    description :{type:String, required:true}
})
module.exports = mongooes.model('Product',productSchema);