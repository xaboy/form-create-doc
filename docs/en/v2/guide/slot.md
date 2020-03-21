# Set component slot

## Default slot

Set the default slot for the component


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
                        children:['Way 1']
                    },
                    {
                        type:'el-button',
                        children:[{
                            type:'i',
                            class:'el-icon-check'
                        },' Way 2']
                    }
                ]
            }
            
        }
    }
</script>
```
:::


## Designated slot

Set prefix and suffix icons for input components via `prefix` and` suffix` slots


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
                        title: 'slot',
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