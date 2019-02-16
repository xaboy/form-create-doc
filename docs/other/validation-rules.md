### 校验规则

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
