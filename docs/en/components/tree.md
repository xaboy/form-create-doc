### Tree

#### [demo](https://jsrun.net/AehKp/edit)
#### maker
```js
$formCreate.maker.tree('权限','rule',[]).props({
        data:[], //数据结构参考上面
        type:'checked'
})
```

#### json
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
        },
}
```

#### data
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

#### Parameter Description

reference:[iview2.x](http://v2.iviewui.com/components/tree#API) | [iview3.x](https://www.iviewui.com/components/tree#API)

##### Tree props

| Property      | Description                                                  | Type     | Default  |
| ------------- | ------------------------------------------------------------ | -------- | -------- |
| data          | An array of nestable node properties that generates tree data. | Array    | []       |
| multiple      | Allows selecting multiple treeNodes.                         | Boolean  | false    |
| showCheckbox | Adds a Checkbox before the treeNodes.                        | Boolean  | false    |
| emptyText    | A tip without data.                                          | String   | No Data  |
| loadData     | Methods to load data lazily, see examples.                   | Function | -        |
| render        | Custom node content, see examples.                           | Function | -        |
| childrenKey  | Define child node key                                        | String   | children |

##### Tree events

| Event Name    | Description                                        | Return Value                            |
| ------------- | -------------------------------------------------- | --------------------------------------- |
| select-change | Emitted when the tree node is clicked.             | The currently selected node array.      |
| check-change  | Emitted when the checkbox is clicked.              | An array of nodes is currently checked. |
| toggle-expand | Emitted when when the list is expanded or dropped. | Current nodes.                          |

##### childrenchildren

| Property        | Description                                                  | Type                     | Default |
| --------------- | ------------------------------------------------------------ | ------------------------ | ------- |
| title           | Title                                                        | String \| Element String | -       |
| expand          | Whether to expand the child node.                            | Boolean                  | false   |
| disabled        | Disables the treeNode                                        | Boolean                  | false   |
| disableCheckbox | Disables the checkbox of the treeNode.                       | Boolean                  | false   |
| selected        | Whether to select a child node.                              | Boolean                  | false   |
| checked         | Whether to check node (if checked, the child node will check all). | Boolean                  | false   |
| children        | An array of child nodes                                      | Array                    | -       |
| render          | Custom node content, see examples.                           | Function                 | -       |

