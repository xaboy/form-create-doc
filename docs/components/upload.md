### Upload 上传



::: tip accept 文件类型

[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input\#attr-accept](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept)

:::



#### [在线预览](https://jsrun.net/dehKp/edit)

#### 示例
```js
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
            "format":["jpg","jpeg","png","gif"], 
            "maxSize":2048, 
            "maxLength":5,
            "onSuccess":function (res) {
                return res.data.filePath;
            },
            handleIcon:'ionic',
            onHandle:(src)=>{alert(src);},
        },
    }
```

#### maker 快速生成
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

#### json 规则
```json
{
        type: "Upload",//必填!
        field: "pic",//必填!
        title: "轮播图",//必填!
        //input值,当maxLength等与1时值为字符串,大于1时值为数组
        value: ['http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg'], //input值
        props: {
            //上传控件的类型，可选值为 select（点击选择），drag（支持拖拽）
            "type":"select", //必填!
            //上传文件类型，可选值为 image（图片上传），file（文件上传）
            "uploadType":"image", //必填!
            //上传的地址
            "action": "", //必填!
            //上传的文件字段名
            "name":"",
            //上传时附带的额外参数
            "data":{},
            //设置上传的请求头部
            "headers": {},
            //是否支持多选文件
            "multiple": true,
            //支持发送 cookie 凭证信息
            "withCredentials":false,

            //不支持
            // "showUploadList":false, //是否显示已上传文件列表
            // "defaultFileList":[], // 默认已上传的文件列表

            //接受上传的文件类型
            "accept":"",
            //支持的文件类型，与 accept 不同的是，format 是识别文件的后缀名，accept 为 input 标签原生的 accept 属性，会在选择文件时过滤，可以两者结合使用
            "format":[],
            //文件大小限制，单位 kb
            "maxSize":undefined,
            //可上传文件数量
            "maxLength":1,
            //辅助操作按钮的图标 ,设置为false将不显示
            "handleIcon":'ionic',
            //是否可删除,设置为false是不显示删除按钮
            "allowRemove":true,
        },
}
```

#### 全局配置
> 可全局配置上传组件的处理方法
```json
option:{
    upload:{

            //上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传
            beforeUpload:()=>{},
            //文件上传时的钩子，返回字段为 event, file, fileList
            onProgress:(event, file, fileList)=>{},
            //文件上传成功时的钩子，返回字段为 response, file, fileList,若需有把文件添加到文件列表中,在函数值返回即可
            onSuccess:(response, file, fileList)=>{
                // return 'filePath';
            },
            //文件上传失败时的钩子，返回字段为 error, file, fileList
            onError:(error, file, fileList)=>{},
            //点击已上传的文件链接时的钩子，返回字段为 file， 可以通过 file.response 拿到服务端返回数据
            onPreview:(file)=>{},
            //文件列表移除文件时的钩子，返回字段为 file, fileList
            onRemove:(file, fileList)=>{},
            //文件格式验证失败时的钩子，返回字段为 file, fileList
            onFormatError:(file, fileList)=>{},
            //文件超出指定大小限制时的钩子，返回字段为 file, fileList
            onExceededSize:(file, fileList)=>{},
            //辅助操作按钮的图标 ,设置为false将不显示
            handleIcon:'ios-eye-outline',
            //点击辅助操作按钮事件
            onHandle:(src)=>{},
            //是否可删除,设置为false是不显示删除按钮
            allowRemove:true,
    }
}
```

#### 参数说明

参考:[iview2.x](http://v2.iviewui.com/components/upload#API) | [iview3.x](https://www.iviewui.com/components/upload#API)



##### 规则 rule

| 字段名 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| type | 元素类型 | String | true | - |
| field | 字段名称 | String | true | - |
| title | 字段别名 | String | true | - |
| value | 字段值,当props.maxLength等与1时值为字符串,大于1时值为数组 | String,Array | false | - |
| props | 元素配置 | Object | true | - |
| validate | 验证规则 | Array | false | - |

##### 元素配置 props

| 字段名 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| type | 上传控件的类型，可选值为 select（点击选择），drag（支持拖拽） | String | true | - |
| uploadType | 上传文件类型，可选值为 image（图片上传），file（文件上传） | String | true | - |
| action | 上传的地址 | String | true | - |
| name | 上传的文件字段名 | String | false | - |
| data | 上传时附带的额外参数 | Object | false | - |
| headers | 设置上传的请求头部 | Object | false | - |
| multiple | 是否支持多选文件 | Boolean | false | false |
| withCredentials | 支持发送 cookie 凭证信息 | Boolean | false | false |
| accept | 接受上传的文件类型 | String | false | - |
| format | 支持的文件类型，与 accept 不同的是，format 是识别文件的后缀名，accept 为 input 标签原生的 accept 属性，会在选择文件时过滤，可以两者结合使用 | String | false | - |
| maxSize | 文件大小限制，单位 kb | Number | false | - |
| maxLength | 可上传文件数量 | Number | false | - |
| beforeUpload | 上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传 | Function | false | - |
| onProgress | 文件上传时的钩子，返回字段为 event, file, fileList | Function | false | - |
| onSuccess | 文件上传成功时的钩子，返回字段为 response, file, fileList,若需有把文件添加到文件列表中,在函数返回值即可 | Function | true | - |
| onError | 文件上传失败时的钩子，返回字段为 error, file, fileList | Function | false | - |
| onPreview | 点击已上传的文件链接时的钩子，返回字段为 file， 可以通过 file.response 拿到服务端返回数据 | Function | false | - |
| onRemove | 文件列表移除文件时的钩子，返回字段为 file, fileList | Function | false | - |
| onFormatError | 文件格式验证失败时的钩子，返回字段为 file, fileList | Function | false | - |
| onExceededSize | 文件超出指定大小限制时的钩子，返回字段为 file, fileList | Function | false | - |
| handleIcon | 辅助操作按钮的图标 ,设置为false将不显示 | String | false | - |
| onHandle | 点击辅助操作按钮事件,返回src | Function | false | - |
| allowRemove | 是否可删除,设置为false是不显示删除按钮 | Boolean | false | true |


