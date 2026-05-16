const util = require('node:util');

if (typeof util.styleText !== 'function') {
  util.styleText = (_format, text) => String(text);
}
