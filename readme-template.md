# react-loose-forms.validation
A grab bag of validation functions for [react-loose-forms](https://github.com/espeakers/react-loose-forms#child-method-buildschema)

Click [here](https://github.com/espeakers/react-loose-forms#child-method-buildschema) to read more about how they work.

There are 2 ways of getting a validation function.

For example the `percent` function:
```js
var v = require("react-loose-forms.validation");

  ...
  {
    label: "Please enter a percentage",
    type: "text",
    validate: v.percent
  },
  ...
```

```js
var percent = require("react-loose-forms.validation/v/percent");

  ...
  {
    label: "Please enter a percentage",
    type: "text",
    validate: percent
  },
  ...
```

## Functions
{{fn docs}}

## License
MIT
