### Common problem

## Manually modify the value of a field

1. `$f.bind()[field] = 'after' `
2. `$f.model()[field].value = 'after'`
3. `rule[2].value = 'after'`
4. `$f.setValue(field,value)`

## Batch assignment

```javascript
$f.setValue({[field1]:value1,[field2]:value2})
```

## Dynamically modify form rules

1. `$f.model()[field].props.disabled = false`
2. `rule[2].props.disabled = false`

**Description**: Modified attributes need to be predefined in the build rule in advance

## Append form field

1. Add an image upload component after the `goods_name` field, which is added to the tail by default.
    ```javascript
    $f.append($formCreate.maker.upload(
        '产品主图',
        'logo',
        'http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg'
    ).props({
              "action": "",
              "maxLength": 1,
              "multiple": false,
              "type": "select",
              "uploadType": "image",
              "name": "file",
              "onSuccess": function (res, file) {
                  file.url = res.data;
              }
         })
         .validate({required:true, type: 'array', min: 1, message: '请上传1张图片', trigger: 'change'}
    ),'goods_name');
    ```
2. Add a `input` component before the `goods_name` field, which is added to the header by default.

    ```javascript
    $f.prepend({
           type:"input",
           title:"商品简介",
           field:"goods_info",
           value:"",
           props: {
               "type": "text",
               "placeholder": "请输入商品简介",
           },
           validate:[
               { required: true, message: '请输入商品简介', trigger: 'blur' },
           ],
    },'goods_name');
    ```
3. Append an `input` component to the end of the form
    ```javascript
    rules.push({
           type:"input",
           title:"商品简介",
           field:"goods_info",
           value:"",
           props: {
               "type": "text",
               "placeholder": "请输入商品简介",
           },
           validate:[
               { required: true, message: '请输入商品简介', trigger: 'blur' },
           ],
    })
    ```
## Delete form field

1. Delete specified field

   ```javascript
   $f.removeField(field);
   ```

2. Delete the last field

   ```javascript
   rules.pop()
   ```


## Hide specified fields

1. `$f.hidden(true, field)`

## Generate a form based on the rules returned in the background

```javascript
fetch('api').then(rule=>{
    $f = formCreate.create(rule,{
        onSubmit(formData){
            // 表单提交事件
            $f.btn.loading(true);
            //TODO 提交表单
        }
    })
})
```

## Hide default submit button

Set the global configuration `options.submitBtn = false` to hide

## Custom default submit button

```javascript
 option: {
      submitBtn: {
        type: "basic",
        size: "mini",
        icon: "",
        shape: "round",
        innerText: "submit",
        col: {
          span: 4,
          offset: 10
        }
      }
  }
```
 

## Show default reset button

Set the global configuration `options.resetBtn = true` to display

## Vue version does not support compile

![vue-version](/img/vue-version.jpg)


## Obtain $f

[reference](/en/v2/instance.html)

## Method of calling an outer component in a configuration item

[reference #51](https://github.com/xaboy/form-create/issues/51#issuecomment-473190389)

## Rules are being used in other form-create

A build rule `rule` can only be used at the same time in a `<form-create>`. If you need to use it multiple times:
- Self-deep copy before use**
- Removed from the used `<form-create>`

## Invalid validation rule

Note the data type of value. If the component is multi-select or interval select, the data type of value is `Array`, you need to set `type:'array'` in the validation rule.

## switch component does not display

Configure the slot configuration item in props
```json
props: {
    "trueValue":"1", 
    "falseValue":"0",
    "slot": {
        open:"上架", 
        close:"下架", 
    }, 
}
```

## The page is not updated after modifying the component value

The modification is invalid after the form is created and before it is successfully rendered.

- Modify before generating the form
- Modify in `option.mounted`
- Modify after the first form is rendered
