

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
- **row**: Form component layout configuration [Reference iview grid layout](https://www.iviewui.com/components/grid)
- **submitBtn**: Submit button style configuration
- **resetBtn**: reset button style configuration
- **info**: component prompt message configuration



## form

- **Type**：`Object`

- **Description**：Form overall display rule configuration

- **Defaults**:

  ```js
  {
    inline:false,
    labelPosition:'right',
    labelWidth:125,
    showMessage:true,
    autocomplete:'off',
    size:undefined

  }
  ```

- Reference: [Form props](https://www.iviewui.com/components/form#Form_props)





## row

- **Type**：`Object`

- **Description**：Form component layout configuration

- **Defaults**:

  ```js
  {

    gutter:0,
    type:undefined,
    align:undefined,
    justify:undefined,
    className:undefined

  }
  ```

- Reference: [Row props](https://www.iviewui.com/components/grid#Row_props)


## submitBtn

- **Type**：`Object`

- **Description**：Submit button style and layout configuration

- **Defaults**:

  ```js
  {
    type:"primary",
    size:"large",
    shape:undefined,
    long:true,
    htmlType:"button",
    disabled:false,
    icon:"ios-upload",
    innerText:"提交",
    loading:false,
    show:true,
    col:undefined
  }
  ```

  提Turn button configuration, do not show the button when submitBtn = false or submitBtn.show = false

- Reference: [Layout](/v2/iview/col.html) | [Button_props](https://www.iviewui.com/components/button#Button_props)





## resetBtn

- **Type**：`Object`

- **Description**：Reset button style and layout configuration

- **Defaults**:

  ```js
  {

    type:"ghost",
    size:"large",
    shape:undefined,
    long:true,
    htmlType:"button",
    disabled:false,
    icon:"refresh",
    innerText:"重置",
    loading:false,
    show:false,
    col:undefined
  }
  ```

  Reset button default configuration, displayed when resetBtn = true or resetBtn.show = true

- Reference: [Layout](/en/v2/iview/col.html) | [Button_props](https://www.iviewui.com/components/button#Button_props)



## info

- **Type**：`Object`

- **Description**：Component prompt message configuration

- **Defaults**:

  ```js
  {
    type:"poptip"
  }
  ```

  The properties of the prompt component can be set in the `info` configuration item

- Reference: [Poptop_props](https://iviewui.com/components/poptip#Poptip_props) | [Tooltip_props](https://iviewui.com/components/tooltip#Tooltip_props)
