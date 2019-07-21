# Update rules


## Form component
Generating rules

```js
rule = [{
     type: 'input',
     field: 'test',
     title: 'test',
     value: '',
     props: {
        disabled: false
     },
     emit: ['on-change']
 }]
```

### Directly modify the generation rules

```js
rule[0].props.disabled = true;
rule[0].value = "update";
```

### Modified by `$f`
[Get $f](/en/v2/guide/instance.html)

1.
```js
// Get the generation rule through `field`
const rule = $f.getRule('test');
// Modify the method through the same
```

2.
```js
const $model = $f.model();
const rule = $model.test;
```

3.
```js
$f.updateRule('test',{
    value: 'update',
    props: {
        disabled: true
    }
});
```


### Modify the value of a component
Modify the specified component
```js
$f.setValue('test', "update");
```
Batch Edit
```js
$f.setValue({
    test: "update"
});
```

## Custom Components

Custom components need to define `name` or `field` fields through the `$f` method, custom form components use `field`, and other custom components use `name`

[custom form component](/en/v2/guide/custom-component.html)

Generating rules
```js
rule = [{
    type: 'i-button',
    name: 'btn',
    props: {
       disabled: false
    },
    children: ['test button']
}]
```


### Directly modify the generation rules

```js
rule[0].props.disabled = true;
```

### Modified by `$f`
[Get $f](/v2/guide/instance.html)

1.
```js
// Get the generation rule through `field`
const rule = $f.getRule('btn');
// Modify the method through the same
```

2.
```js
const $component = $f.component();
const rule = $component.btn;
```

3.
```js
$f.updateRule('btn',{
    props: {
        disabled: true
    }
});
```


## Update rules

### Add rules at the end

```js
rule.push({
   type:"input",
   title: "product introduction",
   field:"goods_info",
   value:"",
   props: {
       "type": "text",
       "placeholder": "please enter the product description",
   },
   validate:[
       { required: true, message: 'please enter the product description', trigger: 'blur' },
   ],
})
```

### Adding rules by $f

Add an component after the goods_name field, which is added to the tail by default.
```js
$f.append({
   type:"input",
   title: "product introduction",
   field:"goods_info",
   value:"",
   props: {
       "type": "text",
       "placeholder": "please enter the product description",
   },
   validate:[
       { required: true, message: 'please enter the product description', trigger: 'blur' },
   ],
}, 'goods_name');
```

Add an input component before the goods_name field, which is added to the header by default.
```js
$f.prepend({
   type:"input",
   title: "product introduction",
   field:"goods_info",
   value:"",
   props: {
       "type": "text",
       "placeholder": "please enter the product description",
   },
   validate:[
       { required: true, message: 'please enter the product description', trigger: 'blur' },
   ],
},'goods_name');
```

### Delete the first rule
```js
rule.splice(0,1);
```
### Deleting form components
```js
$f.removeField('test');
```
### Deleting custom components
```js
$f.removeField('btn');
```