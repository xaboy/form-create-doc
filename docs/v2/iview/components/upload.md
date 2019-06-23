# Upload 上传


#### [在线预览](https://jsrun.net/dehKp/edit)

#### Maker
```js
maker.upload('轮播图','pic',['/uploads/20131030/30-075657_191.jpg'])
    .props({
        "action": "",
        "maxLength": 4,
        "multiple": true,
        "type": "select",
        "uploadType": "image",
        "name": "file",
        "onSuccess": function (res,file) {
            file.url = '/uploads/20131030/30-075657_191.jpg';
        },
    })
    .validate([{required:true, type: 'array', min: 3, message: '请上传3张图片', trigger: 'change'}])
```

#### JSON
```json
{
    type: "upload",
    field: "pic",
    title: "轮播图",
    value: [
        '/uploads/20131030/30-075657_191.jpg',
        '/uploads/20131030/30-075657_191.jpg'
        ],
    props: {
        "type":"select",
        "uploadType":"image",
        "action": "/upload.php",
        "name":"pic",
        "multiple": true,
        "accept":"image\/*",
        "format":["jpg","jpeg","png","gif"],
        "maxSize":2048,
        "maxLength":5,
        "onSuccess":function (res) {
            return res.data.filePath;
        }
    },
}
```
参考:[iview2.x](http://v2.iviewui.com/components/upload#API) | [iview3.x](https://www.iviewui.com/components/upload#API)

**value**: `String | Array`

#### props

| 属性              | 说明                                                         | 类型     | 默认值 |
| :---------------- | :----------------------------------------------------------- | :------- | :----- |
| action            | 上传的地址，必填                                             | String   | -      |
| headers           | 设置上传的请求头部                                           | Object   | {}     |
| multiple          | 是否支持多选文件                                             | Boolean  | false  |
| paste             | 是否支持粘贴上传文件                                         | Boolean  | false  |
| disabled 3.3.0    | 是否禁用                                                     | Boolean  | false  |
| data              | 上传时附带的额外参数                                         | Object   | -      |
| name              | 上传的文件字段名                                             | String   | file   |
| with-credentials  | 支持发送 cookie 凭证信息                                     | Boolean  | false  |
| show-upload-list  | 是否显示已上传文件列表                                       | Boolean  | true   |
| type              | 上传控件的类型，可选值为 `select`（点击选择），`drag`（支持拖拽） | String   | select |
| accept            | 接受上传的[文件类型](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept) | String   | -      |
| format            | 支持的文件类型，与 accept 不同的是，format 是识别文件的后缀名，accept 为 input 标签原生的 accept 属性，会在选择文件时过滤，可以两者结合使用 | Array    | []     |
| max-size          | 文件大小限制，单位 kb                                        | Number   | -      |
| before-upload     | 上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传 | Function | -      |
| on-progress       | 文件上传时的钩子，返回字段为 event, file, fileList           | Function | -      |
| on-success        | 文件上传成功时的钩子，返回字段为 response, file, fileList    | Function | -      |
| on-error          | 文件上传失败时的钩子，返回字段为 error, file, fileList       | Function | -      |
| on-preview        | 点击已上传的文件链接时的钩子，返回字段为 file， 可以通过 file.response 拿到服务端返回数据 | Function | -      |
| on-remove         | 文件列表移除文件时的钩子，返回字段为 file, fileList          | Function | -      |
| on-format-error   | 文件格式验证失败时的钩子，返回字段为 file, fileList          | Function | -      |
| on-exceeded-size  | 文件超出指定大小限制时的钩子，返回字段为 file, fileList      | Function | -      |
| handleIcon | 辅助操作按钮的图标 ,设置为false将不显示 | String  | - |
| onHandle | 点击辅助操作按钮事件,返回src | Function | - |
| allowRemove | 是否可删除,设置为false是不显示删除按钮 | Boolean | true |
| modalTitle | 图片预览弹出框标题文字 |  String | 预览 |