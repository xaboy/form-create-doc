---
title: Group component [new]
---


# Array component / component nesting

You can implement component arrays and nested object functions through the `group` component

#### Examples
![group](/img/group.gif)

[Online example](http://jsrun.pro/VLfKp/edit)

#### Maker
```js
maker.group('label', 'label', []).props({
        min: 1,
        max: 5,
        rule: {
            type: 'input',
            field: 'input',
            props: {disabled: false},
            validate: [{required: true}]
        }
    }).validate([
        {required: true, type: 'array', min: 1, message: 'Add at least 1 tag'}
])
```

#### JSON
```json
{
    type: "group",
    title: "Label",
    field: "label",
    value: [],
    props: {
        min: 1,
        max: 5,
        rule: {
            type: 'input',
            field: 'input',
            props: {disabled: false},
            validate: [{required: true}]
        }

    },
    validate: [
        {required: true, type: 'array', min: 1, message: 'Add at least 1 tag'}
    ]
}
```
**value**: `Array`

#### props


| Property | Description | Type | Default |
| :-------- | :-------------------------------------------------- | :------ | :-----------------------------|
rule | Rules for nested components. When set through this property, the value is `Array` ** (the component rule that needs to get the value must define the field, if there are multiple defaults, the first one is taken) |
rules | Rules for nested components. When set through this property, the value is `Array <Object>` ** (component rules that need to get values, field must be defined) ** | Array |-|
| min | Add a few items | Number |-|
| max | Add up to a few items | Number |-|
| disabled | disabled | Boolean | false |

#### events

| Event Name | Description | Return Value |
| :-------------------- | :---------------------------------------------------------- | :----------------------------------------------------------- |
add | Trigger after adding an item |-|
remove | Triggered after removing an item |-|
| itemMounted | Triggered when the new subform is initialized |-|