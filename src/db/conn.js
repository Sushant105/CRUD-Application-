const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/user-registration",{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
    console.log("Connection is successfull");
}).catch((e)=>{
    console.log("No Connection aree yrrr shittt");
})