const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://rashadjamal06:mernfood@cluster0.kicknvj.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");

        const sampleCollection = mongoose.connection.db.collection("sample");
        const sampleData = await sampleCollection.find({}).toArray();
        global.sample = sampleData;

        const foodcateCollection = mongoose.connection.db.collection("foodcate");
        const foodcateData = await foodcateCollection.find({}).toArray();
        global.foodcate = foodcateData;

    } catch (err) {
        console.error("Error connecting to MongoDB:", err.message);
    }
};

module.exports = mongoDB;
