# Validation rules

You can set validation rules for components through the validate configuration item.Custom form components also support validation.

[Online example](http://jsrun.pro/LchKp/edit)

:::tip
type needs to be defined according to the value type of the component
:::

### Verify input component is required

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
                        title:'name',
                        validate: [{type: 'string', required: true}]
                    }
                ]
            }
            
        }
    }
</script>
```
:::
### Verify that the InputNumber component is at least 10

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
                        title:'number',
                        validate: [{type: 'number', min:10, required: true}]
                    }
                ]
            }
            
        }
    }
</script>
```
:::


### Verify date component is required

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
                        title:'date',
                        value: '',
                        validate: [{type: 'date', required: true}]
                    },
                    {
                        type:'datePicker',
                        field:'dateRange',
                        title:'dateRange',
                        value: '',
                        props:{
                            type:'datetimerange'
                        },
                        validate: [{type: 'array', fields:{
                            0:{type: 'date', required: true, message:'Please select a date'},
                            1:{type: 'date', required: true, message:'Please select a date'}
                        },required: true, message:'Please select a date range'}]
                    }
                ]
            }
            
        }
    }
</script>
```
:::


### Validate at least 3 checkbox components

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
                        title:'label',
                        value: [],
                        options:[
                            {label:'easyToUse',value:0},
                            {label:'fast',value:1},
                            {label:'efficient',value:2},
                            {label:'allRound',value:3},
                        ],
                        validate: [{type: 'array', min:3, required: true}]
                    }
                ]
            }
            
        }
    }
</script>
```
:::

### Validation Rule Description

Parameter | Description | Type | Default |
| ---------- | ------------------------------------------------------------ | --------------------------------------- | -------- |
enum | enumeration type | string |-|
| len | Field Length | number |-|
| max | maximum length | number |-|
message | check copy | string |-|
| min | minimum length | number |-|
pattern | Regular Expression Checking | RegExp |-|
| required | required | boolean | `false` |
transform | transform field value before validation | function (value) => transformedValue: any |-|
type | Built-in validation type, [optional](https://github.com/yiminghe/async-validator#type) | string | 'string' |
validator | custom validation | function (rule, value, callback) |-|
whitespace | If required, whether whitespace will be treated as an error | boolean | `false` |

More advanced usage can be studied in [async-validator](https://github.com/yiminghe/async-validator).
