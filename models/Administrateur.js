const mongoose =require('mongoose');
const Administrateur =mongoose.model('Administrateur',{

firstname:{
    type:String
},
lastname:{
    type:String
},
cin:{
    type:Number,
    unique:true
},
password:{
    type:String,
    unique:true
},
email:{
    type:String,
    unique:true
},
image:{
    type:String
},
tags:{
    type:Array
},
date:{
    type:String
}
})
module.exports=Administrateur;