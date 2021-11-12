module.exports = {
  extends: "stylelint-config-standard",
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind", "apply", "variants", "responsive", "screen", "layer"],
      },
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global"],
      },
    ],
    "declaration-block-trailing-semicolon": null,
    "no-descending-specificity": null,
    "comment-empty-line-before": null,
    "at-rule-empty-line-before": null,
    "no-duplicate-selectors": null,
  },
};
