# Custom form components

> **The components that implement `v-model` can all be called form components**


Form components can modify the component state through methods such as $ f.formData, $ f.getValue, $ f.setValue, $ f.disabled, etc.


### 预定义
**Define the following properties and events to achieve the same effect as the built-in components.**

**props**

Receive properties via custom properties inside custom components

- `value` Component value
- `disabled` Disabled state of the component


E.g:
```js
vm = Vue({
  props:{
   value:String,
   disabled:Boolean      
  }
})
```

**input event**

Update the value inside the component through the input event

When the component value changes, update the value through the input event. For example:
```js
vm.$emit('input',newValue);
```




### Mounting custom components

The custom component to be generated must be mounted globally via the `vue.component` method, or via the` formCreate.component` method

E.g:

```js
formCreate.component('TestComponent',component);
```


### 生成

**The form component must define the field attribute**

**JSON**
```js
{
    type:'TestComponent',
    value:'test',
    field:'testField',
    title:'Custom form component'
}
```

**Maker**

```js
formCreate.maker.create('TestComponent','testField','Custom form component').value('test')
```

Now this custom component can be operated like the built-in component.


## Example

Customize the counter button component and get the number of button clicks. The function of this component is the same as the built-in component

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
                    this.$formCreate.maker.template('<el-button @click="onClick" long :disabled="disabled">counter-{{num}}</el-button>', function(){
                        return new Vue({
                                 data: function () {
                                   return {
                                       num: this.value,
                                   }
                                 },
                                 props:{
                                   //Predefined
                                   disabled:Boolean,
                                   value:Number,
                                 },
                                 watch:{
                                   value(n){
                                       //Sync value
                                       this.num = n;
                                   }
                                 },
                                 methods: {
                                   onClick: function () {
                                       this.num++;
                                       //Update the value inside the component
                                       this.$emit('input',this.num);
                                   },
                                 },
                               });
                    },'btn','Custom form components').value(10)
                ]
            }
            
        }
    }
</script>
```