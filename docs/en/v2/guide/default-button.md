# Modify the default button

This article will show you how to use a custom component button instead of the default button

[Set global configuration](/en/v2/guide/global-options.html)

### Hide the default button

First hide the default action button of the form by setting the global configuration
```js
{
  submitBtn: false,
  resetBtn: false
}
```


### Custom form action buttons

::: demo
```html
<template>
     <div>
        <form-create :rule="rule" v-model="fApi" :option="options"/>
        <ElButton type="primary" plain @click="submit">Submit</ElButton>
        <ElButton aligen="center" plain @click="reset">Reset</ElButton>
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
                        title:'label',
                        value: [],
                        options:[
                            {label:'easyToUse',value:0},
                            {label:'fast',value:1},
                            {label:'efficient',value:2},
                            {label:'allRound',value:3},
                        ],
                        validate: [{type: 'array', min:3, required: true, message:'Select at least 3'}]
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