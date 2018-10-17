/* eslint-disable max-lines, no-magic-numbers */

"use strict";

const ERROR = "error";
const OFF = "off";

module.exports = {
    rules: {
        "react-native/no-unused-styles": ERROR,
        "react-native/split-platform-components": ERROR,
        "react-native/no-inline-styles": ERROR,
        "react-native/no-color-literals": ERROR,
        "react-native/no-raw-text": OFF, // this is annoying rule, that marks new lines as text too
    },
};
