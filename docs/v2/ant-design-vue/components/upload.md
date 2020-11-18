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
        "action": "/upload.php",
        "limit": 2,
        "onSuccess":function (res, file) {
            file.url = res.data.filePath;
        }
    },
}
```


参考:[Ant-design-vue_Upload](https://www.antdv.com/components/upload-cn/)

**value** :`Array | String`

#### props

| 参数                  | 说明                                                         | 类型                                                         | 默认值 |
| :-------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----- |
| **onSuccess**         | 用于获取文件链接 `file.url =  file.response.url`             | Function(file,fileList)                                      | 无     |
| limit                 | 文件上传最大数                                               |                                                              |        |
| accept                | 接受上传的文件类型, 详见 [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) | string                                                       | 无     |
| action                | 上传的地址                                                   | string\|(file) => `Promise`                                  | 无     |
| method                | 上传请求的 http method                                       | string                                                       | 'post' |
| directory             | 支持上传文件夹（[caniuse](https://caniuse.com/#feat=input-file-directory)） | boolean                                                      | false  |
| beforeUpload          | 上传文件之前的钩子，参数为上传的文件，若返回 `false` 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传（ resolve 传入 `File` 或 `Blob` 对象则上传 resolve 传入对象）。**注意：IE9 不支持该方法**。 | (file, fileList) => `boolean | Promise`                      | 无     |
| customRequest         | 通过覆盖默认的上传行为，可以自定义自己的上传实现             | Function                                                     | 无     |
| data                  | 上传所需参数或返回上传参数的方法                             | object\|(file) => object                                     | 无     |
| disabled              | 是否禁用                                                     | boolean                                                      | false  |
| fileList              | 已经上传的文件列表（受控）                                   | object[]                                                     | 无     |
| headers               | 设置上传的请求头部，IE10 以上有效                            | object                                                       | 无     |
| listType              | 上传列表的内建样式，支持三种基本样式 `text`, `picture`和 `picture-card` | string                                                       | 'text' |
| multiple              | 是否支持多选文件，`ie10+` 支持。开启后按住 ctrl 可选择多个文件。 | boolean                                                      | false  |
| name                  | 发到后台的文件参数名                                         | string                                                       | 'file' |
| previewFile           | 自定义文件预览逻辑                                           | (file: File \| Blob) => Promise<dataURL: string>             | 无     |
| showUploadList        | 是否展示 uploadList, 可设为一个对象，用于单独设定 showPreviewIcon 和 showRemoveIcon | Boolean or { showPreviewIcon?: boolean, showRemoveIcon?: boolean } | true   |
| supportServerRender   | 服务端渲染时需要打开这个                                     | boolean                                                      | false  |
| withCredentials       | 上传请求时是否携带 cookie                                    | boolean                                                      | false  |
| openFileDialogOnClick | 点击打开文件对话框                                           | boolean                                                      | true   |
| remove                | 点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除。 | Function(file): `boolean | Promise`                          | 无     |
| transformFile         | 在上传之前转换文件。支持返回一个 Promise 对象                | Function(file): `string | Blob | File | Promise<string | Blob | File>` | 无     |



#### on 事件

| 事件名称 | 说明                                                         | 回调参数             |
| :------- | :----------------------------------------------------------- | :------------------- |
| change   | 上传文件改变时的状态，详见 [change](https://www.antdv.com/components/upload-cn/#change) | Function             |
| preview  | 点击文件链接或预览图标时的回调                               | Function(file)       |
| download | 点击下载文件时的回调，如果没有指定，则默认跳转到文件 url 对应的标签页。 | Function(file): void |
| reject   | 拖拽文件不符合 accept 类型时的回调                           | Function(fileList)   |