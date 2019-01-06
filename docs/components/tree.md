### Tree 树形组件

#### [在线预览](https://jsrun.net/AehKp/edit)
#### 示例
```js
{
        type:"tree",
        title:"权限",
        field:"rule",
        value:[],
        props:{
            data:[],//可嵌套的节点属性的数组，生成 tree 的数据
            type:'checked',//类型 支持checked和selected
            multiple:false, //是否支持多选
            //,当`type=selected`并且`multiple=false`,值为String或Number类型，
            //其他情况为Array类型


            showCheckbox:true, //是否显示多选框
            emptyText:'暂无数据' //没有数据时的提示
        },
        event:{
            'select-change':()=>{console.log('select-change')}, //点击树节点时触发
            'check-change':()=>{console.log('check-change')}, //点击复选框时触发
            'toggle-expand':()=>{console.log('toggle-expand')}, //展开和收起子列表时触发
        }
    }
```

#### maker 快速生成
```js
$formCreate.maker.tree('权限','rule',[]).props({
        data:[], //数据结构参考上面
        type:'checked'
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
            data:[],//可嵌套的节点属性的数组，生成 tree 的数据
            type:'checked',//类型 支持checked和selected
            multiple:false, //是否支持多选,当`type=selected`并且`multiple=false`,值为String或Number类型，其他情况为Array类型
            showCheckbox:true, //是否显示多选框
            emptyText:'暂无数据' //没有数据时的提示
        },
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

参考:[iview2.x](http://v2.iviewui.com/components/tree#API) | [iview3.x](https://www.iviewui.com/components/tree#API)



##### 规则 rule

| 字段名 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| type | 元素类型 | String | true | - |
| field | 字段名称 | String | true | - |
| title | 字段别名 | String | true | - |
| value | value | String,Array | false | - |
| props | 元素配置 | Object | true | - |
| event | 元素事件 | Object | false | - |

##### 配置 props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| data | 可嵌套的节点属性的数组，生成 tree 的数据 | Array | \[\] |
| type | 类型 支持checked和selected | String | 'checked' |
| multiple | 是否支持多选 | Boolean | false |
| show-checkbox | 是否显示多选框 | Boolean | false |
| empty-text | 没有数据时的提示 | String | 暂无数据 |
| load-data | 异步加载数据的方法，见示例 | Function | - |
| render | 自定义渲染内容，见示例 | Function | - |
| children-key | 定义子节点键 | String | children |

##### 事件扩展 event

| 事件名 | 说明 | 返回值 |
| :--- | :--- | :--- |
| select-change | 点击树节点时触发 | 当前已选中的节点数组 |
| check-change | 点击复选框时触发 | 当前已勾选节点的数组 |
| toggle-expand | 展开和收起子列表时触发 | 当前节点的数据 |

##### children

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| title | 标题 | String ,Element String | - |
| expand | 是否展开直子节点 | Boolean | false |
| disabled | 禁掉响应 | Boolean | false |
| disableCheckbox | 禁掉 checkbox | Boolean | false |
| selected | 是否选中子节点 | Boolean | false |
| checked | 是否勾选\(如果勾选，子节点也会全部勾选\) | Boolean | false |
| children | 子节点属性数组 | Array | - |
| render | 自定义当前节点渲染内容，见示例 | Function | - |

