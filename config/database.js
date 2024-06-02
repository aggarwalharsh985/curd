const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(() => console.log("db connection successfully"))
    .catch((error) => {
        console.error(error.message)
        console.log("erro")
        process.exit(1);
    })
}
module.exports = dbConnect;
