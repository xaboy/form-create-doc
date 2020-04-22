# Cascader 多级联动

::: tip 省市区联动json数据

[https://github.com/xaboy/form-create/tree/master/district](https://github.com/xaboy/form-create/tree/master/district)

:::

#### Maker
```js
$formCreate.maker.cascader('所在区域','address',['陕西省','西安市','新城区']).props({
	options:window.province
})
```

#### JSON
```json
{
    type:"cascader",
    title:"所在区域",
    field:"address",
    value:['陕西省','西安市','新城区'],
    props:{
        options:window.province || [],
    }
}
```

参考:[Ant-design-vue_Cascader](https://www.antdv.com/components/cascader-cn/)

**value** :`Array`

#### props

| 参数              | 说明                                                         | 类型                                   | 默认值                                                     |
| :---------------- | :----------------------------------------------------------- | :------------------------------------- | :--------------------------------------------------------- |
| allowClear        | 是否支持清除                                                 | boolean                                | true                                                       |
| autoFocus         | 自动获取焦点                                                 | boolean                                | false                                                      |
| changeOnSelect    | 当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的演示 | boolean                                | false                                                      |
| disabled          | 禁用                                                         | boolean                                | false                                                      |
| displayRender     | 选择后展示的渲染函数,可使用 slot="displayRender" 和 slot-scope="{labels, selectedOptions}" | `({labels, selectedOptions}) => vNode` | `labels => labels.join(' / ')`                             |
| expandTrigger     | 次级菜单的展开方式，可选 'click' 和 'hover'                  | string                                 | 'click'                                                    |
| fieldNames        | 自定义 options 中 label name children 的字段                 | object                                 | `{ label: 'label', value: 'value', children: 'children' }` |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。 | Function(triggerNode)                  | () => document.body                                        |
| loadData          | 用于动态加载选项，无法与 `showSearch` 一起使用               | `(selectedOptions) => void`            | -                                                          |
| notFoundContent   | 当下拉列表为空时显示的内容                                   | string                                 | 'Not Found'                                                |
| options           | 可选项数据源                                                 | object                                 | -                                                          |
| placeholder       | 输入框占位文本                                               | string                                 | '请选择'                                                   |
| popupClassName    | 自定义浮层类名                                               | string                                 | -                                                          |
| popupStyle        | 自定义浮层样式                                               | object                                 | {}                                                         |
| popupPlacement    | 浮层预设位置：`bottomLeft` `bottomRight` `topLeft` `topRight` | Enum                                   | `bottomLeft`                                               |
| popupVisible      | 控制浮层显隐                                                 | boolean                                | -                                                          |
| showSearch        | 在选择框中显示搜索框                                         | boolean                                | false                                                      |
| size              | 输入框大小，可选 `large` `default` `small`                   | string                                 | `default`                                                  |
| suffixIcon        | 自定义的选择框后缀图标                                       | string \| VNode \| slot                | -                                                          |



`showSearch` 为对象时，其中的字段：

| 参数            | 说明                                                         | 类型                                  | 默认值 |
| :-------------- | :----------------------------------------------------------- | :------------------------------------ | :----- |
| filter          | 接收 `inputValue` `path` 两个参数，当 `path` 符合筛选条件时，应返回 true，反之则返回 false。 | `function(inputValue, path): boolean` |        |
| limit           | 搜索结果展示数量                                             | number \| false                       | 50     |
| matchInputWidth | 搜索结果列表是否与输入框同宽                                 | boolean                               |        |
| render          | 用于渲染 filter 后的选项,可使用 slot="showSearchRender" 和 slot-scope="{inputValue, path}" | `function({inputValue, path}): vNode` |        |
| sort            | 用于排序 filter 后的选项                                     | `function(a, b, inputValue)`          |        |

#### 

#### events

| 事件名称           | 说明                | 回调参数                           |
| :----------------- | :------------------ | :--------------------------------- |
| change             | 选择完成后的回调    | `(value, selectedOptions) => void` |
| popupVisibleChange | 显示/隐藏浮层的回调 | `(value) => void`                  |

