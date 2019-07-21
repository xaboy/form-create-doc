# 设置组件的插槽 slot

例如给`i-input`组件通过`prefix`和`suffix`设置前缀及后缀图标 [Input](https://iviewui.com/components/input#QZHHZTB)

```js
{
    type:'input',
    field: 'test',
    title: 'test',
    value: '',
    children: [
        {
            type:'i-con',
            props: {
                type: 'ios-contact'
            },
            slot: 'prefix' //前置插槽的名称
        },
        {
            type:'i-con',
            props: {
                type: 'ios-search'
            },
            slot: 'suffix' //后置插槽的名称
        },
    ]
}