const path = require('path');
const rootPath = __dirname;

module.exports = {
  rootPath,
  uploadPath: path.join(rootPath, 'public'),
  db: {
    url: 'mongodb://localhost/jshome95-coctails',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
  },
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID,
  },
};
