### Upload 上传



::: tip accept 文件类型

[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input\#attr-accept](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept)

:::

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
            }
        },
}
```

#### 全局配置
> 可全局配置上传组件的处理方法
```json
option:{
    upload:{
		"onPreview": function (file) {
		}, //点击文件列表中已上传的文件时的钩子
    	"onRemove": function (file, fileList) {
    	}, //文件列表移除文件时的钩子
    	"onSuccess": function () {
    		return 'http://file.lotkk.com/form-create.jpeg';
    	}, //文件上传成功时的钩子，返回字段为 response, file, fileList
    	"onError": function (err, file, fileList) {
    	},// 文件上传失败时的钩子
    	"onProgress": function (event, file, fileList) {
    	},// 文件上传失败时的钩子
   		"onChange": function (file, fileList) {
    	},// 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
    	"beforeUpload": function (file) {
    	},// 上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。
    	"beforeRemove": function (file, fileList) {
    	},// 删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止上传。
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

参考:[Element_Upload](http://element-cn.eleme.io/#/zh-CN/component/upload)



##### 规则 rule

| 字段名 | 说明 | 字段类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| type | 元素类型 | String | - |
| field | 字段名称 | String | - |
| title | 字段别名 | String | - |
| value | 字段值,当props.maxLength等与1时值为字符串,大于1时值为数组 | String,Array | - |
| props | 元素配置 | Object | - |
| validate | 验证规则 | Array | - |

##### 元素配置 props

| 参数             | 说明                                                         | 类型                               | 可选值                    | 默认值 |
| ---------------- | ------------------------------------------------------------ | ---------------------------------- | ------------------------- | ------ |
| action           | 必选参数，上传的地址                                         | string                             | —                         | —      |
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

