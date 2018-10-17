# eslint-config-react-native

This is my preferred React Native code style linting rules. You'll probably hate them.

In case you need general React rules see [my React rules](https://github.com/dzek69/eslint-config-react)

## Idea behind these

No useless code, no hardcodes, no mess. Very opinionated.

## Installation

Installation steps assumes you've already configured base eslint config, ie: installed
[my base rules](https://github.com/dzek69/eslint-config-base).

```
npm i eslint-plugin-react-native @dzek69/eslint-config-react-native --save-dev
```

In your `.eslintrc` file add the rules in `extends` array:
```json
{
  "extends": [
    "@dzek69/eslint-config-react-native"
  ]
}
```

It will automatically enable jsx, define react-native plugin and enable some React Native browser-like globals.

Then to lint `src` and `test` directories with subdirectories run:
```
npx eslint src/**/*.js src/*.js test/**/*.js test/*.js
```

## Full config example

This is full config that I am using in one of my projects, feel free to take inspiration:

```json
{
  "extends": [
    "@dzek69/eslint-config-base",
    "@dzek69/eslint-config-react",
    "@dzek69/eslint-config-react-native"
  ],
  "env": {
    "node": true
  },
  "overrides": [
    {
      "files": ["src/*.spec.js", "src/**/*.spec.js"],
      "env": {
        "mocha": true
      },
      "rules": {
        "global-require": "off",
        "max-lines": "off",
        "max-lines-per-function": "off",
        "max-statements": "off",
        "no-magic-numbers": "off",
        "react/no-multi-comp": "off"
      }
    }
  ],
  "settings": {
    "react": {
      "createClass": "createReactClass",
      "pragma": "React",
      "version": "15.0",
      "flowVersion": "0.53"
    },
    "propWrapperFunctions": []
  }
}
```

## License

MIT
