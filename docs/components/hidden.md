### Hidden 隐藏字段

#### 示例
```js
{
		type:"hidden",
        field:"id",
        value:"14",
}
```



#### maker 快速生成
```js
formCreate.maker.hidden('id','14')
```

#### json 规则
```json
{
  type:"hidden",//必填!
  //字段名称
  field:"id", //必填!
  //input值
  value:"14" //必填!
}
```

#### 参数说明
##### 规则 rule

| 字段名 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| type | 字段类型 | String | true | - |
| field | 字段名称 | String | true | - |
| value | 字段值 | String,Number | false | '' |


