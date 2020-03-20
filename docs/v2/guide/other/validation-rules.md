# 校验规则

可以通过 validate 配置项设置组件的验证规则,自定义的表单组件也支持校验

[在线示例](http://jsrun.pro/LchKp/edit)

:::tip
type 需要根据组件的 value 类型定义
:::

### 验证 input 组件必填

::: demo
```html
<template>
    <FormCreate :rule="rule" v-model="fApi" :option="options"/>
</template>

<script>
    export default {
        data(){
            return {
                fApi:{},
                options:{
                    onSubmit:(formData)=>{
                        alert(JSON.stringify(formData));
                    }
                },
                rule:[
                    {
                        type:'input',
                        field:'name',
                        title:'名称',
                        validate: [{type: 'string', required: true, message:'请输入名称'}]
                    }
                ]
            }
            
        }
    }
</script>
```
:::
### 验证 InputNumber 组件最小为10

::: demo
```html
<template>
    <FormCreate :rule="rule" v-model="fApi" :option="options"/>
</template>

<script>
    export default {
        data(){
            return {
                fApi:{},
                options:{
                    onSubmit:(formData)=>{
                        alert(JSON.stringify(formData));
                    }
                },
                rule:[
                    {
                        type:'inputNumber',
                        field:'number',
                        title:'数字',
                        validate: [{type: 'number', min:10, required: true, message:'最小为10'}]
                    }
                ]
            }
            
        }
    }
</script>
```
:::


### 验证 date 组件必填

::: demo
```html
<template>
    <FormCreate :rule="rule" v-model="fApi" :option="options"/>
</template>

<script>
    export default {
        data(){
            return {
                fApi:{},
                options:{
                    onSubmit:(formData)=>{
                        alert(JSON.stringify(formData));
                    }
                },
                rule:[
                    {
                        type:'datePicker',
                        field:'date',
                        title:'日期',
                        value: '',
                        validate: [{type: 'date', required: true, message:'请选择日期'}]
                    },
                    {
                        type:'datePicker',
                        field:'dateRange',
                        title:'日期区间',
                        value: '',
                        props:{
                            type:'datetimerange'
                        },
                        validate: [{type: 'array', fields:{
                            0:{type: 'date', required: true, message:'请选择日期'},
                            1:{type: 'date', required: true, message:'请选择日期'}
                        },required: true, message:'请选择日期区间'}]
                    }
                ]
            }
            
        }
    }
</script>
```
:::


### 验证 checkbox 组件最少选择3个

::: demo
```html
<template>
    <FormCreate :rule="rule" v-model="fApi" :option="options"/>
</template>

<script>
    export default {
        data(){
            return {
                fApi:{},
                options:{
                    onSubmit:(formData)=>{
                        alert(JSON.stringify(formData));
                    }
                },
                rule:[
                    {
                        type:'checkbox',
                        field:'label',
                        title:'标签',
                        value: [],
                        options:[
                            {label:'好用',value:0},
                            {label:'快速',value:1},
                            {label:'高效',value:2},
                            {label:'全能',value:3},
                        ],
                        validate: [{type: 'array', min:3, required: true, message:'最少选择3个'}]
                    }
                ]
            }
            
        }
    }
</script>
```
:::


### 验证规则说明

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

