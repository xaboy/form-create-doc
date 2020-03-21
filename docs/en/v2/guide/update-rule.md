# Update component rules


## Form component

::: demo
```html
<template>
<div>
    <FormCreate :rule="rule" v-model="fApi" :option="options"/>
    <h2 v-text="disabled? 'cancel' : 'disable'"></h2>
    <ElButton @click="disabled1">Way1</ElButton>
    <ElButton @click="disabled2">Way2</ElButton>
    <ElButton @click="disabled3">Way3</ElButton>
</div>
</template>

<script>
    export default {
        data(){
            return {
                disabled:false,
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
                        type:'input',
                        field:'input',
                        title:'product name',
                        value: '',
                        props:{
                            disabled:false
                        }
                    }
                ]
            }
            
        },
        computed:{
            title(){
                return this.disabled ? 'Product name (disabled)' : 'product name';
            }
        },
        methods:{
            swatch(){
                this.disabled = !this.disabled;
            },
            disabled1(){
                this.swatch();
                this.fApi.disabled(this.disabled,'input');
                this.rule[0].title = this.title;
            },
            disabled2(){
                this.swatch();
                this.fApi.updateRule('input',{
                    title: this.title,
                    props:{
                        disabled: this.disabled
                    }
                })
            },
            disabled3(){
                this.swatch();
                const rule = this.fApi.getRule('input');
                rule.title = this.title;
                rule.props.disabled = this.disabled;
            },
        }
    }
</script>
```
:::


## Modify the options of a selection component

::: demo
```html
<template>
<div>
    <FormCreate :rule="rule" v-model="fApi" :option="options"/>
    <h2>Operate</h2>
    <p>Increase option of select component</p>
    <ElButton @click="add1">Way1</ElButton>
    <ElButton @click="add2">Way2</ElButton>
    <ElButton @click="reset1">reset 1</ElButton>
    <ElButton @click="reset2">reset 1</ElButton>
</div>
</template>

<script>
    export default {
        data(){
            return {
                i: 0,
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
                        type:'select',
                        field:'select',
                        title:'select',
                        value: '',
                        options: [{value:0, label:'0'.repeat(5)}]
                    }
                ]
            }
            
        },
        methods:{
            getOption(){
                this.i++;
                return {value:this.i, label:String(this.i).repeat(5)}
            },
            add1(){
                this.rule[0].options.push(this.getOption());
            },
            add2(){
                this.fApi.getRule('select').options.push(this.getOption());
            },
            reset1(){
                this.fApi.updateRule('select', {
                    options: [this.getOption()]
                }, true);
            },
            reset2(){
                this.rule[0].options = [this.getOption()];
            }
        }
    }
</script>
```
:::

## Modify the `value` of a form component

::: demo
```html
<template>
<div>
    <FormCreate :rule="rule" v-model="fApi" :option="options"/>
    <h2>Operate</h2>
    <ElButton @click="changeValue1">Way1</ElButton>
    <ElButton @click="changeValue2">Way2</ElButton>
    <ElButton @click="changeValue3">Way3</ElButton>
    <ElButton @click="changeValue4">Way4</ElButton>
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
                        type:'inputNumber',
                        field:'number',
                        title:'stock',
                        value: 0
                    }
                ]
            }
            
        },
        methods:{
            changeValue1(){
                this.rule[0].value++;
            },
            changeValue2(){
                this.fApi.setValue('number', this.fApi.getValue('number') + 1);
            },
            changeValue3(){
                this.fApi.updateRule('number', {
                    value: this.rule[0].value + 1
                });
            },
            changeValue4(){
                this.fApi.setValue({
                    number: this.rule[0].value + 1
                });
            }
        }
    }
</script>
```
:::


## Custom component

After defining the custom component name, you can get the component rules through the $ f.component () method

[自定义表单组件](/en/v2/guide/custom-component.html)

::: demo
```html
<template>
<div>
    <FormCreate :rule="rule" v-model="fApi" :option="options"/>
    <h2>Operate</h2>
    <p>Modify the type property of the button component</p>
    <ElButton @click="changeType1">Way 1</ElButton>
    <ElButton @click="changeType2">Way 2</ElButton>
    <ElButton @click="changeType3">Way 3</ElButton>
</div>
</template>

<script>
    export default {
        data(){
            return {
                disabled:false,
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
                        name:'btn',
                        props:{
                            type:'success'
                        },
                        children:['Custom content']
                    }
                ]
            }
            
        },
        computed:{
            type(){
                return this.disabled ? 'danger' : 'success';
            }
        },
        methods:{
            swatch(){
                this.disabled = !this.disabled;
            },
            changeType1(){
                this.swatch();
                this.rule[0].props.type = this.type;
            },
            changeType2(){
                this.swatch();
                this.fApi.updateRule('btn',{
                    props:{
                        type: this.type
                    }
                })
            },
            changeType3(){
                this.swatch();
                const rule = this.fApi.component().btn;
                rule.props.type = this.type;
            },
        }
    }
</script>
```
:::