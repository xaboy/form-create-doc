

# UI配置


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

全局配置中额外支持一下配置项

- **form**：表单整体显示规则配置
- **row**：表单组件布局配置
- **submitBtn**：提交按钮样式配置
- **resetBtn**：重置按钮样式配置
- **info**：组件提示消息配置



## form

- **类型**：`Object`

- **说明**：表单整体显示规则配置

- **默认值**:

  ```js
  {
      hideRequiredMark: false,
      layout: 'horizontal',
      labelAlign: 'right',
      labelCol: {
          span: 4
      },
      wrapperCol: {
          span: 20
      },
      colon: undefined,
      validateOnRuleChange: true
  }
  ```

- 参考: [Form props](https://www.antdv.com/components/form-model-cn/#Form)





## row

- **类型**：`Object`

- **说明**：表单组件布局配置

- **默认值**:

  ```js
  {
      gutter: 0,
      type: undefined,
      align: undefined,
      justify: undefined
  }
  ```

- 参考: [Row props](https://www.antdv.com/components/grid-cn/#Row)


## submitBtn

- **类型**：`Object`

- **说明**：提交按钮样式和布局配置

- **默认值**:

  ```js
  {
      disabled: false,
      ghost: false,
      icon: 'upload',
      loading: false,
      shape: UNDEF,
      size: UNDEF,
      type: 'primary',
      block: true,
      innerText: '提交',
      htmlType: UNDEF,
      show: true,
      col: UNDEF,
      click: UNDEF,
  }
  ```

  提交按钮配置,设置submitBtn=false或submitBtn.show=false时不显示按钮

- 参考: [布局规则](/v2/ant-design-vue/col.html) | [Button_props](https://www.antdv.com/components/button-cn/#API)


## resetBtn

- **类型**：`Object`

- **说明**：重置按钮样式和布局配置

- **默认值**:

  ```js
  {
      disabled: false,
      ghost: false,
      icon: 'sync',
      loading: false,
      shape: UNDEF,
      size: UNDEF,
      type: 'default',
      block: true,
      innerText: '重置',
      htmlType: UNDEF,
      show: false,
      col: UNDEF,
      click: UNDEF
  }
  ```

  重置按钮默认配置,设置resetBtn=true或resetBtn.show=true时显示

- 参考: [布局规则](/v2/ant-design-vue/col.html) | [Button_props](https://www.antdv.com/components/button-cn/#API)


## info <Badge type="warn" text="0.0.4+"/>

- **类型**：`Object`

- **说明**：组件提示消息配置

- **默认值**:

  ```js
  {
    //提示消息类型,popover,tooltip
    type: "popover",
    placement: 'topLeft',
    icon: 'question-circle-o'
  }
  ```

  可以在`info`配置项中设置提示组件的属性

- 提示组件: [Popover_props](https://www.antdv.com/components/popover-cn/#API) | [Tooltip_props](https://www.antdv.com/components/tooltip-cn/#%E5%85%B1%E5%90%8C%E7%9A%84-API)
