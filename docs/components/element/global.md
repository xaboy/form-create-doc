---
sidebarDepth: 3
---



# 全局配置

使用时，可以进行全局配置组件的一些属性。

## 配置

- 组件模式

```html
<form-create :option="option"></form-create>
```

- 全局方法

```js
vm.$formCreate(rule,option)
window.formCreate.create(rule,option)
```



## 构成

全局配置由一下几个部分构成。

- **el**：表单插入的节点,组件模式下无需设置
- **switchMaker**：是否自动转换规则中的 maker 生成器为对象
- **iframeHelper**：是否开启iframe组件子页面助手函数,**跨域无效**
- **onSubmit**：**表单提交回调函数**
- **onReload**：**表单重载后回调函数**<Badge text="1.5.3+"/>
- **mounted**：**表单创建成功后回调函数**
- **form**：表单整体显示规则配置
- **row**：表单组件布局配置  [参考Element布局](http://element.eleme.io/#/zh-CN/component/layout)
- **upload**：upload组件全局配置
- **submitBtn**：提交按钮样式配置
- **resetBtn**：重置按钮样式配置



## el

- **类型**：`string | HTMLElement`
- **说明**: 提供一个在页面上已存在的 DOM 元素作为表单的挂载目标,**组件模式下无需设置**





## switchMaker

- **类型**：`bool`
- **默认**： `true`
- **说明**：是否自动转换规则中的 maker 生成器为对象



## iframeHelper

- **类型**：`bool`

- **默认**： `false`

- **说明**：是否开启iframe组件子页面助手函数,**跨域无效**

- **示例**：

  ```js
  //在iframe 子页面中,field 为字段名
  //field 只能为生成iframe 组件的 field,其他无效

  //修改表单 field 字段的值
  window[`${field}_change`](value);
  window.form_create_helper.set(field,value);

  //获取 field 字段的值
  window.form_create_helper.get(field)

  //关闭 iframe
  window.form_create_helper.close(field)
  ```


## onSubmit

- **类型**：`Function`

- **说明**：表单提交回调函数

- **示例**:

  ```js
  {
    onSubmit(formData){
      	//TODO
      	//ajajx提交表单
    }
  }
  ```




## onReload <Badge text="1.5.3+"/>

- **类型**：`Function`
- **说明**：表单重载后回调函数

- **示例**:

  ```js
  {
    onReload($f){
      //TODO
      //更新$f
    }
  }
  ```

  表单重载后回调函数`onReload`全局配置项,可用于更新`$f`



## mounted

- **类型**：`Function`
- **说明**：表单创建成功后回调函数

- **示例**:

  ```js
  {
    mounted($f){
      //TODO
      // 表单创建成功,可在此操作表单
    }
  }
  ```





## form

- **类型**：`Object`

- **说明**：表单整体显示规则配置

- **默认值**:

  ```js
  {
    inline: false,
    labelPosition: 'right',
    labelSuffix: undefined,
    hideRequiredAsterisk: false,
    labelWidth: '125px',
    showMessage: true,
    inlineMessage: false,
    statusIcon: false,
    validateOnRuleChange: true,
    disabled: false,
    size: undefined,
  }
  ```

- 参考: [Form props](http://element.eleme.io/#/zh-CN/component/form)





## row

- **类型**：`Object`

- **说明**：表单组件布局配置

- **默认值**:

  ```js
  {
    gutter: 0,
    type: undefined,
    align: undefined,
    justify: undefined,
    tag: 'div'
  }
  ```

- 参考: [Row props](http://element.eleme.io/#/zh-CN/component/layout)





## upload

- **类型**：`Object`

- **说明**：upload组件全局配置

- **默认值**:

  ```js
  {
    onPreview: function (file) {
    },
    onRemove: function (file, fileList) {
    },
    onSuccess: function () {
    },
    onError: function (err, file, fileList) {
    },
    onProgress: function (event, file, fileList) {
    },
    onChange: function (file, fileList) {
    },
    beforeUpload: function (file) {
    },
    beforeRemove: function (file, fileList) {
    },
    allowRemove: true,
    handleIcon: true,

  }
  ```

- 参考: [Upload](/components/element/upload.html)



## submitBtn

- **类型**：`Object`

- **说明**：提交按钮样式和布局配置

- **默认值**:

  ```js
  {
    type: "primary",
    size: "medium",
    plain: false,
    round: false,
    circle: false,
    loading: false,
    disabled: false,
    icon: 'el-icon-upload',
    width: '100%',
    autofocus: false,
    nativeType: "button",
    innerText: "提交",
    show: true,
    col: undefined,
    click: undefined,
  }
  ```

  提交按钮配置,设置submitBtn=false或submitBtn.show=false时不显示按钮

- 参考: [布局规则](/guide/col.html) | [Button_props](http://element.eleme.io/#/zh-CN/component/button)





## resetBtn

- **类型**：`Object`

- **说明**：重置按钮样式和布局配置

- **默认值**:

  ```js
  {

    type: "default",
    size: "medium",
    plain: false,
    round: false,
    circle: false,
    loading: false,
    disabled: false,
    icon: 'el-icon-refresh',
    width: '100%',
    autofocus: false,
    nativeType: "button",
    innerText: "重置",
    show: false,
    col: undefined,
    click: undefined,
  }
  ```

  重置按钮默认配置,设置resetBtn=true或resetBtn.show=true时显示

- 参考: [布局规则](/guide/col.html) | [Button_props](http://element.eleme.io/#/zh-CN/component/button)





## 默认配置

下列是完整的配置项及配置说明。

```javascript
{

    //插入节点,默认document.body
    el:null,

	//是否自动转换规则中的 maker 生成器为对象
    switchMaker:true,

    //是否开启iframe组件子页面助手函数
    //`${field}_change(value)`
    //只能设置当前字段的 value
    //form_create_helper.close(field)
    //form_create_helper.get(field)
    //form_create_helper.set(field,value)
    //快速修改该组件的value. 跨域无效!!
    iframeHelper: false,


	//表单创建成功后回调函数
    mounted:($f)=>{},
    //表单提交事件
    onSubmit:(formData)=>{},
    //表单重载后回调函数`onReload`全局配置项,可用于更新`$f`
    //>=1.5.3版本
    onReload:($f)=>{},

    form: {
        inline: false,
        labelPosition: 'right',
        labelSuffix: undefined,
        hideRequiredAsterisk: false,
        labelWidth: '125px',
        showMessage: true,
        inlineMessage: false,
        statusIcon: false,
        validateOnRuleChange: true,
        disabled: false,
        size: undefined,
    },
    row: {
        gutter: 0,
        type: undefined,
        align: undefined,
        justify: undefined,
        tag: 'div'
    },
    upload: {
        onPreview: function (file) {
        },
        onRemove: function (file, fileList) {
        },
        onSuccess: function () {
        },
        onError: function (err, file, fileList) {
        },
        onProgress: function (event, file, fileList) {
        },
        onChange: function (file, fileList) {
        },
        beforeUpload: function (file) {
        },
        beforeRemove: function (file, fileList) {
        },
        allowRemove: true,
        handleIcon: true,
    },
    submitBtn: {
        type: "primary",
        size: "medium",
        plain: false,
        round: false,
        circle: false,
        loading: false,
        disabled: false,
        icon: 'el-icon-upload',
        width: '100%',
        autofocus: false,
        nativeType: "button",
        innerText: "提交",
        show: true,
        col: undefined,
        click: undefined,
    },
    resetBtn: {
        type: "default",
        size: "medium",
        plain: false,
        round: false,
        circle: false,
        loading: false,
        disabled: false,
        icon: 'el-icon-refresh',
        width: '100%',
        autofocus: false,
        nativeType: "button",
        innerText: "重置",
        show: false,
        col: undefined,
        click: undefined,
    },
};
```


