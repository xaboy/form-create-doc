
# 全局配置

可以在全局配置中配组件的一些公共属性。

## 设置全局配置

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

**基础配置**

- el：表单插入的节点
- onSubmit：表单提交回调函数
- onReload：表单重载后回调函数
- mounted：表单创建成功后回调函数
- formData：表单初始值
- global：组件全局配置
- injectEvent：开启事件中注入自定义参数

**UI 框架配置**

- form：表单整体显示规则配置
- row：表单组件布局配置
- submitBtn：提交按钮样式配置
- resetBtn：重置按钮样式配置
- ...


## 基础配置

### el

- **类型**：`string | HTMLElement`
- **说明**：提供一个在页面上已存在的 DOM 元素作为表单的挂载目标,**组件模式下无需设置**


### onSubmit

- **类型**：`Function`

- **参数**：
  - `Object` formData
  - `Object` $f


- **说明**：表单提交回调函数

- **示例**：

  通过 option 设置
  ```js
  {
    onSubmit:function(formData,$f){
      //TODO ajax提交表单
    }
  }
  ```
  通过标签设置

  ```html
  <form-create @on-submit="onSubmit"></form-create>
  ```




### onReload

- **类型**：`Function`

- **参数**：
  - `Object` $f

- **说明**：表单重载后回调函数

- **示例**：

  通过 option 设置
  ```js
  {
    onReload:function($f){
      //TODO 
    }
  }
  ```

  通过标签设置
  ```html
  <form-create @on-reload="onReload"></form-create>
  ```



### mounted

- **类型**：`Function`

- **参数**：
  - `Object` $f

- **说明**：表单创建成功后回调函数

- **示例**：

  通过 option 设置
  ```js
  {
    mounted: function($f){
      //TODO
      //TODO 表单创建成功,可在此操作表单
    }
  }
  ```

  通过标签设置
  ```html
  <form-create @mounted="onMounted"></form-create>
  ```


### injectEvent <Badge type="warn" text="0.0.5+"/>

- **类型**：`Boolean`

- **说明**：开启事件中注入自定义参数

- **示例**：

  ```js
  {
    injectEvent:  true
  }
  ```

  注入参数的数据结构
  ```js
  {
      $f:Object,//api
      rule:Array,//生成规则
      self:Object,//当前生成规则
      option:Object,//全局配置
      inject:Any,//自定义注入的参数
  }
  ```


### formData <Badge type="warn" text="1.0.4+"/>

- **类型**：`Object`

- **说明**：设置表单初始值

- **示例**：

  ```js
  {
     field1:  'value1'
     field2:  'value2'
     field3:  'value3'
  }
  ```

### global

#### 组件通用配置

- **类型**：`Object`

- **说明**：设置所有组件的通用规则

- **示例**：

  ```js
  {
    global:{
      //设置所有组件
      '*':{
        col:{
          span:12
        },
        props:{
          disabled:false
        }
      }
    }
  }
  ```

#### 指定组件全局配置

- **类型**：`Object`

- **说明**：设置指定组件的全局配置,

- **示例**：

  ```js
  {
    global:{
      //设置 inputNumber 组件
      'inputNumber':{
        props:{
          disabled:true,
          precision:2
        }
      }
    }
  }
  ```
> 这里的组件名称必须和生成规则里面 `type` 相同


## UI 配置

- [Iview](/v2/iview/global.html)
- [ElementUI](/v2/element-ui/global.html)
