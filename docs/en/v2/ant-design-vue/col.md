# col 布局规则

::: tip

所有组件均支持布局配置规则,详细说明可参考

[Ant-design-vue 栅格布局 Col props](https://www.antdv.com/components/grid-cn/#Col)



:::



### 配置规则

可通过 col 配置项设置布局规则

| 成员   | 说明                                                     | 类型           | 默认值 |
| :----- | :------------------------------------------------------- | :------------- | :----- |
| offset | 栅格左侧的间隔格数，间隔内不可以有栅格                   | number         | 0      |
| order  | 栅格顺序，`flex` 布局模式下有效                          | number         | 0      |
| pull   | 栅格向左移动格数                                         | number         | 0      |
| push   | 栅格向右移动格数                                         | number         | 0      |
| span   | 栅格占位格数，为 0 时相当于 `display: none`              | number         | -      |
| xs     | `<576px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | number\|object | -      |
| sm     | `≥576px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | number\|object | -      |
| md     | `≥768px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | number\|object | -      |
| lg     | `≥992px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | number\|object | -      |
| xl     | `≥1200px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number\|object | -      |
| xxl    | `≥1600px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number\|object | -      |