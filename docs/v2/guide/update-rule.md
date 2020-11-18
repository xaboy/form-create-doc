# 更新组件规则


## 表单组件

::: demo
```html
<template>
<div>
    <form-create :rule="rule" v-model="fApi" :option="options"/>
    <h2 v-text="disabled? '取消' : '禁用'"></h2>
    <ElButton @click="disabled1">方式1</ElButton>
    <ElButton @click="disabled2">方式2</ElButton>
    <ElButton @click="disabled3">方式3</ElButton>
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
                        title:'商品名称',
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
                return this.disabled ? '商品名称(禁用)' : '商品名称';
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


## 修改选择类组件的`options`

::: demo
```html
<template>
<div>
    <form-create :rule="rule" v-model="fApi" :option="options"/>
    <h2>操作</h2>
    <p>增加 select 组件的 option</p>
    <ElButton @click="add1">方式1</ElButton>
    <ElButton @click="add2">方式2</ElButton>
    <ElButton @click="reset1">重置1</ElButton>
    <ElButton @click="reset2">重置1</ElButton>
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
                        title:'下拉选择',
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

## 修改表单组件的`value`

::: demo
```html
<template>
<div>
    <form-create :rule="rule" v-model="fApi" :option="options"/>
    <h2>操作</h2>
    <ElButton @click="changeValue1">方式1</ElButton>
    <ElButton @click="changeValue2">方式2</ElButton>
    <ElButton @click="changeValue3">方式3</ElButton>
    <ElButton @click="changeValue4">方式4</ElButton>
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
                        title:'库存',
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


## 自定义组件

自定义组件定义`name`后可以通过`$f.component()`的方法获取到组件规则

[自定义表单组件](/v2/guide/custom-component.html#%E8%BD%AC%E6%8D%A2%E4%B8%BA%E8%A1%A8%E5%8D%95%E7%BB%84%E4%BB%B6)

::: demo
```html
<template>
<div>
    <form-create :rule="rule" v-model="fApi" :option="options"/>
    <h2>操作</h2>
    <p>修改 button 组件的 type 属性</p>
    <ElButton @click="changeType1">方式1</ElButton>
    <ElButton @click="changeType2">方式2</ElButton>
    <ElButton @click="changeType3">方式3</ElButton>
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
                        children:['自定义内容']
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