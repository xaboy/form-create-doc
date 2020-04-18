# 挂载组件

## formCreate

[如何导入 formCreate ](/v2/guide/start.html#%E5%BC%95%E5%85%A5-form-create-v2)

**全局挂载**
```js
Vue.use(formCreate);
```

**局部挂载**
```js
//Vue 组件
{
   components: {
       formCreate: formCreate.$form()
   }
}
```

## 自定义组件
通过 form-create 生成的组件需要先通过以下方式挂载后才可以生成. **必须在挂载 formCreate 之前挂载所有需要生成的自定义组件**

**全局挂载**
```js
//自定义组件
Vue.component(TestComponent);
//或者
formCreate.component(TestComponent.name, TestComponent);

Vue.use(formCreate);
```

**局部挂载**
```js
//自定义组件
formCreate.component(TestComponent.name, TestComponent);

//Vue 组件
{
   components: {
       formCreate: formCreate.$form()
   }
}
```