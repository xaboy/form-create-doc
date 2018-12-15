### 实例方法

::: warning 注意

1.4.1版本之后 `model`方法无需传参, 使用方法 `form = $f.model()`。

:::



#### 方法说明

* **formData\(\)** 获取表单的value

* **getValue\(field\)** 获取指定字段的value

* **model\(obj\)** 获取双向数据绑定的表单生成规则，**当直接修改没有生效时请使用**`set`**方法修改**。

```javascript
数据结构:
{
    field1:{value,rule:{props,validate,options,slot,event,...[其他配置项]}}
    field2:{value,rule:{props,validate,options,slot,event,...[其他配置项]}}
}
```
* **bind()** 获取双向数据绑定的表单value | **`>=1.4.1版本`**

* **set\(node,field,value\)** 用于表单生成后,修改组件的规则,使用方法类似`Vue.$set`方法. 

```javascript
//例如:
$f.set(field.rule.col,'span',12)
```
* **hidden(fields,hidden = true)** 隐藏或显示指定组件 | **`>=1.4.1版本`**
* **visibility(fields,visibility = true)** 隐藏或显示指定组件 | **`>=1.4.1版本`**
* **reload(newRules)** 根据新的表单规则重新渲染表单 | **`>=1.4.4版本`**

* **changeField\(field,value\)** 修改指定字段的value

* **resetFields\(\)** 重置表单

* **destroy\(\)** 销毁表单

* **removeField\(field\)** 删除指定字段

* **fields\(\)** 获得表单所有字段名称

* **closeModal\(\)** 关闭frame组件的弹出框

* **submit\(\)** 手动提交表单,表单验证通过后会触发onSubmit事件

* **validate\(successFn,errorFn\)** 表单验证,如果验证通过执行successFn,未通过则执行errorFn

* **validateField\(field,callback\)** 表单验证指定字段

```javascript
$f.validateField(field,(errMsg)=>{
        if(errMsg){
            //TODO 验证未通过
        }else{
            //TODO 验证通过
        }
});
```

* **prepend\(rule,field = undefined\)** 在field的字段之前输入指定表单元素,不传入field默认在第一个

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
});
```

* **append\(rule,field = undefined\)** 在field的字段之前输入指定表单元素,不传入field默认在最后一个

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

* **submitStatus\(props\)** 修改表单提交按钮状态

```javascript
$f.submitStatus({
        //按钮类型，可选值为primary、ghost、dashed、text、info、success、warning、error或者不设置
        type:"primary",
        //按钮大小，可选值为large、small、default或者不设置
        size:"large",
        //按钮形状，可选值为circle或者不设置
        shape:undefined,
        //开启后，按钮的长度为 100%
        long:true,
        //设置button原生的type，可选值为button、submit、reset
        htmlType:"button",
        //设置按钮为禁用状态
        disabled:false,
        //设置按钮的图标类型
        icon:"ios-upload",
        //按钮文字提示
        innerText:"提交",
        //设置按钮为加载中状态
        loading:false
})
```

* **btn.loading\(loading = true\)** 让表单提交按钮进入loading状态

* **btn.finish\(\)** 让表单提交按钮恢复正常状态

* **btn.disabled\(disabled = true\)** 设置提交按钮禁用状态

* **resetStatus\(props\) **修改表单重置按钮状态**配置与提交按钮相同**

* **resetBtn.loading\(loading = true\)** 让重置按钮进入loading状态

* **resetBtn.finish\(\)** 让表单提交按钮恢复正常状态

* **resetBtn.disabled\(disabled = true\)** 设置重置按钮禁用状态

---



