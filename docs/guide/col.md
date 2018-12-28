### col 栅格布局规则

::: tip 

所有组件均支持布局配置规则,详细说明可参考 [iview栅格布局](http://v2.iviewui.com/components/grid)

:::

#### 举例

生成器

>  使用 maker 生成生成器设置组件布局规则

```js
//生成一个的input组件,通过col规则设置组件长度为50%
maker.input('col','text','').col({span:12,labelWidth:200,xs:24})
```

json

>  使用 json 设置组件规则

```js
{
    type:'input',
    title:'col',
    field:'text',
    value:'',
    col:{
        span:12,
        labelWidth:200,
        xs:24
    }
}
```





#### col规则配置项

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| span | 栅格的占位格数，可选值为0~24的整数，为 0 时，相当于`display:none` | Number ,String | 24 |
| labelWidth | 设置表单域 `label` 的宽度 | Number | 150 |
| order | 栅格的顺序，在`flex`布局模式下有效 | Number ,String | - |
| offset | 栅格左侧的间隔格数，间隔内不可以有栅格 | Number ,String | - |
| push | 栅格向右移动格数 | Number ,String | - |
| pull | 栅格向左移动格数 | Number ,String | - |
| class-name | 自定义的class名称 | String | - |
| xs | `<768px`响应式栅格，可为栅格数或一个包含其他属性的对象 | Number ,Object | - |
| sm | `≥768px`响应式栅格，可为栅格数或一个包含其他属性的对象 | Number ,Object | - |
| md | `≥992px`响应式栅格，可为栅格数或一个包含其他属性的对象 | Number ,Object | - |
| lg | `≥1200px`响应式栅格，可为栅格数或一个包含其他属性的对象 | Number ,Object | - |
