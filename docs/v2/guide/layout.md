# 自定义布局

通过设置配置项`col`可以实现组件的布局

[iview Col](/v2/iview/col) | [element-ui Col](/v2/element-ui/col)
- **使用内置`col`布局规则**
> 当没有设置col时默认为{span:24}
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
                        title:'col24',
                        field:'col24_1',
                    },
                    {
                        type:'input',
                        title:'col12',
                        field:'col12_1',
                        col:{
                            span:12
                        }
                    },
                    {
                        type:'input',
                        title:'col12',
                        field:'col12_2',
                        col:{
                            span:12
                        }
                    },
                    {
                        type:'input',
                        title:'col8',
                        field:'col8_1',
                        col:{
                            span:8
                        }
                    },
                    {
                        type:'input',
                        title:'col8',
                        field:'col8_2',
                        col:{
                            span:8
                        }
                    },
                    {
                        type:'input',
                        title:'col8',
                        field:'col8_3',
                        col:{
                            span:8
                        }
                    },
                    {
                        type:'input',
                        title:'col8|offset8',
                        field:'col8_3',
                        col:{
                            span:8,
                            offset:8
                        }
                    }
                ]
            }
        }
    }
</script>
```
:::

- **使用栅格布局组件**
::: demo
```html
<template>
    <FormCreate :rule="rule" v-model="fApi" :option="options"/>
</template>

<script>
    export default {
        data() {
            return {
                fApi: {},
                options: {
                    onSubmit: (formData) => {
                        alert(JSON.stringify(formData));
                    }
                },
                rule: [
                    {
                        type: 'el-row',
                        native: true,
                        children: [
                            {
                                type: 'el-col',
                                props: {
                                    span: 12
                                },
                                children: [
                                    {
                                        type: 'datePicker',
                                        title: '活动日期',
                                        field: 'section_day',
                                        value: ['2018-02-20 12:12:12', '2018-03-20 12:12:12'],
                                        props: {
                                            type: 'datetimerange'
                                        }

                                    },
                                    {
                                        type: 'timePicker',
                                        title: '活动时间',
                                        field: 'section_time',
                                        value: ['11:11:11', '22:22:22'],
                                        props: {
                                            isRange: true,
                                            placeholder: "请选择活动时间"
                                        }

                                    },
                                ]
                            },
                            {
                                type: 'el-col',
                                props: {
                                    span: 24
                                },
                                children: [
                                    {
                                        type: 'inputNumber',
                                        title: '排序',
                                        field: 'sort',
                                        value: 0,
                                        props: {
                                            precision: 2
                                        },
                                        col: {
                                            span: 12
                                        },
                                        validate: [{require: true, type: 'number', min: 10, message:'最小为10'}]
                                    },
                                    {
                                        type: 'colorPicker',
                                        title: '颜色',
                                        field: 'color',
                                        value: '#ff7271',
                                        props: {
                                            hue: true,
                                            format: 'hex'
                                        },
                                        col: {
                                            span: 12
                                        }
                                    },
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>
```
:::