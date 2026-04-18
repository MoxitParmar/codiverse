const mongoose = require("mongoose");
require("dotenv").config();

const defaultMongoUri =
    "mongodb+srv://vaidikpatil00001:ObfhlaLK71y7hSn8@cluster0.dsusxot.mongodb.net/?appName=Cluster0";

const globalForMongoose = global;
if (!globalForMongoose.__mongooseCache) {
    globalForMongoose.__mongooseCache = {
        conn: null,
        promise: null,
    };
}

exports.connect = async () => {
    if (globalForMongoose.__mongooseCache.conn) {
        return globalForMongoose.__mongooseCache.conn;
    }

    const mongoUri = process.env.MONGODB_URL || defaultMongoUri;

    if (!globalForMongoose.__mongooseCache.promise) {
        globalForMongoose.__mongooseCache.promise = mongoose
            .connect(mongoUri, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then((connection) => connection);
    }

    try {
        globalForMongoose.__mongooseCache.conn =
            await globalForMongoose.__mongooseCache.promise;
        return globalForMongoose.__mongooseCache.conn;
    } catch (error) {
        globalForMongoose.__mongooseCache.promise = null;
        throw error;
    }
};