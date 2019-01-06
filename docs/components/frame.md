### Frame 框架

frame 框架打开的子页面要关闭时,需要通过调用父级页面的`$f.closeModel()`方法关闭

#### [在线预览](https://jsrun.net/mehKp/edit)

#### 示例
```js
{
        type:"frame",
        title:"素材",
        field:"fodder",
        value:["http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg"],
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

#### maker 快速生成
```js
$formCreate.maker.frame('素材','fodder',["http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg"]).props({
        src:"iframe.html",
        maxLength:2,
        type:"image"
    }).validate([
        {required:true, type: 'array', min: 2, message: '请选择2张图片', trigger: 'change'}
])
```

#### json 规则
```json
{
        type:"frame",
        title:"素材",
        field:"fodder",
        value:["http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg"],
        props:{
            type:"image", //frame类型,有input,file,image
            src:"iframe.html", //iframe地址
            maxLength:2, //value的最大数量
            icon:'folder', //打开弹出框的按钮图标
            height:"220px", //弹出框高度
            width:"350px", //弹出框宽度
            spin:false, //是否显示加载动画
            title:"请选择", //弹出框标题
            handleIcon: true, //操作按钮的图标 ,设置为false将不显示,设置为true为默认的预览图标,类型为file时默认为false,image类型默认为true
            allowRemove:true, //是否可删除,设置为false是不显示删除按钮
        },
        validate:[
            {required:true, type: 'array', min: 5, message: '请选择5张图片', trigger: 'change'}
        ],
}
```

#### 参数说明
##### 规则 rule

| 字段名 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| type | 元素类型 | String | true | - |
| field | 字段名称 | String | true | - |
| title | 字段别名 | String | true | - |
| value | value,当maxLength等与1时为字符串,其他时为数组 | String,Array | false | - |
| props | 元素配置 | Object | true | - |
| event | 元素事件 | Object | false | - |
| validate | 验证规则 | Array | false | - |

##### 元素配置 props

| 字段名 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| type | frame类型,有input\(字符串\),file\(文件\),image\(图片\) | String | false | 'input' |
| src | 框架的地址 | String | true | - |
| maxLength | value的最大数量 | Number | false | - |
| icon | 打开弹出框的按钮图标 | String | false | 'folder' |
| height | 弹出框高度 | String | false | - |
| width | 弹出框宽度 | String | false | - |
| spin | 是否显示加载动画 | Boolean | false | true |
| title | 弹出框标题 | String | false | - |
| handleIcon | 操作按钮的图标 ,设置为false将不显示,设置为true为默认的预览图标,类型为file时默认为false,image类型默认为true | Boolean | false | - |
| allowRemove | 是否可删除,设置为false是不显示删除按钮 | Boolean | false | true |

##### 事件扩展 event

| 事件名称 | 说明 |
| :--- | :--- |
| change | value改变时触发 |
| open | 打开弹出层回调 |
| ok | 点击确定时的回调 |
| handle | 点击操作按钮事件,默认为图片预览 |
| remove | 点击删除按钮事件,返回false将不删除 |
| cancel | 弹出框关闭是触发 |


