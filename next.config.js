module.exports = {
  reactStrictMode: true,
}


const withMarkdoc = require('@markdoc/next.js');

module.exports = withMarkdoc(/* options */)({
  pageExtensions: ['js', 'md'],
});