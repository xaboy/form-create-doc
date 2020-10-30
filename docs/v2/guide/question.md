### 常见问题

::: warning 提醒

`$f`为创建表单后返回的实例,`field` 为字段名称,`rule` 为表单生成规则

:::

## 手动修改某个字段的值

1. `$f.bind()[field] = '修改后的值' `
2. `$f.model()[field].value = '修改后的值'`
3. `rule[2].value = '修改后的值'   //rule[2]是field字段的生成规则`
4. `$f.setValue(field,value)`

**说明**: 如果修改的值为数组必须直接赋值或使用`push`,`splice`等方法修改

## 批量赋值

```javascript
$f.setValue({[field1]:value1,[field2]:value2})
```

## 动态修改表单规则

1. `$f.model()[field].props.disabled = false`
2. `rule[2].props.disabled = false   //rule[2]是要修改的生成规则`

**说明**: 修改的属性需要提前在生成规则里预定义

## 追加表单字段

1. 在 goods_name 字段后面增加一份图片上传组件,默认添加到尾部
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
2. 在 goods_name 字段之前增加一份 input 组件,默认添加到头部

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
3. 在表单尾部追加一个 input 组件
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
## 删除表单字段

1. 删除指定字段

   ```javascript
   $f.removeField(field);
   ```

2. 删除最后一个字段

   ```javascript
   rules.pop()
   ```

## 隐藏指定字段

1. `$f.hidden(true, field)`

## 根据后台返回的规则生成表单

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

## 隐藏默认提交按钮

设置全局配置`options.submitBtn = false`即可隐藏

## 定制默认提交按钮

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
 

## 显示默认重置按钮

设置全局配置`options.resetBtn = true`即可显示

## Vue 版本不支持 compile

![vue-version](/img/vue-version.jpg)


## 获取 $f

[参考](/v2/instance.html)

## 在配置项中调用外层组件的方法

[参考 #51](https://github.com/xaboy/form-create/issues/51#issuecomment-473190389)

## 规则正在其他form-create中使用

一个生成规则`rule`只能**同时在一个`<form-create>`中使用**. 如果需要多次使用:
- 在使用前自行**深拷贝**
- 从被使用的`<form-create>`中移除

## 验证规则无效

请注意 value 的数据类型.如果组件为多选或区间选择时 value 的数据类型为`Array`,需要在验证规则中设置`type:'array'`

[验证规则说明](/v2/other/validation-rules.html)


## switch 组件不显示

将 slot 配置项配置在 props 中
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

## 修改组件值后页面没有更新

在表单创建后到成功渲染之前修改是无效的

- 在生成表单之前修改
- 在`option.mounted`中修改
- 在首次表单渲染后修改

