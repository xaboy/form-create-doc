# Component common configuration

Through the `global` configuration items in the global configuration, you can implement the common configuration of the component, and support setting all configuration items

[Global configuration](/en/v2/guide/global-options.html)

### Example

1. Set col for all components to `{span: 6}` and disable it
2. Set callback events for all upload components that fail to upload

::: demo
```html
<template>
    <form-create :rule="rule" v-model="fApi" :option="options"/>
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
                                  alert('upload failed');
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
                        title:'upload image',
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