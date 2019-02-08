### Select 下拉选择框

#### maker 快速生成
```js
$formCreate.maker.select("产品分类","cate_id",["104","105"]).options([
        {"value": "104", "label": "生态蔬菜", "disabled": false},
        {"value": "105", "label": "新鲜水果", "disabled": false},
    ]).props({
        multiple:true
})
```

#### json 规则
```json
{
        type: "select",
        field: "cate_id",
        title: "产品分类",
        value: ["104","105"],
        options: [
            {"value": "104", "label": "生态蔬菜", "disabled": false},
            {"value": "105", "label": "新鲜水果", "disabled": false},
         ],
        props: {
            multiple: true 
        },
}
```

#### 参数说明
参考:[Element_Select](http://element-cn.eleme.io/#/zh-CN/component/select)



##### 规则 rule

| 字段名 | 说明 | 字段类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| type | 元素类型 | String | - |
| field | 字段名称 | String | - |
| title | 字段别名 | String | - |
| value | 字段值,当props.multiple设置为true是 value为数组 | String,Number,Array | - |
| options | 可选参数 | Array | - |
| props | 元素配置 | Object | - |
| event | 元素事件 | Object | - |
| validate | 验证规则 | Array | - |

##### 可选参数 Options

| 字段名 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| value | 参数值 | String,Number | true | - |
| label | 字段别名 | String | true | - |
| disabled | 设置为禁用状态 | Boolean | false | false |


##### 元素配置 props

| 参数                  | 说明                                                         | 类型     | 可选值            | 默认值     |
| --------------------- | ------------------------------------------------------------ | -------- | ----------------- | ---------- |
| multiple              | 是否多选                                                     | boolean  | —                 | false      |
| disabled              | 是否禁用                                                     | boolean  | —                 | false      |
| value-key             | 作为 value 唯一标识的键名，绑定值为对象类型时必填            | string   | —                 | value      |
| size                  | 输入框尺寸                                                   | string   | medium/small/mini | —          |
| clearable             | 是否可以清空选项                                             | boolean  | —                 | false      |
| collapse-tags         | 多选时是否将选中值按文字的形式展示                           | boolean  | —                 | false      |
| multiple-limit        | 多选时用户最多可以选择的项目数，为 0 则不限制                | number   | —                 | 0          |
| name                  | select input 的 name 属性                                    | string   | —                 | —          |
| autocomplete          | select input 的 autocomplete 属性                            | string   | —                 | off        |
| auto-complete         | 下个主版本弃用                                               | string   | —                 | off        |
| placeholder           | 占位符                                                       | string   | —                 | 请选择     |
| filterable            | 是否可搜索                                                   | boolean  | —                 | false      |
| allow-create          | 是否允许用户创建新条目，需配合 `filterable` 使用             | boolean  | —                 | false      |
| filter-method         | 自定义搜索方法                                               | function | —                 | —          |
| remote                | 是否为远程搜索                                               | boolean  | —                 | false      |
| remote-method         | 远程搜索方法                                                 | function | —                 | —          |
| loading               | 是否正在从远程获取数据                                       | boolean  | —                 | false      |
| loading-text          | 远程加载时显示的文字                                         | string   | —                 | 加载中     |
| no-match-text         | 搜索条件无匹配时显示的文字                                   | string   | —                 | 无匹配数据 |
| no-data-text          | 选项为空时显示的文字                                         | string   | —                 | 无数据     |
| popper-class          | Select 下拉框的类名                                          | string   | —                 | —          |
| reserve-keyword       | 多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词     | boolean  | —                 | false      |
| default-first-option  | 在输入框按下回车，选择第一个匹配项。需配合 `filterable`或 `remote` 使用 | boolean  | -                 | false      |
| popper-append-to-body | 是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false | boolean  | -                 | true       |
| automatic-dropdown    | 对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单 | boolean  | -                 | false      |

##### 事件扩展 event

| 事件名称       | 说明                                     | 回调参数                      |
| -------------- | ---------------------------------------- | ----------------------------- |
| change         | 选中值发生变化时触发                     | 目前的选中值                  |
| visible-change | 下拉框出现/隐藏时触发                    | 出现则为 true，隐藏则为 false |
| remove-tag     | 多选模式下移除tag时触发                  | 移除的tag值                   |
| clear          | 可清空的单选模式下用户点击清空按钮时触发 | —                             |
| blur           | 当 input 失去焦点时触发                  | (event: Event)                |
| focus          | 当 input 获得焦点时触发                  | (event: Event)                |

