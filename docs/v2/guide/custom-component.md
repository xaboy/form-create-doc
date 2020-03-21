# 自定义组件

form-create 支持的在表单内部生成任何 vue 组件

::: tip 提醒

- **自定义组件必须在生成之前[挂载或注册](/v2/guide/mount.html#自定义组件)**
- 只有当你需要通过`$f.component()`方法获取该组件的生成规则时,需要定义`name`属性
- 当你需要让自定义组件和内置组件具有一样的功能时,可以将其转换为[表单组件](/v2/guide/custom-component.html#表单组件)

:::


## 通过标签生成组件

通过建立一个**虚拟 DOM**的方式生成自定义组件

### JSON 生成
```js
{
    type:'i-button',
    name: 'btn',
    props:{
    	type:'primary',
    	field:'btn',
    	loading:true
    },
    children:['加载中']
  }
```

### Maker 生成

#### maker.create

- **参数**：
    - `{string} tab` 组件名/标签名
    - `{string} field` 
    - `{string} title`

- **用法**：

  ```js
  formCreate.maker.create('i-button','btn','自定义按钮')
  ```

#### 生成

```js
formCreate.maker.create('i-button').props({
    type:'primary',
    field:'btn',
    loading:true
  }).children(['加载中']).name('btn');
```


#### 修改

**通过`$f.component()`方法获取组件的生成规则并修改**

```js
$f.component().btn.props.loading = false;
```

#### 示例

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
          formCreate.maker.number('商品价格','goods_price',8688)
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



## 通过模板生成组件

通过**模板**的方式生成自定义组件


### JSON 生成
```js
{
    type:'template',
    name:'btn'
    template:'<i-button :loading="loading">{{text}}<i-button>',
    vm: new Vue({
      data:{
        loading:true,
        text:'正在加载中'
      }
    })
  }
```


### Maker 生成

- **参数**：
    - `{string} template`
    - `{Vue} vm`
    - `{string} field = undefined`
    - `{string} title = undefined`

- **用法**：

  ```js
  formCreate.maker.template('<i-button></i-button>',new Vue,'btn','自定义按钮')
  ```

#### maker.template

```js
formCreate.maker.template('<i-button :loading="loading">{{text}}</i-button>',new Vue({
    data:{
      loading:true,
      text:'正在加载中...'
    }
})).name('btn')
```

#### 修改

可以通过一下两种方式动态修改`vm`组件内部的值

**通过`rule`获取自定义组件的`vm`并修改**

```js
rule.vm.text = '加载完毕';
rule.vm.loading = false;
```

**通过`$f.component()`方法获取自定义组件的`vm`并修改**

```js
$f.component().btn.vm.text = '加载完毕';
$f.component().btn.vm.loading = false;
```
> 如果修改后组件没有更新,请通过`$.sync`或`$f.refresh`方法强制刷新
