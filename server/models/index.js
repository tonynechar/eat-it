const mongoose = require('mongoose');
const DB_PORT = 27017;
const DB_NAME = 'solo-project';

mongoose.connect(
  `mongodb://localhost:${DB_PORT}/${DB_NAME}`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(`⛔️ Error, something went wrong: ${err}`);
    } else {
      console.log(`🔗 Database connected at port ${DB_PORT}`);
    }
  }
);

module.exports = mongoose;