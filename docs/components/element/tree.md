### Tree 树形组件

#### maker 快速生成
```js
$formCreate.maker.tree('权限','rule',[]).props({
    data:[], //数据结构参考下面
    props: {
        "label": "title"
    }
})
```

#### json 规则
```json
{
        type:"tree",
        title:"权限",
        field:"rule",
        value:[],
        props:{
            data:[],
            props: {
                "label": "title"
            }
    }
}
```

#### data数据结构
```js
[{
    title: 'parent 1',
    expand: true,
    selected: false,
    id:1,
    children: [
        {
            title: 'parent 1-1',
            expand: true,
            id:2,
            children: [
                {
                    title: 'leaf 1-1-1',
                    disabled: true,
                    id:11
                },
                {
                    title: 'leaf 1-1-2',
                    selected:true,
                    id:12
                }
            ]
        },
        {
            title: 'parent 1-2',
            expand: true,
            id:3,
            children: [
                {
                    title: 'leaf 1-2-1',
                    checked: true,
                    id:13,
                },
                {
                    title: 'leaf 1-2-1',
                    id:14,
                }
            ]
        }
    ]
}]
```

#### 参数说明

参考:[Element_Tree](http://element-cn.eleme.io/#/zh-CN/component/tree)



##### 规则 rule

| 字段名 | 说明 | 字段类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| type | 元素类型 | String | - |
| field | 字段名称 | String | - |
| title | 字段别名 | String | - |
| value | value | String,Array | - |
| props | 元素配置 | Object | - |
| event | 元素事件 | Object | - |

##### 配置 props

| 参数                  | 说明                                                         | 类型                                   | 可选值 | 默认值 |
| --------------------- | ------------------------------------------------------------ | -------------------------------------- | ------ | ------ |
| data                  | 展示数据                                                     | array                                  | —      | —      |
| empty-text            | 内容为空的时候展示的文本                                     | String                                 | —      | —      |
| node-key              | 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的         | String                                 | —      | —      |
| props                 | 配置选项，具体看下表                                         | object                                 | —      | —      |
| render-after-expand   | 是否在第一次展开某个树节点后才渲染其子节点                   | boolean                                | —      | true   |
| load                  | 加载子树数据的方法，仅当 lazy 属性为true 时生效              | function(node, resolve)                | —      | —      |
| render-content        | 树节点的内容区的渲染 Function                                | Function(h, { node, data, store }      | —      | —      |
| highlight-current     | 是否高亮当前选中节点，默认值是 false。                       | boolean                                | —      | false  |
| default-expand-all    | 是否默认展开所有节点                                         | boolean                                | —      | false  |
| expand-on-click-node  | 是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。 | boolean                                | —      | true   |
| check-on-click-node   | 是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点。 | boolean                                | —      | false  |
| auto-expand-parent    | 展开子节点的时候是否自动展开父节点                           | boolean                                | —      | true   |
| default-expanded-keys | 默认展开的节点的 key 的数组                                  | array                                  | —      | —      |
| show-checkbox         | 节点是否可被选择                                             | boolean                                | —      | false  |
| check-strictly        | 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false | boolean                                | —      | false  |
| default-checked-keys  | 默认勾选的节点的 key 的数组                                  | array                                  | —      | —      |
| current-node-key      | 当前选中的节点                                               | string, number                         | —      | —      |
| filter-node-method    | 对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏 | Function(value, data, node)            | —      | —      |
| accordion             | 是否每次只打开一个同级树节点展开                             | boolean                                | —      | false  |
| indent                | 相邻级节点间的水平缩进，单位为像素                           | number                                 | —      | 16     |
| icon-class            | 自定义树节点的图标                                           | string                                 | -      | -      |
| lazy                  | 是否懒加载子节点，需与 load 方法结合使用                     | boolean                                | —      | false  |
| draggable             | 是否开启拖拽节点功能                                         | boolean                                | —      | false  |
| allow-drag            | 判断节点能否被拖拽                                           | Function(node)                         | —      | —      |
| allow-drop            | 拖拽时判定目标节点能否被放置。`type` 参数有三种情况：'prev'、'inner' 和 'next'，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后 | Function(draggingNode, dropNode, type) | —      | —      |

##### porps.props

| 参数     | 说明                                                     | 类型                          | 可选值 | 默认值 |
| -------- | -------------------------------------------------------- | ----------------------------- | ------ | ------ |
| label    | 指定节点标签为节点对象的某个属性值                       | string, function(data, node)  | —      | —      |
| children | 指定子树为节点对象的某个属性值                           | string                        | —      | —      |
| disabled | 指定节点选择框是否禁用为节点对象的某个属性值             | boolean, function(data, node) | —      | —      |
| isLeaf   | 指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效 | boolean, function(data, node) | —      | —      |

##### 事件扩展 event

| 事件名称         | 说明                                                  | 回调参数                                                     |
| ---------------- | ----------------------------------------------------- | ------------------------------------------------------------ |
| node-click       | 节点被点击时的回调                                    | 共三个参数，依次为：传递给 `data` 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。 |
| node-contextmenu | 当某一节点被鼠标右键点击时会触发该事件                | 共四个参数，依次为：event、传递给 `data` 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。 |
| check-change     | 节点选中状态发生变化时的回调                          | 共三个参数，依次为：传递给 `data` 属性的数组中该节点所对应的对象、节点本身是否被选中、节点的子树中是否有被选中的节点 |
| check            | 当复选框被点击的时候触发                              | 共两个参数，依次为：传递给 `data` 属性的数组中该节点所对应的对象、树目前的选中状态对象，包含 checkedNodes、checkedKeys、halfCheckedNodes、halfCheckedKeys 四个属性 |
| current-change   | 当前选中节点变化时触发的事件                          | 共两个参数，依次为：当前节点的数据，当前节点的 Node 对象     |
| node-expand      | 节点被展开时触发的事件                                | 共三个参数，依次为：传递给 `data` 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身 |
| node-collapse    | 节点被关闭时触发的事件                                | 共三个参数，依次为：传递给 `data` 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身 |
| node-drag-start  | 节点开始拖拽时触发的事件                              | 共两个参数，依次为：被拖拽节点对应的 Node、event             |
| node-drag-enter  | 拖拽进入其他节点时触发的事件                          | 共三个参数，依次为：被拖拽节点对应的 Node、所进入节点对应的 Node、event |
| node-drag-leave  | 拖拽离开某个节点时触发的事件                          | 共三个参数，依次为：被拖拽节点对应的 Node、所离开节点对应的 Node、event |
| node-drag-over   | 在拖拽节点时触发的事件（类似浏览器的 mouseover 事件） | 共三个参数，依次为：被拖拽节点对应的 Node、当前进入节点对应的 Node、event |
| node-drag-end    | 拖拽结束时（可能未成功）触发的事件                    | 共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点（可能为空）、被拖拽节点的放置位置（before、after、inner）、event |
| node-drop        | 拖拽成功完成时触发的事件                              | 共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点、被拖拽节点的放置位置（before、after、inner）、event |