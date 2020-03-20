# 自定义表单组件

> **实现`v-model`的组件都可以称为表单组件**


表单组件可以通过`$f.formData`,`$f.getValue`,`$f.setValue`,`$f.disabled`等方法修改组件状态


### 预定义
**定义好以下属性和事件,就能达到和内置组件相同的效果.赶快试一试吧**

**props**

在自定义组件内部通过`props`接收一下属性

- `value` 表单的值
- `disabled` 组件的禁用状态


例如:
```js
vm = Vue({
  props:{
   value:String,
   disabled:Boolean      
  }
})
```

**input 事件**

通过`input`事件更新组件内部的值

当组件值发生变化后,通过 input 事件更新值.例如:
```js
vm.$emit('input',newValue);
```




### 挂载自定义组件

要生成的自定义组件必须通过`vue.component`方法挂载到全局,或者通过`formCreate.component`方法挂载

例如:

```js
formCreate.component('TestComponent',component);
```


### 生成

**表单组件必须定义`field`属性**

**JSON**
```js
{
    type:'TestComponent',
    value:'test',
    field:'testField',
    title:'自定义组件'
}
```

**Maker**

```js
formCreate.maker.create('TestComponent','testField','自定义组件').value('test')
```

现在这个自定义组件就可以跟内置组件一样的去操作了


## 示例

自定义计数器按钮组件,获取按钮点击数.该组件的功能和内置组件相同

::: demo
```html
<template>
    <FormCreate :rule="rule" v-model="fApi" :option="options"/>
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
                    this.$formCreate.maker.template('<el-button @click="onClick" long :disabled="disabled">计数器-{{num}}</el-button>', function(){
                        return new Vue({
                                 data: function () {
                                   return {
                                       num: this.value,
                                   }
                                 },
                                 props:{
                                   //预定义
                                   disabled:Boolean,
                                   value:Number,
                                 },
                                 watch:{
                                   value(n){
                                       //同步 value 的值
                                       this.num = n;
                                   }
                                 },
                                 methods: {
                                   onClick: function () {
                                       this.num++;
                                       //更新组件内部的值
                                       this.$emit('input',this.num);
                                   },
                                 },
                               });
                    },'btn','自定义表单组件').value(10)
                ]
            }
            
        }
    }
</script>
```