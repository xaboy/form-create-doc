### Frame

When the sub-page opened by the frame is to be closed, it needs to be closed by calling the `$f.closeModel()` method of the parent page.

#### [demo](https://jsrun.net/mehKp/edit)

#### maker
```js
$formCreate.maker.frame('素材','fodder',["http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg"]).props({
        src:"iframe.html",
        maxLength:2,
        type:"image"
    }).validate([
        {required:true, type: 'array', min: 2, message: '请选择2张图片', trigger: 'change'}
])
```

#### json
```json
{
        type:"frame",
        title:"素材",
        field:"fodder",
        value:["http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg"],
        props:{
            type:"image",
            src:"iframe.html",
            maxLength:2, 
            icon:'folder',
            height:"220px", 
            width:"350px", 
            spin:false,
            title:"请选择",
            handleIcon: true,
            allowRemove:true,
        },
        validate:[
            {required:true, type: 'array', min: 5, message: '请选择5张图片', trigger: 'change'}
        ],
}
```

#### Parameter Description
##### 

##### Frame props

| 字段名 | 说明 | 字段类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| type | frame类型,有input\(字符串\),file\(文件\),image\(图片\) | String | 'input' |
| src | Frame url | String | - |
| maxLength | The maximum number of values | Number | - |
| icon | Open button icon for popup | String | 'folder' |
| height | Modal height | String | - |
| width | Modal width | String | - |
| spin | Whether to display the loading animation | Boolean | true |
| title | Modal title | String | - |
| handleIcon | The icon of the operation button is set to false and will not be displayed. Set to true as the default preview icon. When the type is file, the default is false. The image type defaults to true. | Boolean | - |
| allowRemove | Whether it can be deleted, set to false is not to display the delete button | Boolean | true |

##### Frame events

| Event Name | Description |
| :--- | :--- |
| change | Triggered when value changes |
| open | Open modal layer callback |
| ok | Trigger when clicking the OK button |
| handle | Click the action button to try triggering. The default is image preview. |
| remove | Triggered when the delete button is clicked, false returns will not be deleted |
| cancel | Triggered when the  modal is closed |


