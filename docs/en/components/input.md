### Input

#### [demo](https://jsrun.net/7ehKp/edit)

#### maker
```js
$formCreate.maker.input('商品名称','goods_name').props({
        placeholder:'请输入商品名称'
    }).validate([
        { required: true, message: '请输入商品名称', trigger: 'blur' }
])
```


#### json
```json
{
        type:"input",
        title:"商品名称",
        field:"goods_name",
        value:"iphone 7",
        col:{
        	span:12,
        	labelWidth:150
        },
        props: {
            "type": "text", 
            "clearable":false,
            "disabled": false,
            "readonly": false,
            "rows": 4,
            "autosize": false,
            "number": false,
            "autofocus": false,
            "autocomplete": "off",
            "placeholder": "请输入商品名称",
            "size": "default",
            "spellcheck": false,
        },
        validate:[
            { required: true, message: '请输入goods_name', trigger: 'blur' },
        ],
}
```

#### Parameter Description

reference:[iview2.x](http://v2.iviewui.com/components/input#API) | [iview3.x](https://www.iviewui.com/components/input#API)

##### Input props

| Property     | Description                                                  | Type              | Default |
| ------------ | ------------------------------------------------------------ | ----------------- | ------- |
| type         | Input type. Optional value: `text`, `password`, `textarea`, `url`, `email`, `date` | String            | text    |
| size         | The size of Input. Optional value: `large`, `small`, `default` or leave empty. | String            | -       |
| placeholder  | Placeholder.                                                 | String            | -       |
| clearable    | Whether to display the clear button.                         | Boolean           | false   |
| disabled     | Set Input to disabled.                                       | Boolean           | false   |
| readonly     | Set Input to readonly.                                       | Boolean           | false   |
| maxlength    | Maximum input length.                                        | Number            | -       |
| icon         | Icon at the end of Input. Only works in text type.           | String            | -       |
| rows         | Default row number of textarea. Only works in textarea type. | Number            | 2       |
| autosize     | Automaticlly adapting the height of the content. Only works in textarea type. Accepts an object. For example, { minRows: 2, maxRows: 6 } . | Boolean \| Object | false   |
| number       | Change the user input to Number type.                        | Boolean           | false   |
| autofocus    | Same as autofocus in native input.                           | Boolean           | false   |
| autocomplete | Native autocomplete function, Optional value: off and on     | String            | off     |
| spellcheck   | Native spellcheck property.                                  | Boolean           | false   |
| wrap         | Native wrap property, optional value: hard and soft, only works in textarea type. | String            | soft    |



##### Input events

| Event Name | Description                                         | Return Value |
| ---------- | --------------------------------------------------- | ------------ |
| enter      | Emitted when press enter.                           | -            |
| click      | Emitted when clicking the icon if icon prop is set. | -            |
| change     | Emitted when data changing.                         | event        |
| focus      | Emitted when Input gets focus.                      | -            |
| blur       | Emitted when Input loses focus.                     | -            |
| keyup      | Native keyup event.                                 | event        |
| keydown    | Native keydown event.                               | event        |
| keypress   | Native keypress event.                              | event        |


