---
 title: 数组组件/组件嵌套
---


# 数组组件/组件嵌套

可以通过`group`组件实现组件数组,嵌套对象功能

#### 示例
![group](/img/group.gif)

[在线示例](http://jsrun.pro/VLfKp/edit)

#### Maker
```js
maker.group('标签',' label',[]).props({
        min:1,
        max:5,
        rule:{
            type:'input',
            field:'input',
            props:{disabled:false},
            validate:[{required:true}]
        }
    }).validate([
        {required:true, type: 'array', min: 1, message: '最少添加1个标签'}
])
```

#### JSON
```json
{
    type:"group",
    title:"标签",
    field:" label",
    value:[],
    props:{
        min:1,
        max:5,
        rule:{
            type:'input',
            field:'input',
            props:{disabled:false},
            validate:[{required:true}]
        }

    },
    validate:[
        {required:true, type: 'array', min: 1, message: '最少添加1个标签'}
    ]
}
```
**value**: `Array`

#### props


| 属性      | 说明                                                | 类型    | 默认值                          |
| :-------- | :-------------------------------------------------- | :------ | :------------------------------ |
| rule |  嵌套组件的规则,通过此属性设置时,值为`Array`**(需要获取值的组件规则,必须定义 field,如果有多个默认取第一个)**          |  Object | -                           |
| rules | 嵌套组件的规则,通过此属性设置时,值为`Array<Object>`**(需要获取值的组件规则,必须定义 field)**            |  Array | -                            |
| min |  最少添加几项                                |  Number | -                           |
| max  | 最多添加几项                                    |  Number |  -                            |
| expand  | 默认展开几项                                    |  Number |  -                            |
| button  | 是否显示操作按钮                                    |  Boolean |  -                            |
| fontSize  | 操作按钮字体大小                               |  Number |  28                            |
| disabled |  禁用                         |  Boolean | false                           |

#### on 事件

| 事件名                | 说明                                                        | 返回值                                                       |
| :-------------------- | :---------------------------------------------------------- | :----------------------------------------------------------- |
| add           | 增加一项后触发                              | - |
| remove        | 删除一项后触发                              | -                                                |
| itemMounted   | 新增的子表单初始化完成后触发                   | -                                                            |
| [`field-emitName`]   | 子表单 emit 事件              | -                                                            |
