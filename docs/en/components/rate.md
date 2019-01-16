### Rate

#### [demo](https://jsrun.net/CehKp/edit)

#### maker
```js
$formCreate.maker.rate('推荐级别','rate',2)
        .props({
            "count": 10,
            "allowHalf": false
        })
        .validate([{required:true,type:'number',min:3, message: '请大于3颗星',trigger:'change'}])
```

#### json
```json
{
        type:"rate",
        field:"rate",
        title:"推荐级别",
        value:3.5,
        props:{
            "count": 10,
            "allowHalf": true,
            "disabled": false,
            "showText": true,
            "clearable": true,
        },
        validate:[
            {required:true,type:'number',min:3, message: '请大于3颗星',trigger:'change'}
        ]
}
```

#### Parameter Description
reference:[iview2.x](http://v2.iviewui.com/components/rate#API) | [iview3.x](https://www.iviewui.com/components/rate#API)

#####  元素配置 propsRate props

| Property   | Description                       | Type    | Default |
| ---------- | --------------------------------- | ------- | ------- |
| count      | Star count.                       | Number  | 5       |
| allowHalf | Whether to allow semi selection.  | Boolean | false   |
| disabled   | Read only, unable to interact.    | Boolean | false   |
| showText  | Whether to display a prompt text. | Boolean | false   |
| clearable  | Whether to cancel the selection.  | Boolean |         |

##### Rate events

| Event Name | Description                 | Return Value |
| ---------- | --------------------------- | ------------ |
| change     | Emitted when rate changing. | value        |


