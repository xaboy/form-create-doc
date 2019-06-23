

# UI配置



## 构成

全局配置中额外支持一下配置项

- **form**：表单整体显示规则配置
- **row**：表单组件布局配置  [参考iview栅格布局](https://www.iviewui.com/components/grid)
- **submitBtn**：提交按钮样式配置
- **resetBtn**：重置按钮样式配置



## form

- **类型**：`Object`

- **说明**：表单整体显示规则配置

- **默认值**:

  ```js
  {

    //是否开启行内表单模式
    inline:false,
    //表单域标签的位置，可选值为 left、right、top
    labelPosition:'right',
    //表单域标签的宽度，所有的 FormItem 都会继承 Form 组件的 label-width 的值
    // labelPosition为"top"时,需要手动设置 labelWidth 为 undefined
    labelWidth:125,
    //是否显示校验错误信息
    showMessage:true,
    //原生的 autocomplete 属性，可选值为 off 或 on
    autocomplete:'off',
    //所有带有 size 属性的组件的尺寸，默认为不设置，详见各组件默认的 size 值。可选值为 default、small 或 large。
    size:undefined

  }
  ```

- 参考: [Form props](https://www.iviewui.com/components/form#Form_props)





## row

- **类型**：`Object`

- **说明**：表单组件布局配置

- **默认值**:

  ```js
  {

    //栅格间距，单位 px，左右平分
    gutter:0,
    //布局模式，可选值为flex或不选，在现代浏览器下有效
    type:undefined,
    //flex 布局下的垂直对齐方式，可选值为top、middle、bottom
    align:undefined,
    //flex 布局下的水平排列方式，可选值为start、end、center、space-around、space-between
    justify:undefined,
    //自定义的class名称
    className:undefined

  }
  ```

- 参考: [Row props](https://www.iviewui.com/components/grid#Row_props)


## submitBtn

- **类型**：`Object`

- **说明**：提交按钮样式和布局配置

- **默认值**:

  ```js
  {
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
    loading:false,
    //是否显示,默认显示
    show:true,
    //设置提交按钮布局规则,参考栅格布局规则
    col:undefined
  }
  ```

  提交按钮配置,设置submitBtn=false或submitBtn.show=false时不显示按钮

- 参考: [布局规则](/v2/iview/col.html) | [Button_props](https://www.iviewui.com/components/button#Button_props)





## resetBtn

- **类型**：`Object`

- **说明**：重置按钮样式和布局配置

- **默认值**:

  ```js
  {

    //配置说明同上
    type:"ghost",
    size:"large",
    shape:undefined,
    long:true,
    htmlType:"button",
    disabled:false,
    icon:"refresh",
    innerText:"重置",
    loading:false,
    //默认不显示
    show:false,
    //设置重置按钮布局规则,参考栅格布局规则
    col:undefined
  }
  ```

  重置按钮默认配置,设置resetBtn=true或resetBtn.show=true时显示

- 参考: [布局规则](/v2/iview/col.html) | [Button_props](https://www.iviewui.com/components/button#Button_props)

