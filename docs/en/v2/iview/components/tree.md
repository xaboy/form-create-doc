# Tree 树形组件

#### [在线预览](https://jsrun.pro/AehKp/edit)

#### Maker
```js
maker.tree('权限','rule',[]).props({
    data:[], //数据结构参考下面
    type:'checked'
})
```

#### JSON
```json
{
    type:"tree",
    title:"权限",
    field:"rule",
    value:[],
    props:{
        data:[],
        type:'checked',
        multiple:false,
        showCheckbox:true,
        emptyText:'暂无数据'
    }
}
```

参考:[iview2.x](http://v2.iviewui.com/components/tree#API) | [iview3.x](https://www.iviewui.com/components/tree#API)

**value**: `String | Number | Array`



#### props

| 属性                 | 说明                                                         | 类型     | 默认值   |
| :------------------- | :----------------------------------------------------------- | :------- | :------- |
| data                 | 可嵌套的节点属性的数组，生成 tree 的数据                     | Array    | []       |
| multiple             | 是否支持多选                                                 | Boolean  | false    |
| show-checkbox        | 是否显示多选框                                               | Boolean  | false    |
| empty-text           | 没有数据时的提示                                             | String   | 暂无数据 |
| load-data            | 异步加载数据的方法，见示例                                   | Function | -        |
| render               | 自定义渲染内容，见示例                                       | Function | -        |
| children-key         | 定义子节点键                                                 | String   | children |
| check-strictly       | 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法     | Boolean  | false    |
| check-directly 3.3.0 | 开启后，在 show-checkbox 模式下，select 的交互也将转为 check | Boolean  | false    |

#### events

| 事件名           | 说明                   | 返回值                       |
| :--------------- | :--------------------- | :--------------------------- |
| on-select-change | 点击树节点时触发       | 当前已选中的节点数组、当前项 |
| on-check-change  | 点击复选框时触发       | 当前已勾选节点的数组、当前项 |
| on-toggle-expand | 展开和收起子列表时触发 | 当前节点的数据               |



#### props.data 数据结构
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

