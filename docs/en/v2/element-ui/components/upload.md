### Upload 上传



::: tip accept 文件类型

[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input\#attr-accept](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept)

:::

#### Maker
```js
$formCreate.maker.upload('轮播图','pic',['http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg'])
    .props({
        "action": "/upload.php",
        "limit": 4,
        "multiple": true,
        "type": "select",
        "uploadType": "image",
        "name": "file",
        "onSuccess": function (res, file) {
            file.url = res.data.filePath;
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
        'http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg',
        'http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg'
        ],
    props: {
        "type":"select",
        "uploadType":"image",
        "action": "/upload.php",
        "name":"pic",
        "multiple": true,
        "accept":"image\/*",
        "limit": 2,
        "onSuccess":function (res, file) {
            file.url = res.data.filePath;
        }
    },
}
```


参考:[Element_Upload](http://element-cn.eleme.io/#/zh-CN/component/upload)

**value** :`Array | String`


#### props

| 参数             | 说明                                                         | 类型                               | 可选值                    | 默认值 |
| ---------------- | ------------------------------------------------------------ | ---------------------------------- | ------------------------- | ------ |
| action           | 必选参数，上传的地址                                         | string                             | —                         | —      |
| uploadType | 上传文件类型 | String | image（图片上传），file（文件上传） | —      |
| headers          | 设置上传的请求头部                                           | object                             | —                         | —      |
| multiple         | 是否支持多选文件                                             | boolean                            | —                         | —      |
| data             | 上传时附带的额外参数                                         | object                             | —                         | —      |
| name             | 上传的文件字段名                                             | string                             | —                         | file   |
| withCredentials | 支持发送 cookie 凭证信息                                     | boolean                            | —                         | false  |
| showFileList   | 是否显示已上传文件列表                                       | boolean                            | —                         | true   |
| drag             | 是否启用拖拽上传                                             | boolean                            | —                         | false  |
| accept           | 接受上传的[文件类型](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept)（thumbnail-mode 模式下此参数无效） | string                             | —                         | —      |
| onPreview       | 点击文件列表中已上传的文件时的钩子                           | function(file)                     | —                         | —      |
| onRemove        | 文件列表移除文件时的钩子                                     | function(file, fileList)           | —                         | —      |
| onSuccess       | 文件上传成功时的钩子                                         | function(response, file, fileList) | —                         | —      |
| onError         | 文件上传失败时的钩子                                         | function(err, file, fileList)      | —                         | —      |
| onProgress      | 文件上传时的钩子                                             | function(event, file, fileList)    | —                         | —      |
| onChange        | 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用 | function(file, fileList)           | —                         | —      |
| beforeUpload    | 上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。 | function(file)                     | —                         | —      |
| beforeRemove    | 删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止上传。 | function(file, fileList)           | —                         | —      |
| listType        | 文件列表的类型                                               | string                             | text/picture/picture-card | text   |
| autoUpload      | 是否在选取文件后立即进行上传                                 | boolean                            | —                         | true   |
| fileList        | 上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}] | array                              | —                         | []     |
| httpRequest     | 覆盖默认的上传行为，可以自定义上传的实现                     | function                           | —                         | —      |
| disabled         | 是否禁用                                                     | boolean                            | —                         | false  |
| limit            | 最大允许上传个数                                             | number                             | —                         | —      |
| onExceed        | 文件超出个数限制时的钩子                                     | function(files, fileList)          | —                         | -      |
| modalTitle | 图片预览弹出框标题文字 |  String  | 预览 |
