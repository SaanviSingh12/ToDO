// require library
const mongoose=require('mongoose');
const dotenv=require('dotenv');

dotenv.config();
mongoose.set('strictQuery',false);
// connect to database
mongoose.connect(process.env.MONGO_URL);

const db=mongoose.connection;
    

// check if error occur

db.on('error',console.error.bind(console,'error connection to database'));


// up and running then print the message

db.once('open',function(){
    console.log('Successfully connected to the database');
});
