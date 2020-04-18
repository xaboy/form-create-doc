---
 title: control 配置项
---


# control 配置项

可以通过`control`配置项实现通过组件的值控制其他组件是否显示

#### 示例
![control](https://raw.githubusercontent.com/xaboy/form-create/dev/images/demo-live4.gif)

[在线示例](http://jsrun.pro/C8fKp/edit)

#### Maker
```js
maker.radio('是否包邮', 'is_postage', 0).options([
            {value: 0, label: '不包邮', disabled: false},
            {value: 1, label: '包邮', disabled: false},
        ]).control([
            {
                value:1,
                rule:[
                    maker.number('满额包邮','postage_money',0)
                ]
            }
        ])
```

#### JSON
```json
{
    type:"radio",
    title:"是否包邮",
    field:" is_postage",
    value:0,
    options: [
        {value: 0, label: '不包邮', disabled: false},
        {value: 1, label: '包邮', disabled: false},
    ],
    control:[
        {
            value:1,
            rule:[
                {
                    type: 'number',
                    field: 'postage_money',
                    title: '满额包邮',
                    value: 0
                },
            ]
        }
    ]
}
```

#### 属性说明

- **value** :  当组件的值和`value`**全等**时显示`rule`中的组件
```js
{
    value:1,
    rule:[...]
}
```

- **handle `Function`** : 当`handle`方法返回`true`时显示`rule`中的组件
```js
{
    handle:function(val){
        return val === 1;
    },
    rule:[...]
}
```

- **rule `Array`** : 该组件控制显示的组件
```js
{
    handle:1
    rule:[
        maker.number('满额包邮','postage_money',0)
    ]
}
```

