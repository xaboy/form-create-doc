# 校验规则

可以通过 validate 配置项设置组件的验证规则,自定义的表单组件也支持校验

[在线示例](http://jsrun.pro/LchKp/edit)

:::tip
type 需要根据组件的 value 类型定义
:::

### 示例

验证 input 组件必填
```js
{
    type:'input',
    //...
    validate: [{type: 'string', required: true}]
}
```

验证 date 组件必填
```js
{
    type:'datePicker',
    //...
    validate: [{type: 'date', required: true}]
}
```

验证 checkbox 组件 最少选择三个
```js
{
    type:'checkbox',
    //...
    validate: [{type: 'array', required: true, min:3}]
}
```


### 参数说明

| 参数       | 说明                                                         | 类型                                    | 默认值   |
| ---------- | ------------------------------------------------------------ | --------------------------------------- | -------- |
| enum       | 枚举类型                                                     | string                                  | -        |
| len        | 字段长度                                                     | number                                  | -        |
| max        | 最大长度                                                     | number                                  | -        |
| message    | 校验文案                                                     | string                                  | -        |
| min        | 最小长度                                                     | number                                  | -        |
| pattern    | 正则表达式校验                                               | RegExp                                  | -        |
| required   | 是否必选                                                     | boolean                                 | `false`  |
| transform  | 校验前转换字段值                                             | function(value) => transformedValue:any | -        |
| type       | 内建校验类型，[可选项](https://github.com/yiminghe/async-validator#type) | string                                  | 'string' |
| validator  | 自定义校验 | function(rule, value, callback)         | -        |
| whitespace | 必选时，空格是否会被视为错误                                 | boolean                                 | `false`  |

更多高级用法可研究 [async-validator](https://github.com/yiminghe/async-validator)。

