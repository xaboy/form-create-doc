# 设置组件的插槽 slot

## 默认插槽

设置组件的默认插槽


::: demo
```html
<template>
<div>
    <FormCreate :rule="rule" v-model="fApi" :option="options"/>
</div>
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
                    submitBtn:false,
                    resetBtn:false
                },
                rule:[
                    {
                        type:'el-button',
                        children:['方式1']
                    },
                    {
                        type:'el-button',
                        children:[{
                            type:'i',
                            class:'el-icon-check'
                        },' 方式2']
                    }
                ]
            }
            
        }
    }
</script>
```
:::


## 指定插槽

给input组件通过`prefix`和`suffix`插槽设置前缀及后缀图标


::: demo
```html
<template>
<div>
    <FormCreate :rule="rule" v-model="fApi" :option="options"/>
</div>
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
                    submitBtn:false,
                    resetBtn:false
                },
                rule:[
                    {
                        type: 'input',
                        field: 'input',
                        title: '插槽',
                        children: [
                           {
                                type:'i',
                                class:'el-icon-check',
                                slot: 'prefix',
                           },
                           {
                                type:'i',
                                class:'el-icon-check',
                                slot: 'suffix',
                           },
                        ]
                    }
                ]
            }
            
        }
    }
</script>
```
:::