### Cascader 

#### [demo](https://jsrun.net/EehKp/edit)

#### maker
```js
$formCreate.maker.cascader('所在区域','address',['陕西省','西安市','新城区']).props({
        data:window.province
})
```

#### json
```json
{
        type:"cascader",
        title:"所在区域",
        field:"address",
        value:['陕西省','西安市','新城区'],
        props:{
            data:window.province || [],
            disabled:false,
            clearable:true,
            placeholder:'请选择',
            trigger:'click',
            changeOnSelect:false,
            size:undefined,
            filterable:false,
            notFoundText:'无匹配数据',
            transfer:false,
        },
        validate:[],
}
```

#### Parameter Description

reference:[iview2.x](http://v2.iviewui.com/components/cascader#API) | [iview3.x](https://www.iviewui.com/components/cascader#API)

##### Cascader props

| Property         | Description                                                  | Type     | Default                    |
| ---------------- | ------------------------------------------------------------ | -------- | -------------------------- |
| data             | Optional data source, the format is shown on the demos above. | Array    | []                         |
| render-format    | Customize display format by sending a function to this property. It will be called after selection. | Function | label => label.join(' / ') |
| disabled         | Disable the selector or not.                                 | Boolean  | false                      |
| clearable        | Support clear operation or not.                              | Boolean  | true                       |
| placeholder      | Input box placeholder.                                       | String   | Select                     |
| trigger          | The way subset spreading. Optional value: `click` or `hover` | String   | click                      |
| change-on-select | When it's set to true, change will occur when selecting each level of the data set. For more details, see demos above. | Boolean  | false                      |
| size             | The size of the input box, Optional value: `large` or `small` or leave blank. | String   | -                          |
| load-data        | Load options lazily, you need add loading to data.           | Function | -                          |
| filterable       | Whether show search input.                                   | Boolean  | false                      |
| not-found-text   | Specify content to show when no result matches.              | String   | Not Found                  |
| transfer         | Whether to append the layer in body. When used in Tabs or a fixed Table column, suggests adding this property, it will not be affected by the parent style, resulting in better results. | Boolean  | false                      |

##### Cascader events

| Event Name | Description                                                  | Return Value        |
| ---------- | ------------------------------------------------------------ | ------------------- |
| change     | Callback function after selection. value is the selected item's value. selectedData is the detail data of the selected item./td> | value, selectedData |


