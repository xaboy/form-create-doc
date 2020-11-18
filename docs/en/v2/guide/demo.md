# Example

The following is a demo and reference case for from-create

## Simple example

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
                    resetBtn:true
                },
                rule:[
                    {
                        type:'input',
                        field:'goods_name',
                        title:'goods name'
                    },
                    {
                        type:'checkbox',
                        field:'label',
                        title:'label',
                        options: [
                            {label:'easyToUse',value:0},
                            {label:'fast',value:1},
                            {label:'efficient',value:2},
                            {label:'allRound',value:3},
                        ]
                    },
                ]
            }
            
        }
    }
</script>
```
:::
## Component Example

- [Input](http://jsrun.pro/7ehKp/edit)
- [AutoComplete](http://jsrun.pro/TnhKp/edit)
- [Radio](http://jsrun.pro/cehKp/edit)
- [Cascader](http://jsrun.pro/EehKp/edit)
- [Upload](http://jsrun.pro/dehKp/edit)
- [Select](http://jsrun.pro/FehKp/edit)
- [Checkbox](http://jsrun.pro/JehKp/edit)
- [InputNumber](http://jsrun.pro/xehKp/edit)
- [TimePicker](http://jsrun.pro/GehKp/edit)
- [DatePicker](http://jsrun.pro/HehKp/edit)
- [Switch](http://jsrun.pro/5ehKp/edit)
- [ColorPicker](http://jsrun.pro/tehKp/edit)
- [Rate](http://jsrun.pro/CehKp/edit)
- [Slider](http://jsrun.pro/rehKp/edit)
- [Tree](http://jsrun.pro/AehKp/edit)
- [Frame](http://jsrun.pro/mehKp/edit)
- [Array components/Component nesting](http://jsrun.pro/VLfKp/edit)
- [control Configuration item](http://jsrun.pro/C8fKp/edit)


## Function example

- [Generate form using json parameter](http://jsrun.pro/NQhKp/edit)
- [Use the maker generator to generate the form](http://jsrun.pro/LQhKp/edit)
- [Validator Form Validation](http://jsrun.pro/LchKp/edit)
- [Dynamic Add Dynamic Add Component](http://jsrun.pro/WchKp/edit)
- [Bind two-way data binding](http://jsrun.pro/bchKp/edit)
- [Generate generate arbitrary components](http://jsrun.pro/ychKp/edit)
- [Event Event Extension](http://jsrun.pro/XchKp/edit)
- [Col Grid Layout Rule](http://jsrun.pro/gchKp/edit)

## Case

- [Deep use of maker custom component case](https://github.com/HeyMrLin/fc-demo)
