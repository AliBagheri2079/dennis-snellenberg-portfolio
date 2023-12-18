const path = require('path');

const buildEslintCommand = filenames =>
  `next lint --fix --file ${filenames
    .map(f => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '*.{js,jsx}': [buildEslintCommand, 'prettier --write'],
  '*.{css,postcss}': 'stylelint --fix',
  '*.styled.{js,jsx}': 'stylelint --fix',
};
