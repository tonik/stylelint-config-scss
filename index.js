module.exports = {
  "extends": "@tonik/stylelint-config",
  "plugins": ["stylelint-scss"],
  "rules": {
    "at-rule-no-unknown": null,
    "no-descending-specificity": null, // Temporary turn off, because there is a problem with selectors that using `#{$this}`.
    "scss/at-rule-no-unknown": true,
    "scss/double-slash-comment-empty-line-before": ["always", {
      "except": ["first-nested"],
      "ignore": ["between-comments", "stylelint-commands"]
    }],
    "scss/dollar-variable-colon-space-after": "always-single-line",
    "scss/dollar-variable-colon-space-before": "never",
    "scss/at-import-no-partial-leading-underscore": true
  }
};
