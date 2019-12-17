// const { strictEslint } = require('@umijs/fabric');

const fabric = require('@umijs/fabric');

module.exports = {
  // ...strictEslint,
  ...fabric.eslint,
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
  },
};
