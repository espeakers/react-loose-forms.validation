[//]: # (Don't edit this by hand, edit readme-template.md)
[//]: # (Don't edit this by hand, edit readme-template.md)
[//]: # (Don't edit this by hand, edit readme-template.md)
[//]: # (Don't edit this by hand, edit readme-template.md)
# react-loose-forms.validation
A grab bag of validation functions for react-loose-forms

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
