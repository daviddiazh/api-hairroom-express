const mongoose = require("mongoose");


(async () => {
    try{
        const db = await mongoose.connect(process.env.MONGODB_URI);
        console.log('database is connected to: ', db.connection.name)
    }catch(error){
        console.error(error)
    }
})();
