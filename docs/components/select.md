### Select 下拉选择框

#### [在线预览](https://jsrun.net/FehKp/edit)

#### 示例
```js
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
        type: "select",//必填!
        field: "cate_id",//必填!
        title: "产品分类",//必填!
        //input值
        value: ["104","105"],
        //可选参数
        options: [
            {"value": "104", "label": "生态蔬菜", "disabled": false},
            {"value": "105", "label": "新鲜水果", "disabled": false},
        ],//必填!
        props: {
       	 	//是否支持多选
            "multiple": true,
            //是否可以清空选项，只在单选时有效
            "clearable": false,
            //是否支持搜索
            "filterable": true,

            // 已支持远程搜索
            "remote": false, //是否使用远程搜索
            "remote-method":Function, //远程搜索的方法
            "loading": false, //当前是否正在远程搜索
            "loading-text": "加载中", //远程搜索中的文字提示
            //选择框大小，可选值为large、small、default或者不填
            "size":"default",
            //选择框默认文字
            "placeholder": "请选择",
             //当下拉列表为空时显示的内容
            "not-found-text": "无匹配数据",
            //弹窗的展开方向，可选值为 bottom 和 top
            "placement": "bottom",
            //是否禁用
            "disabled": false,
        },
        validate:[],
}
```

#### 参数说明
参考:[iview2.x](http://v2.iviewui.com/components/select#API) | [iview3.x](https://www.iviewui.com/components/select#API)



##### 规则 rule

| 字段名 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| type | 元素类型 | String | true | - |
| field | 字段名称 | String | true | - |
| title | 字段别名 | String | true | - |
| value | 字段值,当props.multiple设置为true是 value为数组 | String,Number,Array | false | - |
| options | 可选参数 | Array | true | - |
| props | 元素配置 | Object | false | - |
| event | 元素事件 | Object | false | - |
| validate | 验证规则 | Array | false | - |

##### 可选参数 Options

| 字段名 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| value | 参数值 | String,Number | true | - |
| label | 字段别名 | String | true | - |
| disabled | 设置为禁用状态 | Boolean | false | false |


##### 元素配置 props

| 字段名 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| multiple | 是否支持多选 | Boolean | false | false |
| clearable | 是否可以清空选项，只在单选时有效 | Boolean | false | false |
| filterable | 是否支持搜索 | Boolean | false | true |
| size | 选择框大小，可选值为large、small、default或者不填 | String | false | - |
| placeholder | 选择框默认文字 | String | false | - |
| notFoundText | 当下拉列表为空时显示的内容 | String | false | '无匹配数据' |
| placement | 弹窗的展开方向，可选值为 bottom 和 top | String | false | 'bottom' |
| disabled | 是否禁用 | Boolean | false | false |


##### 事件扩展 event

| 事件名称 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| change | 选中的Option变化时触发，返回 value | Function | false | - |
| query-change | 搜索词改变时触发 | Function | false | - |


