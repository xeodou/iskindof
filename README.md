#### isKindOf

#### Why
For example in JavaScript `typeof` `{}` and `[]` both are `object`, so this module
is a simple to check what it is.

#### How to use it
`npm i iskindof --save`

#### API
```
const iskindof = require('iskindof')

iskindof.isString('string') === true
iskindof.isArray([]) === true
iskindof.isFunction(function(){}) === true
iskindof.isNumber(1) === true
iskindof.isBoolean(true) === true
iskindof.isObject({}) === true
iskindof.isUndefined(Undefined) === true
iskindof.isObject({}) === true
iskindof.isDate(new Date()) === true

```

#### LICENSE
MIT
