# 组件公共配置

通过全局配置中的`global`配置项可实现组件的公共配置,支持设置组件所有的配置项

[全局配置](/v2/guide/global-options.html)

### 示例

1. 设置所有组件的`col`为`{span:6}`,并且禁用
2. 设置所有 `upload` 组件上传失败的回调事件

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
                    },
                    global: {
                        '*': {
                            props: {
                                disabled: true
                            },
                            col: {
                                span: 12
                            }
                        },
                        upload: {
                            props: {
                                onError: function(r){
                                  alert('上传失败');
                                }
                            }
                        }
                    }
                },
                rule:[
                    {
                        type:'input',
                        field:'input1',
                        title:'input1'
                    },
                    {
                        type:'input',
                        field:'input2',
                        title:'input2'
                    },
                    {
                        type:'input',
                        field:'input3',
                        title:'input3',
                        col:{
                            span:24
                        }
                    },
                    {
                        type:'input',
                        field:'input3',
                        title:'input3',
                        col:{
                            span:24
                        }
                    },
                    {
                        type:'upload',
                        field:'upload',
                        title:'上传图片',
                        value:'',
                        props:{
                            disabled: false,
                            action: '/'
                        }
                    }
                ]
            }
            
        }
    }
</script>
```
:::