# 修改默认按钮

本文将介绍如何使用自定义组件按钮代替默认按钮

[设置全局配置](/v2/guide/global-options.html)

### 隐藏默认按钮

首先通过设置全局配置隐藏表单默认的操作按钮
```js
{
  submitBtn: false,
  resetBtn: false
}
```


### 自定义表单操作按钮

::: demo
```html
<template>
     <div>
        <FormCreate :rule="rule" v-model="fApi" :option="options"/>
        <ElButton type="primary" plain @click="submit">提交</ElButton>
        <ElButton aligen="center" plain @click="reset">重置</ElButton>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                fApi:{},
                options:{
                     submitBtn:false
                },
                rule:[
                    {
                        type:'checkbox',
                        field:'label',
                        title:'标签',
                        value: [],
                        options:[
                            {label:'有用',value:0},
                            {label:'快速',value:1},
                            {label:'高效',value:2},
                            {label:'全能',value:3},
                        ],
                        validate: [{type: 'array', min:3, required: true, message:'最少选择3个'}]
                    }
                ]
            }
            
        },
        methods:{
            submit(){
                this.fApi.submit((formData, $f)=>{
                    alert(JSON.stringify(formData));
                })
            },
            reset(){
                this.fApi.resetFields();
            }
        }
    }
</script>
```
:::