const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
}).then(()=> console.log(`✅ DB is Connected!`))
    .catch(err => console.log(`❌ DB Problem : ${err}`));