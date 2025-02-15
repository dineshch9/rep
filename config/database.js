const mongoose = require('mongoose');
require("dotenv").config();

exports.dbConnect = () => {
    mongoose.connect("mongodb+srv://dinesh:dinesh@dinesh.2k4lr.mongodb.net/bin?retryWrites=true&w=majority&appName=Dinesh", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log("DB Connected Successfully"))
        .catch((e) => {
            console.log("DB Connection Unsuccessful");
            console.error(e);
            process.exit(1);
        });
};