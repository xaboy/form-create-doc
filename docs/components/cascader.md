### Cascader 多级联动

::: tip 省市区联动json数据

[https://github.com/xaboy/form-create/tree/master/district](https://github.com/xaboy/form-create/tree/master/district)

:::

#### [在线预览](https://jsrun.net/EehKp/edit)

#### 示例
```js
{
        type:"cascader",
        title:"所在区域",
        field:"address",
        value:['陕西省','西安市','新城区'],
        props:{
            //省市区三级联动json数据
            data:window.province,
            renderFormat:label => label.join(' / '),
        },
    }
```

#### maker 快速生成
```js
$formCreate.maker.cascader('所在区域','address',['陕西省','西安市','新城区']).props({
        data:window.province
})
```

#### json 规则
```json
{
        type:"cascader",//必填!
        title:"所在区域",//必填!
        field:"address",//必填!
        //input值
        value:['陕西省','西安市','新城区'],
        props:{
            //可选项的数据源，格式参照示例说明
            data:window.province || [],//必填!
            //选择后展示的函数，用于自定义显示格式
            renderFormat:label => label.join(' / '),
            //是否禁用选择器
            disabled:false,
            //是否支持清除
            clearable:true,
            //输入框占位符
            placeholder:'请选择',
            //次级菜单展开方式，可选值为 click 或 hover
            trigger:'click',
            //当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的示例
            changeOnSelect:false,
            //输入框大小，可选值为large和small或者不填
            size:undefined,
            //动态获取数据，数据源需标识 loading
            loadData:()=>{},
            //是否支持搜索
            filterable:false,
            //当搜索列表为空时显示的内容
            notFoundText:'无匹配数据',
            //是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果
            transfer:false,
        },
        validate:[],
}
```

#### 参数说明

参考:[iview2.x](http://v2.iviewui.com/components/cascader#API) | [iview3.x](https://www.iviewui.com/components/cascader#API)





##### 规则 rule

| 字段名 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| type | 元素类型 | String | true | - |
| field | 字段名称 | String | true | - |
| title | 字段别名 | String | true | - |
| value | 字段值 | String | false | - |
| props | 元素配置 | Object | true | - |
| event | 元素事件 | Object | false | - |
| validate | 验证规则 | Array | false | - |

##### 元素配置 props

| 字段名 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| data | 可选项的数据源 | Array | true | - |
| renderFormat | 选择后展示的函数，用于自定义显示格式 | Function | false | label =&gt; label.join\(' / '\) |
| trigger | 次级菜单展开方式，可选值为 click 或 hover | String | false | 'click' |
| placeholder | 占位文本 | String | false | - |
| confirm | 是否显示底部控制栏，开启后，选择完日期，选择器不会主动关闭，需用户确认后才可关闭 | Boolean | false | false |
| size | 输入框大小，可选值为large和small或者不填 | String | false | - |
| clearable | 是否支持清除 | Boolean | false | true |
| disabled | 是否禁用选择器 | Boolean | false | false |
| changeOnSelect | 当此项为 true 时，点选每级菜单选项值都会发生变化 | Boolean | false | false |
| filterable | 是否支持搜索 | Boolean | false | false |
| notFoundText | 当搜索列表为空时显示的内容 | String | false | '无匹配数据' |
| transfer | 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果 | Boolean | false | false |
| loadData | 动态获取数据，数据源需标识 loading | Function | false | - |

##### 事件扩展 event

| 事件名称 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| change | 选择完成后的回调，返回值 value 即已选值 value，selectedData 为已选项的具体数据 | Function | false | - |
| visible-change | 展开和关闭弹窗时触发 | Function | false | - |


