### Upload

::: tip accept

[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input\#attr-accept](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept)

:::



#### [demo](https://jsrun.net/dehKp/edit)

#### maker
```js
$formCreate.maker.upload('轮播图','pic',['http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg'])
        .props({
            "action": "",
            "maxLength": 4,
            "multiple": true,
            "type": "select",
            "uploadType": "image",
            "name": "file",
            "onSuccess": function () {
                return 'http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg';
            },
        })
        .validate([{required:true, type: 'array', min: 3, message: '请上传3张图片', trigger: 'change'}])
```

#### json
```json
{
        type: "Upload",
        field: "pic",
        title: "轮播图",
        value: ['http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg'],
        props: {
            "type":"select",
            "uploadType":"image",
            "action": "",
            "name":"",
            "data":{},
            "headers": {},
            "multiple": true,
            "withCredentials":false,
            "accept":"",
            "format":[],
            "maxSize":undefined,
            "maxLength":1,
            "handleIcon":'ionic',
            "allowRemove":true,
        },
}
```

#### Parameter Description

reference::[iview2.x](http://v2.iviewui.com/components/upload#API) | [iview3.x](https://www.iviewui.com/components/upload#API)



##### Upload props

| Property         | Decription                                                   | Type     | Default |
| ---------------- | ------------------------------------------------------------ | -------- | ------- |
| action           | Upload request URL, required.                                | String   | -       |
| headers          | Upload request header.                                       | Object   | {}      |
| multiple         | Enable multi choices or not.                                 | Boolean  | false   |
| data             | Extra data with upload request.                              | Object   | -       |
| name             | The key in upload request targeting to the file.             | String   | file    |
| with-credentials | Enable certification info in Cookie or not.                  | Boolean  | false   |
| show-upload-list | Show upload file list or not.                                | Boolean  | true    |
| type             | The type of Upload. Optional value: `select`, `drag`         | String   | select  |
| accept           | Accepted [file formats](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept). | String   | -       |
| format           | Accepted file formats. Different to accept prop, format recognizes the appendix of the file. Accept is same to HTML's input accept prop, it'll filter the file list during file selecting. You can use them together. | Array    | []      |
| max-size         | File size limitation. Unit: kb                               | Number   | -       |
| before-upload    | Hook before file starts to upload. The only parameter is the file. If the function return false, or a Promise, default upload procedure will be stopped. | Function | -       |
| on-progress      | Hook when file is uploading. It has three params: event, file, fileList | Function | -       |
| on-success       | Hook when file is successfully uploaded. It has three params: response, file, fileList | Function | -       |
| on-error         | Hook when file is failed to upload. It has three params: error, file, fileList | Function | -       |
| on-preview       | Hook when clicking uploaded file link. The only parameter is file. You can get server-side response data in file.response. | Function | -       |
| on-remove        | Hook when a certain file is removed from the file list. It has two params: file, fileList | Function | -       |
| on-format-error  | Hook when file format verification is failed. It has two params: file, fileList | Function | -       |
| on-exceeded-size | Hook when file size exceeds the limitation. It has two params: file, fileList | Function | -       |