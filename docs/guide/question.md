### 常见问题

::: warning 提醒

`$f`为创建表单后返回的实例,`field` 为字段名称,`rule` 为表单生成规则

:::

## 手动修改某个字段的值

1. `$f.bind().field = '修改后的值' `
2. `$f.model().field.value = '修改后的值'`
3. `rule[2].value = '修改后的值'   //rule[2]是field字段的生成规则`
4. `$f.changeValue(field,value)`

**说明**: 如果修改的值为数组必须直接赋值或使用`push`,`splice`等方法修改

## 批量赋值

```javascript
$f.setValue({field1:value1,field2:value2})
```

## 动态修改表单规则

1. `$f.model().field.props.disabled = false`
2. `rule[2].props.disabled = false   //rule[2]是 field字段的生成规则`

**说明**: 如果修改后没有生效,需要提前在生成规则里定义该规则

## 新增表单字段

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
              "onSuccess": function () {
                  return 'http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg';
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



## 文件上传成功后修改字段值

1. 通过返回值自动修改字段值
    ```javascript
    //定义文件上传成功后回调函数
    props.onSuccess = (response)=>{
        var filePath = response.data.data.url;
         return filePath;
    }
    ```
2. 手动修改字段值

    ```javascript
    //定义文件上传成功后回调函数
    props.onSuccess = (response)=>{
        var filePath = response.data.data.url;
         $f.bind().field.push(filePath);
    }
    ```

## 隐藏指定字段

1. `$f.hidden(field)`
2. `$f.model().field.props.hidden = true`

## 监听组件事件

1. 通过配置参数监听组件事件

    ```javascript
    //定义文件上传成功后回调函数
    event.click = ()=>{

    }
    ```
2. 标签模式下监听组件事件

    ```html
    <form-create @field-click="handler" />
    ```

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

设置全局配置`options.submitBtn = false`即可隐藏 [提交按钮配置参考](/guide/instance.html#f-submitstatus)

## 定制默认提交按钮

[提交按钮配置参考](/guide/instance.html#f-submitstatus)

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

设置全局配置`options.resetBtn = true`即可显示 [重置按钮配置参考](/guide/instance.html#f-resetstatus)

## Vue 版本不支持 compile

![vue-version](/img/vue-version.jpg)


## 获取 $f

[参考](/guide/instance.html)

## 在配置项中调用外层组件的方法

[参考 #51](https://github.com/xaboy/form-create/issues/51#issuecomment-473190389)

## 规则正在其他form-create中使用

一个生成规则`rule`只能**同时在一个`<form-create>`中使用**. 如果需要多次使用:
- 在使用前自行**深拷贝**
- 从被使用的`<form-create>`中移除

## 验证规则无效

请注意 value 的数据类型.如果组件为多选或区间选择时 value 的数据类型为`Array`,需要在验证规则中设置`type:'array'`

[验证规则说明](/other/validation-rules.html)

## 修改组件值后页面没有更新

在表单创建后到成功渲染之前修改是无效的

- 在生成表单之前修改
- 在`option.mounted`中修改
- 在首次表单渲染后修改

> [option.mounted](/components/element/global.html#mounted) 为表单渲染后回调
[参考](https://github.com/xaboy/form-create/issues/51#issuecomment-473190389)
