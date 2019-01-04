const fs = require('fs')
const config = require('./package.json')

delete config.scripts
delete config.devDependencies
delete config.eslintConfig
delete config.browserslist

config.main = config.main.replace(/dist\//,'')
config.types = config.types.replace(/dist\//,'')

fs.writeFileSync( 'dist/package.json', JSON.stringify( config, null, 2 ), { encoding: 'utf8' } );

[ 'README.md', 'LICENSE' ].forEach( f => 
  fs.copyFileSync(`./${f}`,`./dist/${f}`)
)