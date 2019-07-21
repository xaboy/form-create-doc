# 更新生成规则


## 表单组件
生成规则

```js
rule = [{
     type:'input',
     field: 'test',
     title: 'test',
     value: '',
     props: {
        disabled: false
     },
     emit: ['on-change']
 }]
```

### 直接修改生成规则

```js
rule[0].props.disabled = true;
rule[0].value = "update";
```

### 通过`$f`修改
[获取$f](/v2/guide/instance.html#获取实例对象-f)

1.
    ```js
    //通过`field`获取生成规则
    const rule = $f.getRule('test');
    //修改方法通过同上
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


### 修改组件的 value
修改指定组件
```js
$f.setValue('test', "update");
```
批量修改
```js
$f.setValue({
    test: "update"
});
```

## 自定义组件

自定义组件如果需要通过`$f`的方法需要定义`name`或者`field` 字段,自定义表单组件使用`field`,其他自定义组件使用`name`

[自定义表单组件](/v2/guide/custom-component.html#%E8%BD%AC%E6%8D%A2%E4%B8%BA%E8%A1%A8%E5%8D%95%E7%BB%84%E4%BB%B6)

生成规则
```js
rule = [{
    type:'i-button',
    name: 'btn',
    props: {
    disabled: false
    },
    children: ['test Button']
}]
```


### 直接修改生成规则

```js
rule[0].props.disabled = true;
```

### 通过`$f`修改
[获取$f](/v2/guide/instance.html#获取实例对象-f)

1.
    ```js
    //通过`field`获取生成规则
    const rule = $f.getRule('btn');
    //修改方法通过同上
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


## 更新规则

### 在尾部增加规则

```js
rule.push({
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

### 通过$f添加规则

在 goods_name 字段后面增加一份图片上传组件,默认添加到尾部
```js
$f.append({
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

在 goods_name 字段之前增加一份 input 组件,默认添加到头部
```js
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

### 删除第一条规则
```js
rule.splice(0,1);
```
### 删除表单组件
```js
$f.removeField('test');
```
### 删除自定义组件
```js
$f.removeField('btn');
```