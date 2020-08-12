
# 生成规则

![rule-info](/img/rule-info.png)

## 说明
**JSON规则的配置项名称与组件生成器的配置方法名称相同,配置参数也相同**

例如生成一个 input 组件:

JSON 规则
```js
{
  field:'test',
  type:'input',
  title:'textTitle'
  props:{
    disable:true
  },
  on:{
    change:function(){
    }
  }
}
```
用 Maker 生成相同的规则
```js
maker.create('input','test','textTitle').props({
    disable:true
  }).on({
    change:function(){
    }
})
```

## **基础规则**


### **type**

- ​**类型**:  `String`
- **说明**: 设置生成组件的名称

### **field**

- ​**类型**:  `String`
- **说明**:  设置**表单组件**的字段名称,**自定义组件可以不配置**


### **title**

- ​**类型**:  `String`
- **说明**: 组件的名称,可以不设置

### **name**

- ​**类型**:  `String`
- **说明**:  自定义组件的字段名称

### **value**

- ​**类型**:  `any`
- **说明**:  表单组件的字段值,自定义组件可以不用设置


### **className**

- ​**类型**:  `String`
- **说明**:  设置组件的`class`

### **info** <Badge type="warn" text="0.0.4+"/>

- ​**类型**:  `String`
- **说明**: 设置组件的提示信息
- 全局配置说明: [iview](/v2/iview/global.html) | [element-ui](/v2/element-ui/globa.html)

### **native**

- ​**类型**:  `Bool`
- **说明**: 是否原样生成组件,不嵌套的`FormItem`中

### **hidden** <Badge type="warn" text="1.0.5+"/>

- ​**类型**:  `Bool`
- **说明**: 设置组件是否显示

## **扩展规则**


### **validate**

- **类型**:  `Array`
- **说明**: 设置表单组件的验证规则

### **options**

- **类型**:  `Array`
- **说明**: 设置`radio`,`select`,`checkbox`等组件`option`选择项

### **inject**

- **类型**:  `any`
- **说明**: 设置事件注入是的自定义数据


### **col**

- **类型**:  `Object`
- **说明**: 设置组件的布局规则

### **control**
- **类型**:  `Object`
- **说明**:  控制其他组件显示

[详细说明](/v2/guide/control.html)

  

### **children**
- **类型**:  `Array<rule|string|maker>`
- **说明**: 设置父级组件的插槽,默认为`default`.可配合 `slot` 配置项使用

  
  - 示例1
  ```js
  formCreate.maker.create('button').children([
     '按钮内容' 
  ]);
  ```
  
  - 示例2
   
  ```js
  maker.input('text','text','text').children([
      maker.create('span').children(['append']).slot('append')
  ])
  ```
  
  - 示例3

  ```js
  formCreate.maker.create('i-row').children([
    formCreate.maker.create('i-col').props('span',12).children([
      formCreate.maker.template('<span>自定义组件</span>',new Vue)
    ]),
  ]);
  ```

### **emit**

- **类型**:  `Array`
- **说明**: 组件模式下配置使用`emit`方式触发的事件名,可与`emitPrefix`参数配合

示例: 
```js
//以下三种方式效果相同

rules = [{//emit 方式触发 change 事件
    field:'goods_name',
    //...
    emit:['change']
},{// 自定义 emit 事件前缀,默认为 field 字段
    field:'goods_info',
    //...
    emit:['change'],
    emitPrefix:'gi'
},{// 直接在规则写回调方法
     field:'goods_tag',
     //...
     event:{
         change:function() {
           //TODO
         }
     }
 }]
```

```html
<div id="app">
  <form-create :rule="rules" @goods-name-change="change" @gi-change="change"></form-create>
</div>
```

```js
new Vue({
   el:'#app',
    data: {
        rules:rules
    },
    methods:{
        change:function(){
            //TODO
        }
    }
})
```


### **emitPrefix**

- **类型**:  `Object`
- **说明**: 自定义 组件`emit `事件的前缀
- **默认**: 组件 `field` 字段


## 模板规则

**template 组件必须设置一下参数,其他组件无需设置**

### **template**

- **类型**:  `string`
- **说明**: 模板组件的生成模板


### **vm**

- **类型**:  `Vue|Function`
- **说明**: 模板组件的 Vue 示例对象,用于解析模板


## 通用规则

### **props**

- ​**参数**:  `Object`
- **说明**: 设置组件的`props`


### **class**

- ​**参数**:  `Object|String|Array`
- **说明**: 设置组件的`class`

### **style**

- ​**参数**:  `Object|String`
- **说明**: 设置组件的`style`

### **attrs**

- ​**参数**:  `Object`
- **说明**: 设置组件普通的 HTML 特性

### **domProps**

- ​**参数**:  `Object`
- **说明**: 设置组件的 DOM 属性

### **on**

- ​**参数**:  `Object`
- **说明**: 设置组件的事件

### **nativeOn**

- ​**参数**:  `Object`
- **说明**: 监听组件的原生事件

### **directives**

- ​**参数**:  `Array`
- **说明**: 设置组件的自定义指令

### **scopedSlots**

- ​**参数**:  `Object`
- **说明**: 设置组件的插槽

### **slot**

- ​**参数**:  `String`
- **说明**: 设置组件的插槽名称,如果组件是其它组件的子组件，需为插槽指定名称


**[自定义配置项说明](https://cn.vuejs.org/v2/guide/render-function.html#%E6%B7%B1%E5%85%A5-data-%E5%AF%B9%E8%B1%A1l)**
