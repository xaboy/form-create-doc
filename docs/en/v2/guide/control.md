---
title: Control configuration
---


# Control configuration

The `control` configuration item can be used to control whether other components are displayed by the value of the component

#### Examples
![control](https://raw.githubusercontent.com/xaboy/form-create/dev/images/demo-live4.gif)

[Online example](http://jsrun.pro/C8fKp/edit)

#### Maker
```js
maker.radio('Whether or not', 'is_postage', 0).options([
            {value: 0, label: 'No mail', disabled: false},
            {value: 1, label: 'FREE', disabled: false},
        ]).control([
            {
                value: 1,
                rule: [
                    maker.number ('Full Amount', 'postage_money', 0)
                ]
            }
        ])
```

#### JSON
```json
{
    type: "radio",
    title: "Whether it is free",
    field: "is_postage",
    value: 0,
    options: [
        {value: 0, label: 'No mail', disabled: false},
        {value: 1, label: 'FREE', disabled: false},
    ],
    control: [
        {
            value: 1,
            rule: [
                {
                    type: 'number',
                    field: 'postage_money',
                    title: 'Full Amount',
                    value: 0
                },
            ]
        }
    ]
}
```

#### Property description

- **value**: Display the components in `rule` when the value of the component is equal to` value`
```js
{
    value: 1,
    rule: [...]
}
```

- **handle `Function`**: Display the components in`rule` when the `handle` method returns` true`
```js
{
    handle: function (val) {
        return val === 1;
    },
    rule: [...]
}
```

- **rule `Array`**: This component controls the displayed components
```js
{
    handle: 1
    rule: [
        maker.number ('Full Amount', 'postage_money', 0)
    ]
}
```