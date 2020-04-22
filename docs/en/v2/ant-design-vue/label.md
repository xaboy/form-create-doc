# label 布局

::: tip

可以通过`labelCol`,`wrapperCol`设置 label 的布局,和组件的布局样式

[Ant-design-vue 栅格布局 Col props](https://www.antdv.com/components/grid-cn/#Col)

:::

#### 设置 label 和组件的布局

```js
{
   type: 'input',
   field: 'goods_name',
   value: 'test',
   labelCol: {span:12},
   wrapperCol: {span:12}
}

```