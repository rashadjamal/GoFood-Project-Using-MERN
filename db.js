const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://rashadjamal06:mernfood@cluster0.kicknvj.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");
        
        const collection = mongoose.connection.db.collection("sample");
        const data = await collection.find({}).toArray();
        // console.log(data);

    } catch (err) {
        console.error("Error connecting to MongoDB:", err.message);
    }
}

module.exports = mongoDB;
