

# UI配置



## 构成

全局配置中额外支持一下配置项

- **form**：表单整体显示规则配置
- **row**：表单组件布局配置
- **submitBtn**：提交按钮样式配置
- **resetBtn**：重置按钮样式配置



## form

- **类型**：`Object`

- **说明**：表单整体显示规则配置

- **默认值**:

  ```js
  {
    //行内表单模式
    inline: false,
    //表单域标签的位置，如果值为 left 或者 right 时，则需要设置 label-width
    labelPosition: 'right',
    //表单域标签的后缀
    labelSuffix: undefined,
    //是否显示必填字段的标签旁边的红色星号
    hideRequiredAsterisk: false,
    //表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 auto。
    labelWidth: '125px',
    //是否显示校验错误信息
    showMessage: true,
    //是否以行内形式展示校验信息
    inlineMessage: false,
    //是否在输入框中显示校验结果反馈图标
    statusIcon: false,
    //是否在 rules 属性改变后立即触发一次验证
    validateOnRuleChange: true,
    //是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效
    disabled: false,
    //用于控制该表单内组件的尺寸 medium / small / mini
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
    //栅格间隔
    gutter: 0,
    //布局模式，可选 flex，现代浏览器下有效
    type: undefined,
    //flex 布局下的垂直排列方式 top/middle/bottom
    align: undefined,
    //flex 布局下的水平排列方式 start/end/center/space-around/space-between
    justify: undefined,
    //自定义元素标签
    tag: 'div'
  }
  ```

- 参考: [Row props](http://element.eleme.io/#/zh-CN/component/layout)


## submitBtn

- **类型**：`Object`

- **说明**：提交按钮样式和布局配置

- **默认值**:

  ```js
  {
    //类型 primary / success / warning / danger / info / text
    type: "primary",
    //尺寸 medium / small / mini
    size: "medium",
    //是否朴素按钮
    plain: false,
    //是否圆角按钮
    round: false,
    //是否圆形按钮
    circle: false,
    //是否加载中状态
    loading: false,
    //是否禁用状态
    disabled: false,
    //图标类名
    icon: 'el-icon-upload',
    //按钮宽度
    width: '100%',
    //是否默认聚焦
    autofocus: false,
    //原生 type 属性
    nativeType: "button",
    //按钮内容
    innerText: "提交",
    //按钮是否显示
    show: true,
    //按钮布局规则
    col: undefined,
    //按钮点击事件
    click: undefined,
  }
  ```

  提交按钮配置,设置submitBtn=false或submitBtn.show=false时不显示按钮

- 参考: [布局规则](/v2/element-ui/col.html) | [Button_props](http://element.eleme.io/#/zh-CN/component/button)


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

- 参考: [布局规则](/v2/element-ui/col.html) | [Button_props](http://element.eleme.io/#/zh-CN/component/button)

