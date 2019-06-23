# col 布局规则

::: tip

所有组件均支持布局配置规则,详细说明可参考

[Iview 栅格布局 Col props](http://v2.iviewui.com/components/grid#Col_props)



:::



### 配置规则

可通过 col 配置项设置布局规则

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
