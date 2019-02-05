### Select 

#### [demo](https://jsrun.net/FehKp/edit)

#### maker
```js
$formCreate.maker.select("产品分类","cate_id",["104","105"]).options([
        {"value": "104", "label": "生态蔬菜", "disabled": false},
        {"value": "105", "label": "新鲜水果", "disabled": false},
    ]).props({
        multiple:true
})
```

#### json
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
            "clearable": false,
            "filterable": true,
            "remote": false,
            "remote-method":Function,
            "loading": false, 
            "loading-text": "加载中", 
            "size":"default",
            "placeholder": "请选择",
            "not-found-text": "无匹配数据",
            "placement": "bottom",
            "disabled": false,
        },
        validate:[],
}
```

#### Parameter Description
reference:[iview2.x](http://v2.iviewui.com/components/select#API) | [iview3.x](https://www.iviewui.com/components/select#API)

##### Select props

| Property       | Description                                                  | Type                      | Default          |
| -------------- | ------------------------------------------------------------ | ------------------------- | ---------------- |
| multiple       | set select to support multiple                               | Boolean                   | false            |
| disabled       | set select to disable                                        | Boolean                   | false            |
| clearable      | set select to clear option where used in single mode         | Boolean                   | false            |
| filterable     | set select to support filter                                 | Boolean                   | false            |
| remote         | set select to support remote data                            | Boolean                   | false            |
| remoteMethod  | the method of getting remote data                            | Function                  | -                |
| loading        | set select to remote search data loading state.              | Boolean                   | false            |
| loadingText   | the loading text tip for remote searching.                   | String                    | loading          |
| label          | use for init in the remote mode, you should set it because it can't get the option label by the value. | String \| Number \| Array | empty            |
| size           | The size of select. The value could be `large`, `small`, `default`or none. | String                    | -                |
| placeholder    | the text for placeholder                                     | String                    | select           |
| notFoundText | The context to show when the select is null.                 | String                    | Nothing matched. |
| labelInValue | set select return value what include label and value, which default return value. | Boolean                   | false            |
| placement      | The direction of pop-ups. The value could be `bottom` or `top`, supports automatic recognition after 2.12.0 | String                    | bottom           |
| transfer       | Whether to append the layer in body. When used in Tabs or a fixed Table column, suggests adding this property, it will not be affected by the parent style, resulting in better results. | Boolean                   | false            |

##### Option props

| Property | Description                                                  | Type             | Default |
| -------- | ------------------------------------------------------------ | ---------------- | ------- |
| value    | the option value, filter by the property, required           | String \| Number | empty   |
| label    | The content of the option, read slot default. If not have slot, it will show the label. If not have label, show the value.Mostly just write slot, but for cumtomized option, this is useful. | String           | -       |
| disabled | set to disable the option.                                   | Boolean          | false   |


##### Select events

| Event Name   | Description                                                  | Return Value               |
| ------------ | ------------------------------------------------------------ | -------------------------- |
| change       | Emitted when selected `Option`change.It will return value. See the label-in-value property if need return label | The current selected item. |
| query-change | Emitted when query word is changed.                          | query                      |
| clear        | Emitted when click clear button.                             | -                          |
| open-change  | Emitted when dropdown show or hide.                          | true / false               |