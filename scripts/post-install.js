const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const { execSync } = childProcess;

const styleCss = fs.readFileSync('./icomoon/style.css').toString();

execSync(`mkdir -p ${path.resolve(__dirname, '../.build')}`);

// fix font references
const fixedFontReferences = styleCss.replace(/url\('fonts/g, 'url(\'/assets/fonts');
fs.writeFileSync(path.resolve(__dirname, '../.build/avicon-fonts.scss'), fixedFontReferences);

// generate sass mixins
const sassMixins = styleCss
  .replace(/@font-face[^}]+}\s+/m, '')
  .replace(/\[class\^="icon-"], \[class\*=" icon-"]/g, '@mixin avicon()')
  .replace(/\.icon-([^:]+):before \{/g, '@mixin avicon_$1() {\n  @include avicon();');

fs.writeFileSync(path.resolve(__dirname, '../.build/avicon-fonts-mixins.scss'), sassMixins);
