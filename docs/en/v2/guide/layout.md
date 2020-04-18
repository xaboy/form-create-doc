# Custom layout

The layout of the component can be achieved by setting the configuration item `col`

[iview Col](/en/v2/iview/col.html) | [element-ui Col](/en/v2/element-ui/col.html)
- **Use built-in `col` layout rules**
> Default is {span: 24} when col is not set
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

- **Use grid layout components**
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
                                        title: 'Event date',
                                        field: 'section_day',
                                        value: ['2018-02-20 12:12:12', '2018-03-20 12:12:12'],
                                        props: {
                                            type: 'datetimerange'
                                        }

                                    },
                                    {
                                        type: 'timePicker',
                                        title: 'Activity time',
                                        field: 'section_time',
                                        value: ['11:11:11', '22:22:22'],
                                        props: {
                                            isRange: true,
                                            placeholder: "Please select an Activity time"
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
                                        title: 'sort',
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
                                        title: 'color',
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