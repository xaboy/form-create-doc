# 事件监听

**通过配置项`on`,`emit`可监听组件内抛出的事件**, 例如监听`input`组件的`change`事件,事件名称参考[Input](/v2/element-ui/components/input.html#events)

## 通过配置项`on`监听事件
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
                    }
                },
                rule:[
                    {
                        type:'input',
                        field:'event',
                        title:'change 事件',
                        on:{
                            change:()=>{
                                alert(`change!![${this.fApi.getValue('event')}]`);
                            }
                        }
                    }
                ]
            }
            
        }
    }
</script>
```
:::

## 通过配置项`emit`监听事件

> 只支持在组件模式下使用

事件名称为`${field}-${eventName}`

::: demo
```html
<template>
    <form-create :rule="rule" v-model="fApi" :option="options" @input-field-change="change" @input-field2-blur="blur"/>
</template>

<script>
    export default {
        data(){
            return {
                fApi:{},
                options:{
                    onSubmit:(formData)=>{
                        alert(JSON.stringify(formData));
                    }
                },
                rule:[
                    {
                        type:'input',
                        field:'inputField',
                        title:'change 事件',
                        emit:['change']
                    },
                    {
                        type:'input',
                        field:'inputField2',
                        title:'blur 事件',
                        emit:['blur']
                    }
                ]
            }
            
        },
        methods:{
            change(){
                alert(`change!![${this.fApi.getValue('inputField')}]`);
            },
            blur(){
                alert('blur!');
            }
        }
    }
</script>
```
:::


## 通过配置项`emitPrefix`自定义事件前缀

事件名称为`${emitPrefix}-${eventName}`

::: demo
```html
<template>
    <form-create :rule="rule" v-model="fApi" :option="options" @prefix1-change="change" @prefix2-blur="blur"/>
</template>

<script>
    export default {
        data(){
            return {
                fApi:{},
                options:{
                    onSubmit:(formData)=>{
                        alert(JSON.stringify(formData));
                    }
                },
                rule:[
                    {
                        type:'input',
                        field:'inputField',
                        title:'change 事件',
                        emit:['change', 'blur'],
                        emitPrefix:'prefix1'
                    },
                    {
                        type:'input',
                        field:'inputField2',
                        title:'blur 事件',
                        emit:['blur'],
                        emitPrefix:'prefix2'
                    }
                ]
            }
            
        },
        methods:{
            change(){
                alert(`change!![${this.fApi.getValue('inputField')}]`);
            },
            blur(){
                alert('blur!');
            }
        }
    }
</script>
```
:::


## 通过`on`方法监听事件


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
                    }
                },
                rule:[
                    {
                        type:'input',
                        field:'inputField',
                        title:'change 事件',
                        emit:['change', 'blur'],
                        emitPrefix:'prefix1'
                    },
                    {
                        type:'input',
                        field:'inputField2',
                        title:'blur 事件',
                        emit:['blur'],
                    }
                ]
            }
            
        },
        methods:{
            change(){
                alert(`change!![${this.fApi.getValue('inputField')}]`);
            },
            blur(){
                alert('blur!');
            }
        },
        mounted(){
            this.$nextTick(()=>{
                this.fApi.on('prefix1-change',this.change);
                this.fApi.on('input-field2-blur',this.blur);
            })
        }
    }
</script>
```
:::

## 向事件中注入`$f`和自定义参数

>支持多种方式开启事件注入

::: demo
```html
<template>
    <form-create :rule="rule" v-model="fApi" :option="options" @prefix1-change="change"/>
</template>

<script>
    export default {
        data(){
            return {
                fApi:{},
                options:{
                    onSubmit:(formData)=>{
                        alert(JSON.stringify(formData));
                    }
                },
                rule:[
                    {
                        type:'input',
                        field:'inputField',
                        title:'change 事件',
                        emit: [{
                            name: 'change',
                            inject: ['自定义参数,数据类型不限']
                        }],
                        emitPrefix:'prefix1',
     
                    },
                    {
                        type:'input',
                        field:'inputField2',
                        title:'blur 事件',
                        inject:true,
                        on:{
                            blur: this.blur
                        }
                    }
                ]
            }
            
        },
        methods:{
            change(inject){
                alert(`change: ${inject.inject}[${inject.$f.getValue('inputField')}]`);
            },
            blur(inject){
                alert(`blur: ${inject.self.title}`);
            }
        }
    }
</script>
```
:::

inject 参数的数据结构
```ts
{
    $f:Object,//api
    rule:Array,//生成规则
    self:Object,//当前生成规则
    option:Object,//全局配置
    inject:Any,//自定义注入的参数
}
```

**参数注入也可以通过全局配置项`injectEvent:true`开启**