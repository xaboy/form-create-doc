# Modify form rules

<style>
.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__display {
    max-height: 600px;
}
</style>

## Append rules at the end


::: demo
```html
<template>
<div>
    <FormCreate :rule="rule" v-model="fApi" :option="options"/>
    <h2>Operate</h2>
    <p>Append components to the end of the form</p>
    <ElButton @click="append1">Way 1</ElButton>
    <ElButton @click="append2">Way 2</ElButton>
    <p>Append component at the bottom of inputNumber component</p>
    <ElButton @click="set1">Way 1</ElButton>
    <ElButton @click="set2">Way 2</ElButton>
</div>
</template>

<script>
    export default {
        data(){
            return {
                i: 0,
                fApi:{},
                options:{
                    submitBtn:false,
                    resetBtn:false
                },
                rule:[
                    {
                        type:'inputNumber',
                        field:'number',
                        title:'stock',
                        value: 0
                    },
                    {
                        type:'input',
                        field:'info',
                        title:'introduction',
                        value: '',
                        props:{
                            type:'textarea'
                        }
                    }
                ]
            }
            
        },
        methods:{
            getRule(){
                this.i++;
                return this.$formCreate.maker.input('AddOn'+this.i,'input'+this.i,'');
            },
            append1(){
                this.rule.push(this.getRule());
            },
            append2(){
                this.fApi.append(this.getRule());
            },
            set1(){
                this.rule.splice(1,0,this.getRule());
            },
            set2(){
                this.fApi.append(this.getRule(), 'number');
            }
        }
    }
</script>
```
:::


## Adding rules on top


::: demo
```html
<template>
<div>
    <FormCreate :rule="rule" v-model="fApi" :option="options"/>
    <h2>Operate</h2>
    <p>Adding components to the top of the form</p>
    <ElButton @click="append1">Way 1</ElButton>
    <ElButton @click="append2">Way 2</ElButton>
    <p>Add component on top of input component</p>
    <ElButton @click="set1">Way 1</ElButton>
</div>
</template>

<script>
    export default {
        data(){
            return {
                i: 0,
                fApi:{},
                options:{
                    submitBtn:false,
                    resetBtn:false
                },
                rule:[
                    {
                        type:'inputNumber',
                        field:'number',
                        title:'stock',
                        value: 0
                    },
                    {
                        type:'input',
                        field:'info',
                        title:'introduction',
                        value: '',
                        props:{
                            type:'textarea'
                        }
                    }
                ]
            }
            
        },
        methods:{
            getRule(){
                this.i++;
                return this.$formCreate.maker.input('addOn'+this.i,'input'+this.i,'');
            },
            append1(){
                this.rule.splice(0,0,this.getRule());
            },
            append2(){
                this.fApi.prepend(this.getRule());
            },
            set1(){
                this.fApi.prepend(this.getRule(), 'info');
            }
        }
    }
</script>
```
:::

## Adding child components


::: demo
```html
<template>
<div>
    <FormCreate :rule="rule" v-model="fApi" :option="options"/>
    <h2>Operate</h2>
    <p>Added inside the col component</p>
    <ElButton @click="append1">Way 1</ElButton>
    <ElButton @click="append2">Way 2</ElButton>
</div>
</template>

<script>
    export default {
        data(){
            return {
                i: 0,
                fApi:{},
                options:{
                    submitBtn:false,
                    resetBtn:false
                },
                rule:[
                    {
                        type:'el-col',
                        title:'Layout',
                        name: 'col',
                        children: []
                    }
                ]
            }
            
        },
        methods:{
            getRule(){
                this.i++;
                return this.$formCreate.maker.input('addOn'+this.i,'input'+this.i,'');
            },
            append1(){
                this.rule[0].children.push(this.getRule());
            },
            append2(){
                this.fApi.append(this.getRule(),'col', true);
            }
        }
    }
</script>
```
:::

## Delete the first rule
```js
rule.splice(0,1);
```
## Remove form component
```js
fApi.removeField('field');
```
## Remove custom components
```js
$f.removeField('name');
```