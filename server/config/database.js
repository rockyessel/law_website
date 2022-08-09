const mongoose = require('mongoose');

const connectDatabase = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `Connected to MONGODB ${connect.connection.host}:${connect.connection.port}`
    );
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { connectDatabase };
