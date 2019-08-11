# Verification

The validation rules for components can be set via the validate configuration item, and custom form components also support validation.

[Online example](http://jsrun.pro/LchKp/edit)

:::tip
Type needs to be defined according to the component's value type
:::

### Example

Verify that the input component is required
```js
{
    type: 'input',
    //...
    validate: [{type: 'string', required: true}]
}
```

Verify date component is required
```js
{
    type: 'datePicker',
    //...
    validate: [{type: 'date', required: true}]
}
```

Verify the checkbox component Select at least three
```js
{
    type: 'input',
    //...
    validate: [{type: 'array', required: true, min:3}]
}
```
More advanced usage can be studied [async-validator](https://github.com/yiminghe/async-validator).