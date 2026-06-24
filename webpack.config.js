const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );

module.exports = {
    ...defaultConfig,
    entry: {
        'logo-otsikko': path.resolve(process.cwd(), 'blocks/logo-otsikko/src/index.js'),
        'palvelut': path.resolve(process.cwd(), 'blocks/palvelut/src/index.js'),
        'palvelu': path.resolve(process.cwd(), 'blocks/palvelu/src/index.js'),
        'logot': path.resolve(process.cwd(), 'blocks/logot/src/index.js'),
        'logo': path.resolve(process.cwd(), 'blocks/logo/src/index.js'),
        'etusivun-hero': path.resolve(process.cwd(), 'blocks/etusivun-hero/src/index.js'),
        'ikoninosto': path.resolve(process.cwd(), 'blocks/ikoninosto/src/index.js'),
    },
    output: {
        ...defaultConfig.output,
        path: path.resolve(process.cwd(), 'build'),
        filename: '[name].js',
    },
};