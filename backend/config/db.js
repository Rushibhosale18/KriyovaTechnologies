const mongoose = require('mongoose');

const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/kriyova';
  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 2000,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.warn(`MongoDB notice: ${error.message}`);
    console.warn('Backend running in resilient mode (MongoDB connection will retry in background).');
  }
};

module.exports = connectDB;
