# Select 下拉选择框

#### [在线预览](https://jsrun.pro/FehKp/edit)

#### Maker
```js
maker.select("产品分类","cate_id",["104","105"]).options([
        {"value": "104", "label": "生态蔬菜", "disabled": false},
        {"value": "105", "label": "新鲜水果", "disabled": false},
    ]).props({
        multiple:true
    })
```

#### JSON
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
        "multiple": true, 
        "placeholder": "请选择", 
        "not-found-text": "无匹配数据",
        "placement": "bottom", 
    },
}
```

参考:[iview2.x](http://v2.iviewui.com/components/select#API) | [iview3.x](https://www.iviewui.com/components/select#API)

**value**: `String | Number | Array`


#### options

 
| 属性     | 说明                                                         | 类型             | 默认值 |
| :------- | :----------------------------------------------------------- | :--------------- | :----- |
| value    | 选项值，默认根据此属性值进行筛选，必填                       | String \| Number | 无     |
| label    | 选项显示的内容，默认会读取 slot，无 slot 时，优先读取该 label 值，无 label 时，读取 value。当选中时，选择器会显示 label 为已选文案。大部分情况不需要配置此项，直接写入 slot 即可，在自定义选项时，该属性非常有用。 | String           | -      |
| disabled | 是否禁用当前项                                               | Boolean          | false  |

#### props

| 属性                      | 说明                                                         | 类型                      | 默认值       |
| :------------------------ | :----------------------------------------------------------- | :------------------------ | :----------- |
| multiple                  | 是否支持多选                                                 | Boolean                   | false        |
| disabled                  | 是否禁用                                                     | Boolean                   | false        |
| clearable                 | 是否可以清空选项，只在单选时有效                             | Boolean                   | false        |
| filterable                | 是否支持搜索                                                 | Boolean                   | false        |
| remote                    | 是否使用远程搜索                                             | Boolean                   | false        |
| remote-method             | 远程搜索的方法                                               | Function                  | -            |
| loading                   | 当前是否正在远程搜索                                         | Boolean                   | false        |
| loading-text              | 远程搜索中的文字提示                                         | String                    | 加载中       |
| label                     | 仅在 remote 模式下，初始化时使用。因为仅通过 value 无法得知选项的 label，需手动设置。 | String \| Number \| Array | 空           |
| size                      | 选择框大小，可选值为`large`、`small`、`default`或者不填      | String                    | -            |
| placeholder               | 选择框默认文字                                               | String                    | 请选择       |
| not-found-text            | 当下拉列表为空时显示的内容                                   | String                    | 无匹配数据   |
| label-in-value            | 在返回选项时，是否将 label 和 value 一并返回，默认只返回 value | Boolean                   | false        |
| placement                 | 弹窗的展开方向，可选值为 `top`、`bottom`、`top-start`、`bottom-start`、`top-end`、`bottom-end` | String                    | bottom-start |
| transfer                  | 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果 | Boolean                   | false        |
| element-id                | 给表单元素设置 `id`，详见 Form 用法。                        | String                    | -            |
| transfer-class-name 3.3.0 | 开启 transfer 时，给浮层添加额外的 class 名称                | String                    | -            |
| prefix 3.4.0              | 在 Select 内显示图标                                         | String                    | -            |
| max-tag-count 3.4.0       | 多选时最多显示多少个 tag                                     | Number                    | -            |
| max-tag-placeholder 3.4.0 | 隐藏 tag 时显示的内容，参数是剩余项数量                      | Function                  | -            |

#### events
 
| 事件名          | 说明                                                         | 返回值       |
| :-------------- | :----------------------------------------------------------- | :----------- |
| on-change       | 选中的`Option`变化时触发，默认返回 value，如需返回 label，详见 label-in-value 属性 | 当前选中项   |
| on-query-change | 搜索词改变时触发                                             | query        |
| on-clear        | 点击清空按钮时触发                                           | 无           |
| on-open-change  | 下拉框展开或收起时触发                                       | true / false |