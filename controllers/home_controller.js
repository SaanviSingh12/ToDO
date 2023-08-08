
const ToDO=require('../models/TodoList');




module.exports.home=function(req,res){
    ToDO.find({},function(err,List){
        if(err){
            console.log('Error in fetching contact');
            return;
        }
        return res.render('home',{
            List:List,
        }); 
    });
}
module.exports.addTask=function(req,res){
    ToDO.create({
        description:req.body.description,
        category:req.body.category,
        date:req.body.date,

    },function(err,newTask){
        if(err){
            console.log('Error in creating contact!');
            return;
        }
     
        return res.redirect('back');
    });
}

module.exports.deleteTask=function(req,res){
        let id=req.query.id;
        ToDO.findByIdAndDelete(id,function(err){
            if(err){
                console.log('error in deleting contact');
                return;
            }
        })
        return res.redirect('back');
}