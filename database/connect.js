const Mongoose = require("mongoose");
const dotenv = require("dotenv");

class databaseConnect{
    connect(){
        dotenv.config()
        Mongoose.connect(process.env.DB_CONNECT,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:true,
            useCreateIndex:true,


        }, (err) => {
            if (err) throw new Error("Problem with connect to DB");
            console.log("DB connect successful");
            
            
        })
    }
}
module.exports = new databaseConnect;