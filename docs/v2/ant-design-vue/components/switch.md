# Switch 开关

#### Maker
```js
$formCreate.maker.switch('是否上架','is_show','1').props({
    checkedChildren:"1",
    unCheckedChildren:"0",
})
```

#### Maker
```json
{
    type:"switch",
    title:"是否上架",
    field:"is_show",
    value:"1",
    props: {
        checkedChildren:"1",
        unCheckedChildren:"0",
    },
}
```

参考:[Ant-design-vue_Switch](https://www.antdv.com/components/switch-cn/)

**value** :`Number | String`

#### props

| 参数              | 说明                                | 类型         | 默认值  |
| :---------------- | :---------------------------------- | :----------- | :------ |
| autoFocus         | 组件自动获取焦点                    | boolean      | false   |
| checked(v-model)  | 指定当前是否选中                    | boolean      | false   |
| checkedChildren   | 选中时的内容                        | string\|slot |         |
| defaultChecked    | 初始是否选中                        | boolean      | false   |
| disabled          | 是否禁用                            | boolean      | false   |
| loading           | 加载中的开关                        | boolean      | false   |
| size              | 开关大小，可选值：`default` `small` | string       | default |
| unCheckedChildren | 非选中时的内容                      | string\|slot |         |

#### on 事件

| 事件名称 | 说明           | 回调参数                                 |
| :------- | :------------- | :--------------------------------------- |
| change   | 变化时回调函数 | Function(checked:Boolean, event: Event)  |
| click    | 点击时回调函数 | Function(checked: boolean, event: Event) |




