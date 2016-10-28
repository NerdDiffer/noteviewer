const path = require('path');

const ROOT = path.join(__dirname, '..');
const PATHS = {
  SRC:         ROOT + '/src',
  PUBLIC:      ROOT + '/public',
  BUILD:       ROOT + '/public/build',
  SEMANTIC_UI: ROOT + '/semantic/dist',
  PROD_BUCKET: 'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-432965281400/guitar-viewer/'
};

module.exports = PATHS;
