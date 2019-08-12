# Event

For example, add the `on-change` event to the `i-input` component. The event name refers to [Input](/en/v2/iview/components/input.html#events)

```js
{
    type: 'input',
    Field: 'test',
    TITLE: 'test',
    value: '',
    on: {
        'on-change': function(){
            console.log('value changes');
        }
    }
}
```

### Binding events by emit

Only supported in component mode

```js
//rule
[{
     type: 'input',
     field: 'test',
     title: 'test',
     value: '',
     emit: ['on-change']
 }]
```

The event name is `${field}-${eventName}`
```html
<form-create :rule="rule" test-on-change="onChange"> </form-create>
```

### Custom event prefix with `emitPrefix`

```js
//rule
[{
     type: 'input',
     field: 'test',
     title: 'test',
     value: '',
     emit: ['on-change'],
     emitPrefix: 'xaboy',
 }]
```

The event name is `${emitPrefix}-${eventName}`
```html
<form-create :rule="rule" xaboy-on-change="onChange"> </form-create>
```


### Bind events using the `on` method <Badge type="warn" text="1.0.2+"/>

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

### Inject `$f` and custom parameters into the event

```js
//rule
[{
     type: 'input',
     field: 'test',
     title: 'test',
     value: '',
     emit: [{
        name: 'on-change',
        inject: ['Custom parameters, data type is not limited']
     }],
     emitPrefix: 'xaboy',
 }]
```

```html
<form-create :rule="rule" xaboy-on-change="onChange"> </form-create>
```
After injecting parameters into the event, the event adds an additional parameter.

```js
//not injected
{
    onChange: function(val){

    }
}
// after injection
{
    onChange: function(inject, val){

    }
}
```

Data structure of the inject parameter
```ts
{
    $f:Object,//api
    rule:Array, // ​​generation rules
    option:Object, // ​​global configuration
    inject:Any, // ​​custom injection parameters
}
```

**Parameter injection can also be enabled via the global configuration item `injectEvent:true`**