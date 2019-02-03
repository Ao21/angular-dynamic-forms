const esModules = [].join('|');

module.exports = {
  globals: {
    "ts-jest": {
      "allowSyntheticDefaultImports": true
    }
  },
  transformIgnorePatterns: [`<rootDir>/node_modules/(?!${esModules})`],

  "transform": {
    "^.+\\.(ts|html)$": "<rootDir>/node_modules/jest-preset-angular/preprocessor.js",
    "^.+\\.js$": "babel-jest"
  } 
};