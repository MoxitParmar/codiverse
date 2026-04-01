const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {

    mongoose.connect("mongodb+srv://vaidikpatil00001:ObfhlaLK71y7hSn8@cluster0.dsusxot.mongodb.net/?appName=Cluster0", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log("✅ DB Connected Successfully"))
        .catch((error) => {
            console.log("❌ DB Connection Failed");
            console.error(error);
            process.exit(1);
        });

};