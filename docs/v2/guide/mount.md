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
::: warning 注意
1. `TestComponent`为自定义组件
2. **使用局部挂载的方式挂载组件需要在挂载 `form-create` 之前执行**
:::

**全局挂载**
```js
Vue.component(TestComponent);
```

**局部挂载**
```js
formCreate.component(TestComponent.name, TestComponent);
```