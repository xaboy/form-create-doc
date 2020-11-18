# 修改表单规则

<style>
.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__display {
    max-height: 600px;
}
</style>

## 在尾部追加规则


::: demo
```html
<template>
<div>
    <form-create :rule="rule" v-model="fApi" :option="options"/>
    <h2>操作</h2>
    <p>在表单尾部追加组件</p>
    <ElButton @click="append1">方式1</ElButton>
    <ElButton @click="append2">方式2</ElButton>
    <p>在inputNumber组件底部追加组件</p>
    <ElButton @click="set1">方式1</ElButton>
    <ElButton @click="set2">方式2</ElButton>
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
                        title:'库存',
                        value: 0
                    },
                    {
                        type:'input',
                        field:'info',
                        title:'简介',
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
                return this.$formCreate.maker.input('追加组件'+this.i,'input'+this.i,'');
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


## 在顶部增加规则


::: demo
```html
<template>
<div>
    <form-create :rule="rule" v-model="fApi" :option="options"/>
    <h2>操作</h2>
    <p>在表单顶部增加组件</p>
    <ElButton @click="append1">方式1</ElButton>
    <ElButton @click="append2">方式2</ElButton>
    <p>在input组件顶部增加组件</p>
    <ElButton @click="set1">方式1</ElButton>
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
                        title:'库存',
                        value: 0
                    },
                    {
                        type:'input',
                        field:'info',
                        title:'简介',
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
                return this.$formCreate.maker.input('追加组件'+this.i,'input'+this.i,'');
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

## 添加组件的子组件


::: demo
```html
<template>
<div>
    <form-create :rule="rule" v-model="fApi" :option="options"/>
    <h2>操作</h2>
    <p>在 col 组件内部增加</p>
    <ElButton @click="append1">方式1</ElButton>
    <ElButton @click="append2">方式2</ElButton>
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
                        title:'布局组件',
                        name: 'col',
                        children: []
                    }
                ]
            }
            
        },
        methods:{
            getRule(){
                this.i++;
                return this.$formCreate.maker.input('追加组件'+this.i,'input'+this.i,'');
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

## 删除第一条规则
```js
rule.splice(0,1);
```
## 删除表单组件
```js
fApi.removeField('field');
```
## 删除自定义组件
```js
$f.removeField('name');
```