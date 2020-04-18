

# Global config

## Setting global configuration

- Component mode

```html
<form-create :option="option"></form-create>
```

- Global method

```js
Vm.$formCreate(rule,option)
window.formCreate.create(rule,option)
```


## Structure

Additional configuration items are supported in global configuration

- **form**: The overall display rule configuration of the form
- **row**: form component layout configuration
- **submitBtn**: Submit button style configuration
- **resetBtn**: reset button style configuration
- **info**: component prompt message configuration



## form

- **Type**：`Object`

- **Description**：Form overall display rule configuration

- **Defaults**:

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

- Reference: [Form props](http://element.eleme.io/#/zh-CN/component/form)





## row

- **Type**：`Object`

- **Description**：Form component layout configuration

- **Defaults**:

  ```js
  {
    gutter: 0,
    type: undefined,
    align: undefined,
    justify: undefined,
    tag: 'div'
  }
  ```

- Reference: [Row props](http://element.eleme.io/#/zh-CN/component/layout)


## submitBtn

- **Type**：`Object`

- **Description**：Submit button style and layout configuration

- **Defaults**:

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

  Submit button configuration, do not show the button when submitBtn = false or submitBtn.show = false

- Reference: [Layout](/v2/element-ui/col.html) | [Button_props](http://element.eleme.io/#/zh-CN/component/button)


## resetBtn

- **Type**：`Object`

- **Description**：Reset button style and layout configuration

- **Defaults**:

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

  Reset button default configuration, displayed when resetBtn = true or resetBtn.show = true

- Reference: [Layout](/v2/element-ui/col.html) | [Button_props](http://element.eleme.io/#/zh-CN/component/button)


## info

- **Type**：`Object`

- **Description**：Component prompt message configuration

- **Defaults**:

  ```js
  {
    type:"popover"
  }
  ```

 The properties of the prompt component can be set in the `info` configuration item

- Reference: [Popover_props](https://element.eleme.io/#/zh-CN/component/popover) | [Tooltip_props](https://element.eleme.io/#/zh-CN/component/tooltip)
