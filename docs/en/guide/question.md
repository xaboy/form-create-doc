### common problem

::: warning Reminder

`$f` is the instance returned after the form is created, `field` is the field name, `rule` is the rule generation for the form

:::

## Manually modify the value of a field

1. `$f.bind().field = 'modified value' `
2. `$f.model().field.value = 'modified value'`
3. `rule[2].value = 'modified value' //rule[2] is the generation rule of the field field`
4. `$f.changeValue(field,value)`

**Description**: If the modified value is an array, it must be directly assigned or modified using `push`, `splice`, etc.

## Batch assignment

```javascript
$f.setValue({field1:value1,field2:value2})
```

## Dynamically modify form rules

1. `$f.model().field.props.disabled = false`
2. `rule[2].props.disabled = false`

**Description**: If the modification does not take effect, you need to define the rule in the build rule in advance.

## Add form field

1. Add an image upload component after the goods_name field, which is added to the tail by default.
    ```javascript
    $f.append($formCreate.maker.upload(
       'Product master map',
       'logo',
       'http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg'
   ).props({
           "action": "",
           "maxLength": 1,
           "multiple": false,
           "type": "select",
           "uploadType": "image",
           "name": "file",
           "onSuccess": function () {
               return 'http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg';
           }
       })
       .validate({required:true, type: 'array', min: 1, message: 'Please upload 1 image', trigger: 'change'}
    ), 'goods_name');
    ```
2. Add an input component before the goods_name field, which is added to the header by default.

    ```javascript
    $f.prepend({
           type:"input",
           title: "Product introduction",
           field:"goods_info",
           value:"",
           props: {
               "type": "text",
               "placeholder": "Please enter the product description",
           },
           validate:[
               { required: true, message: 'Please enter the product description', trigger: 'blur' },
           ],
       },'goods_name');
    ```
3. Append an input component to the end of the form
    ```javascript
    rules.push({
           type:"input",
           title: "Product introduction",
           field:"goods_info",
           value:"",
           props: {
               "type": "text",
               "placeholder": "Please enter the product description",
           },
           validate:[
               { required: true, message: 'Please enter the product description', trigger: 'blur' },
           ],
   })
    ```
## Delete form fields

1. Delete the specified field

```javascript
$f.removeField(field)
```

2. Delete the last field

```javascript
rules.pop()
```



## Modify the field value after the file upload succeeds

1. Automatically modify field values ​​by return value
```javascript
// Define the file upload success after the callback function
props.onSuccess = (response)=>{
    var filePath = response.data.data.url;
    return filePath;
}
```
2. Manually modify the field value

```javascript
// Define the file upload success after the callback function
props.onSuccess = (response)=>{
    var filePath = response.data.data.url;
    $f.bind().field.push(filePath);
}
```

## Hide specified fields

1. `$f.hidden(field)`
2. `$f.model().field.props.hidden = true`

## Listening component events

1. Listen for component events by configuration parameters

```javascript
// Define the file upload success after the callback function
event.click = ()=>{

}
```
2. Listening component events in tag mode

```html
<form-create @field-click="handler" />
```

## Generate a form based on the rules returned in the background

```javascript
fetch('api').then(rule=>{
    $f = formCreate.create(rule,{
        onSubmit(formData){
            // form submission event
            $f.btn.loading(true);
            //TODO submission form
        }
    })
})
```

## Hide default submit button

Set the global configuration `options.submitBtn = false` to hide the [submit button configuration reference] (/guide/instance.html#f-submitstatus)

## Show default reset button

Set the global configuration `options.resetBtn = true` to display [Reset Button Configuration Reference] (/guide/instance.html#f-resetstatus)

## Vue version does not support compile

![vue-version](/img/vue-version.jpg)


## Get $f

[Reference](/guide/instance.html)

## How to call the outer component in the configuration item

[Reference #51](https://github.com/xaboy/form-create/issues/51#issuecomment-473190389)

## Rules are being used in other form-create

A build rule `rule` can only be used at the same time in a `<form-create>`. If you need to use it multiple times:
- Self-deep copy before use
- Removed from the used `<form-create>`

## Validation rule is invalid

Note the data type of value. If the component is multi-select or interval select, the data type of value is `Array`, you need to set `type:'array'` in the validation rule.

[Validation Rule Description](/other/validation-rules.html)

## The page is not updated after modifying the component value

The modification is invalid after the form is created and before it is successfully rendered.

- Modify before generating the form
- Modify in `option.mounted`
- Modify after the first form is rendered

> [option.mounted](/components/element/global.html#mounted) Callback after rendering the form