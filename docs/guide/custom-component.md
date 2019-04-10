# 自定义组件

form-create 支持的在表单内部生成任何 vue 组件

::: tip 提醒

- 自定义组件可以无效定义 field 属性,只有当你需要通过`$f.component()`方法获取该组件的生成规则时,才需要定义
- **当`form-create`初始化后会自动将 `maker` 转换为 `object`,可通过全局配置`switchMaker`来控制是否自动转换**

:::

## maker.create

通过建立一个**虚拟 DOM**的方式生成自定义组件

### 使用

- **参数**：
    - `{string} tab`
    - `{string} field = undefined`
    - `{string} title = undefined` <Badge text="1.6.1+"/>

- **用法**：

  ```js
  maker.create('i-button','btn','自定义按钮')
  ```

### 生成

**Maker**

```js
let rule = [
  formCreate.maker.create('i-button').props({
    type:'primary',
    field:'btn'
    loading:true
  })
]
$f = formCreate.create(rule);
```

 上面的代码是通过 `maker` 生成器动态生成一个正在加载的 `iview` 按钮组件

**Json**

```js
let rule = [
  {
    type:'i-button',
    field:'btn'
    props:{
    	type:'primary',
    	field:'btn',
    	loading:true
    }
  }
]
$f = formCreate.create(rule);
```

上面的代码是通过`json`方式动态生成一个`iview` 按钮组件

### 修改

可以通过一下两种方式动态修改组件的配置项

**通过`rule`修改组件生成规则**

```js
rule[0].props.loading = false;
```

**通过`$f.component()`方法获取组件的生成规则并修改**

```js
$f.component().btn.props.loading = false;
```

### 示例

![create-demo](/img/create-demo.jpg)

```js
let rule = [
  {
    type:'row',
    children:[
      {
        type:'i-col',
        props:{
          span:12
        },
        children:[
          formCreate.maker.input('商品名称','goods_name','iphone'),
          formCreate.maker.number('商品加个','goods_price',8688)
        ]
      },
      {
        type:'i-col',
        props:{
          span:12
        },
        children:[
          formCreate.maker.dateTime('创建时间','create_at'),
          formCreate.maker.radio('是否显示','is_show').options([
            {value:1,label:'显示'},
            {value:0,label:'不显示'}
          ])
        ]
      }
    ]
  }
]
```



## maker.template

通过**模板**的方式生成自定义组件,`maker.createTmp`方法是该方法的别名


### 使用

- **参数**：
    - `{string} template`
    - `{Vue} vm`
    - `{string} field = undefined`
    - `{string} title = undefined` <Badge text="1.6.1+"/>

- **用法**：

  ```js
  maker.template('<i-button></i-button>',new Vue,'btn','自定义按钮')
  ```

### 生成

**Maker**

```js
let rule = [
  formCreate.maker.template('<i-button :loading="loading">{{text}}</i-button>',new Vue({
    data:{
      loading:true,
      text:'正在加载中...'
    }
  }))
]
```

上面的代码是通过 `maker` 生成器动态生成一个正在加载的 `iview` 按钮组件



**Json**

```js
let rule = [
  {
    type:'template',
    template:'<i-button :loading="loading">{{text}}<i-button>',
    vm:new Vue({
      data:{
        loading:true,
        text:'正在加载中'
      }
    })
  }
]
$f = formCreate.create(rule);
```

上面的代码是通过`Object`方式动态生成一个`iview` 按钮组件

### 修改

可以通过一下两种方式动态修改`vm`组件内部的值

**通过`rule`获取自定义组件的`vm`并修改**

```js
rule[0].vm.text = '加载完毕';
rule[0].vm.loading = false;
```

**通过`$f.component()`方法获取自定义组件的`vm`并修改**

```js
$f.component().btn.vm.text = '加载完毕';
$f.component().btn.vm.loading = false;
```



## 自定义组件事件 <Badge text="1.5.5+"/>

通过表单回调事件,修改组件内部状态

### `fc:input` <Badge text="1.6.0+"/>
通过 [formData](/guide/instance.html#f-formdata) , [getValue](/guide/instance.html#f-getvalue) 方法获取自定义组件`field`时触发.可通过自定义组件向`formData`中添加`value`
```js
this.$on('fc:input',function(cb,$f) {
  //TODO 返回自定义组件 value
  //异步触发调用无效
  cb(this.value);
})
```

### `fc:set-value` <Badge text="1.6.0+"/>
通过 [setValue](/guide/instance.html#f-setvalue) , [changeValue](/guide/instance.html#f-changefield) , [changeField](/guide/instance.html#f-changefield) 方法设置自定义组件`field`值时触发
```js
this.$on('fc:set-value',function(newValue,$f) {
  //TODO 更新自定义组件内部 value
  this.value = newValue;
})
```

### `fc:disabled`
通过 [disabled](/guide/instance.html#f-disabled) 方法禁用自定义组件时触发
```js
this.$on('fc:disable',function(disabled,$f) {
  //TODO 自定义组件更新禁用状态
  this.disabled = disabled;
})
```

### `fc:reset-field`
通过 [resetFields](/guide/instance.html#f-resetfields) 方法重置表单时触发
```js
this.$on('fc:reset-field',function($f) {
  //TODO 还原自定义组件内部 value
  this.value = this.oldValue;
})
```



## 完整示例

### 示例一

自定义按钮组件,获取按钮禁用状态
```js
maker.create('i-button', 'btn').props({
    type: "primary",
    size: "large",
    shape: undefined,
    long: true,
    htmlType: "button",
    disabled: false,
    icon: "ios-upload",
    loading: false,
    show: true
}).on({
    "fc:disabled": function (disabled, $f) {
        $f.component().btn.props.disabled = disabled;
    },
    "fc:input": function (cb, $f) {
        cb($f.component().btn.props.disabled);
    },
    "fc:set-value": function (val, $f) {
        $f.component().btn.props.disabled = val;
    }
}).col({span: 12}).children(['测试自定义按钮'])
```
设置自定义组件禁用状态,触发`fc:set-value` 事件
```js
$f.setValue('btn',false);
```
获取自定义组件禁用状态,触发`fc:input` 事件
```js
$f.getValue('btn');
```
禁用按钮组件,触发`fc:disabled` 事件
```js
$f.disabled('btn')
```


### 示例二

自定义计数器按钮组件,获取按钮点击数

**`template`方式生成的自定义组件没有`fc:`前缀**
```js
maker.template('<i-button @click="onClick" long :disabled="disabled">{{num}}</i-button>', new Vue({
    data: {
        num: 0,
        disabled: false
    },
    methods: {
        onClick: function () {
            this.num++;
        },
        //表单禁用事件
        onDisabled: function (disabled) {
            this.disabled = disabled;
        },
        //表单重置事件
        onResetField: function () {
            this.num = 0;
        },
        //表单提交事件
        onInput: function (cb, $f) {
            cb(this.num);
        },
        //通过setValue,changeField,changeValue方法设置表单值时事件
        onSetValue: function (val, $f) {
            this.num = val;
        }
    },
    created: function () {
        this.$on('fc:disabled', this.onDisabled);
        this.$on('fc:reset-field', this.onResetField);
        this.$on('fc:input', this.onInput);
        this.$on('fc:set-value', this.onSetValue);
    }
}), 'tmp', '自定义 title');
```
操作方式和示例一相同