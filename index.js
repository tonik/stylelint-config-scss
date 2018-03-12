module.exports = {
  "extends": "@tonik/stylelint-config",
  "plugins": ["stylelint-scss"],
  "rules": {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "scss/double-slash-comment-empty-line-before": "always",
    "scss/dollar-variable-colon-space-after": "always",
    "scss/dollar-variable-colon-space-before": "never",
    "scss/at-import-no-partial-leading-underscore": true
  }
};
