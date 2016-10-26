// Helper for importing parts of semantic-ui library into components.
// Now that webpack is set up, this module may or may not be needed anymore.

import { join } from 'path';

const PATHS = {
  ROOT: path.join(__dirname, '../../semantic/dist')
};

PATHS.CSS_MIN = PATHS.ROOT + '/semantic.min.css';
PATHS.CSS     = PATHS.ROOT + '/semantic.css';
PATHS.JS_MIN  = PATHS.ROOT + '/semantic.min.js';
PATHS.JS      = PATHS.ROOT + '/semantic.js';

export default PATHS;
