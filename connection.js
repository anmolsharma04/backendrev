const mongoose = require("mongoose");

async function connectMongo(){
mongoose.connect('mongodb://127.0.0.1:27017/testdata')
return 
}

module.exports = {
    connectMongo
}
