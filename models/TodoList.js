const mongoose=require('mongoose');

const toDOSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date: {
        type:Date,
        required:true
    }
});
const toDO=mongoose.model('toDO',toDOSchema);
module.exports=toDO;