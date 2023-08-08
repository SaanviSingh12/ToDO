const express=require('express');
const db=require('./config/mongoose');
const ToDO=require('./models/TodoList');

const app=express();
const port=4040;

app.set('view engine','ejs');
app.set('views','./views');

const bodyParser=require('body-parser');

// app.use('/taskList',require('./routes'));
app.use(bodyParser.urlencoded());

app.use(express.static('assests'));
app.use('/',require('./routes'));


app.listen(port,function(err){
    if(err){
        console.log(`Error occur ${err}`);
        return ;
    }
    console.log(`Server running successfully on port ${port}`);
});
