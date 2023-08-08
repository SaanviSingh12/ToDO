// require library
const mongoose=require('mongoose');
mongoose.set('strictQuery',false);
// connect to database
mongoose.connect('mongodb://0.0.0.0/contact-list-db');

const db=mongoose.connection;
    

// check if error occur
db.on('error',console.error.bind(console,'error connection to database'));


// up and running then print the message

db.once('open',function(){
    console.log('Successfully connected to the database');
});
