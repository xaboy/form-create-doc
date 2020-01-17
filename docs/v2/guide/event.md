# 绑定事件

例如给`i-input`组件添加`on-change`事件,事件名称参考[Input](/v2/iview/components/input.html#events)

```js
{
    type:'input',
    field: 'test',
    title: 'test',
    value: '',
    on: {
        'on-change': function(){
            console.log('value 发生变化');
        }
    }
}
```

### 通过 emit 方式绑定事件

只支持在组件模式下

```js
//rule
[{
     type:'input',
     field: 'test',
     title: 'test',
     value: '',
     emit: ['on-change']
 }]
```

事件名称为`${field}-${eventName}`
```html
<form-create :rule="rule" @test-on-change="onChange"> </form-create>
```

### 通过 `emitPrefix` 自定义事件前缀

```js
//rule
[{
     type:'input',
     field: 'test',
     title: 'test',
     value: '',
     emit: ['on-change'],
     emitPrefix: 'xaboy',
 }]
```

事件名称为`${emitPrefix}-${eventName}`
```html
<form-create :rule="rule" @xaboy-on-change="onChange"> </form-create>
```

### 通过 on 方法绑定事件 <Badge type="warn" text="1.0.2+"/>

```js
//rule
[{
     type:'input',
     field: 'test',
     title: 'test',
     value: '',
     emit: ['on-change'],
     emitPrefix: 'xaboy',
 }]
```

```js
$f.on('xaboy-on-change',function(){
    //TODO
})

```

### 向事件中注入`$f`和自定义参数

```js
//rule
[{
     type:'input',
     field: 'test',
     title: 'test',
     value: '',
     emit: [{
        name: 'on-change',
        inject: ['自定义参数,数据类型不限']
     }],
     emitPrefix: 'xaboy',
 }]
```

```html
<form-create :rule="rule" @xaboy-on-change="onChange"> </form-create>
```
向事件中注入参数后,事件会额外增加一个参数

```js
//未注入
{
    onChange: function(val){

    }
}
//注入后
{
    onChange: function(inject, val){

    }
}
```

inject 参数的数据结构
```ts
{
    $f:Object,//api
    rule:Array,//生成规则
    self:Object,//当前生成规则
    option:Object,//全局配置
    inject:Any,//自定义注入的参数
}
```

**参数注入也可以通过全局配置项`injectEvent:true`开启**