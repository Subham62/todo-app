const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectionUrl = process.env.CONNECTION_URL;

const connectMongodb = async ()=>{
    try{
        await mongoose.connect(connectionUrl);
        console.log("Database connection successful");
    }catch(error){
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectMongodb;