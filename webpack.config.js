switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    module.exports = require('./config/webpack.config.prod');
    break;
  case 'dev':
  case 'development':
  default:
    module.exports = require('./config/webpack.config.dev');
}