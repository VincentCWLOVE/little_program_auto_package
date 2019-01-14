const viewportWidth = 750
const viewportHeight = 1334
const unitPrecision = 5
const viewportUnit = "vw"


module.exports = {
  plugins: [
    require('postcss-flexbugs-fixes'),
    require('autoprefixer')({
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9', // React doesn't support IE8 anyway
      ],
      flexbox: 'no-2009',
    }),
    require("postcss-aspect-ratio-mini"),
    require("postcss-write-svg")({ utf8: false }),
    require("postcss-cssnext"),
    require("postcss-px-to-viewport")({
      viewportWidth,
      viewportHeight,
      unitPrecision,
      viewportUnit,
      selectorBlackList: ['.ignore', '.hairlines'],
      minPixelValue: 1,
      mediaQuery: false,
    }),
    // require("postcss-viewport-units")({
    //   filterRule: rule => rule.selector.indexOf('::after')  === -1 && rule.selector.indexOf('::before')  === -1 && rule.selector.indexOf(':after')  === -1 && rule.selector.indexOf(':before')  === -1
    // }),
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-preset-env')({
      features: {
        'custom-media-queries': true,
      },
    }),
    require('postcss-reporter'),

  ],
};
