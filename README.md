[//]: # (Don't edit this by hand, edit readme-template.md)
[//]: # (Don't edit this by hand, edit readme-template.md)
[//]: # (Don't edit this by hand, edit readme-template.md)
[//]: # (Don't edit this by hand, edit readme-template.md)
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
### blankOr
Return true if the value is blank, otherwise require the validation function you pass in as the frist argument.

For example:
```js
  {
    label: "Enter your email address",
    ...
    validate: v.blankOr(v.email)
  }
```

### currency

### date

### email

### integer

### limitInputLength

### optional

### percent

### phone

### positiveInteger

### required

## License
MIT
[//]: # (Don't edit this by hand, edit readme-template.md)
[//]: # (Don't edit this by hand, edit readme-template.md)
[//]: # (Don't edit this by hand, edit readme-template.md)
[//]: # (Don't edit this by hand, edit readme-template.md)
