# Radio 单选框

#### [在线预览](https://jsrun.net/cehKp/edit)

#### Maker
```js
maker.radio('是否包邮','is_postage','0').options([
    {value:"0",label:"不包邮",disabled:false},
    {value:"1",label:"包邮",disabled:false},
    {value:"2",label:"未知",disabled:true},
])
```

#### JSON
```json
{
    type:"radio",
    title:"是否包邮",
    field:"is_postage",
    value:"0",
    options:[
        {value:"0",label:"不包邮",disabled:false},
        {value:"1",label:"包邮",disabled:true},
    ],
}
```

参考:[iview2.x](http://v2.iviewui.com/components/radio#API) | [iview3.x](https://www.iviewui.com/components/radio#API)

**value**: `String | Number`



#### options

| 属性        | 说明                                                         | 类型                    | 默认值 |
| :---------- | :----------------------------------------------------------- | :---------------------- | :----- |
| value       | 选项值          | String \| Number                 | -  |
| label       | 只在组合使用时有效。指定当前选项的 value 值，组合会自动判断当前选择的项目 | String \| Number        | -      |
| disabled    | 是否禁用当前项                                               | Boolean                 | false  |
| size        | 单选框的尺寸，可选值为 `large`、`small`、`default` 或者不设置 | String                  | -      |

#### props
 

| 属性     | 说明                                                    | 类型             | 默认值 |
| :------- | :------------------------------------------------------ | :--------------- | :----- |
| type     | 可选值为 button 或不填，为 button 时使用按钮样式        | String           | -      |
| size     | 尺寸，可选值为`large`、`small`、`default`或者不设置     | String           | -      |
| vertical | 是否垂直排列，按钮样式下无效                            | Boolean          | false  |

#### events

| 事件名    | 说明                                                         | 返回值 |
| :-------- | :----------------------------------------------------------- | :----- |
| on-change | 在选项状态发生改变时触发，返回当前状态。通过修改外部的数据改变时不会触发 | ...    |


