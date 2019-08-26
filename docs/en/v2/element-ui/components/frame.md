# Frame 框架

frame 框架打开的子页面要关闭时,需要通过调用父级页面的`$f.closeModel`方法关闭

#### [在线预览](https://jsrun.net/mehKp/edit)

#### Maker
```js
maker.frame('素材','fodder',["/uploads/20131030/30-075657_191.jpg"]).props({
        src:"iframe.html",
        maxLength:2,
        type:"image"
    }).validate([
        {required:true, type: 'array', min: 2, message: '请选择2张图片', trigger: 'change'}
])
```

#### JSON
```json
{
    type:"frame",
    title:"素材",
    field:"fodder",
    value:["/uploads/20131030/30-075657_191.jpg"],
    props:{
        type:"image",
        src:"iframe.html",
        maxLength:2,

    },
    validate:[
        {required:true, type: 'array', min: 2, message: '请选择2张图片', trigger: 'change'}
    ],
}
```
**value**: `String | Number | Array`

#### props


| 属性      | 说明                                                | 类型    | 默认值                          |
| :-------- | :-------------------------------------------------- | :------ | :------------------------------ |
| type | frame显示类型,有input\(字符串\),file\(文件\),image\(图片\)                                            |  String | input                           |
| src | 框架页面的地址                                    |  String | -                            |
| helper | 开启框架页面内助手方法                                  | Boolean | false                           |
| disabled  | 禁用组件                                    | Boolean |  false                            |
| icon | 打开弹出框的按钮图标                              | String | -                           |
| width    | 弹出框宽度                                      | Number   | -                              |
| height    | 弹出框高度           | Number  | - |
| okBtnText      | 弹出框确定按钮文字 | String  | '确定'                             |
| closeBtnText | 弹出框关闭按钮文字 |  String | '关闭' |
| modalTitle | 图片预览弹出框标题文字 |  String | '预览' |
| handleIcon | 操作按钮的图标 ,设置为false将不显示,设置为true为默认的预览图标,类型为file时默认为false,image类型默认为true |  String \| Boolean | - |
| title | 弹出框标题 | String | - |
| modal | 配置弹出框 props | Object | - |
| allowRemove | 是否可删除,设置为false是不显示删除按钮,type等于 image 或者 file 时有效 | Boolean | true |
| onChange | value改变时触发 | Function | - |
| onOpen | 打开弹出层回调 | Function | - |
| onOk | 点击确定时的回调,返回false将不关闭弹窗 | Function | - |
| onHandle | 点击操作按钮事件,默认为图片预览 | Function | - |
| onBeforeRemove | 点击删除按钮删除前事件,返回false将不删除 | Function | - |
| onRemove | 点击删除按钮事件 | Function | - |
| onCancel | 弹出框关闭时触发,返回false将不关闭弹窗 | Function | - |


#### helper
开启助手方法后框架页面会增加全局变量`form_create_helper`,用于快速操作组件

- close

    - 参数:
        - `field`  组件的 field

    - 说明: 关闭当前frame组件的弹出框

    - 示例:
    ```js
    form_create_helper.close(field)
    ```

- set

    - 参数:
        - `field`  组件的 field
        - `value`  组件的值

    - 说明: 修改当前frame组件的值

    - 示例:
    ```js
    form_create_helper.set(field,[1,2,3])
    ```

- get

    - 参数:
        - `field`  组件的 field

    - 说明: 获取当前frame组件的值

    - 示例:
    ```js
    const value = form_create_helper.get(field)
    ```

