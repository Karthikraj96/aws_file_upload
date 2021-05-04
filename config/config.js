'use strict'

const mongoose = require('mongoose');

module.exports = {
    'database': process.env.MONGO_DB,

    // connect function to create a mongoDB connection
    'connectDB' : function () {
        mongoose.connect(
            "mongodb+srv://user:user@cluster0.yy9ij.mongodb.net/user?retryWrites=true&w=majority",
            
            {
              useNewUrlParser: true,
              useFindAndModify: false,
              useUnifiedTopology: true
            }
          );
    },
}
// on mongo connection open event print a console statement
mongoose.connection.on('open', function () {
    console.log('Connected to Database (MongoDB) ');
})