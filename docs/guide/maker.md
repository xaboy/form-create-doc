---
sidebarDepth: 2
---



# 规则配置项

::: warning 提示

**JSON规则的配置项名称与组件生成器的配置方法名称相同,配置参数也相同**

:::

## **内置组件配置项**

### **props**

- ​**参数**:  `Object`
- **说明**: 组件规则配置

### **event**

- **参数**:  `Object`
- **说明**: 组件事件配置

### **validate**

- **参数**:  `Array`
- **说明**: 组件验证规则配置

### **options**

- **参数**:  `Array`
- **说明**: 部分组件`option`选择项配置

### **emit**

- **参数**:  `Array`
- **说明**: 组件模式下配置使用`emit`方式触发的事件名,可与`emitPrefix`参数配合

```js
rules = [{
    field:'goods_name',
    //...
    emit:['change']
},{
    field:'goods_info',
    //...
    emit:['change'],
    emitPrefix:'gi'
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





### **col**

- **参数**:  `Object`
- **说明**: 组件布局配置
- **参考**: [栅格布局规则 Col](/guide/col.html)

### **emitPrefix**  <Badge text="1.5.2+"/>

- **参数**:  `Object`
- **说明**: 自定义 组件`emit `事件的前缀
- **默认**: 组件 `field` 字段

### **className**  <Badge text="1.5.3+"/>

- **参数**:  `Object | Array | string`
- **说明**: 自定义 组件的 `class`

### **defaultSlot**  <Badge text="1.5.3+"/>

- **参数**:  `String | RenderFunction`

- **说明**: 自定义 部分内置组件的`slot`

- **示例**:

  ```js
  rule.defaultSlot(function($h){
    return $h("div", {
      style: "color:#ff7271;"
    }, [$h('icon', {
      props: {
        //iview2 与 iview3 图标名称不同
        type: 'social-apple'
      }
    }), "新鲜水果"]);
  })
  ```



## 自定义组件配置项

自定义组件额外支持以下配置项



1. **children\(Array\)**  子组件元素生成规则
2. **scopedSlots\(Object\)**
3. **nativeOn\(Object\)**
4. **on\(Object\)**
5. **domProps\(Object\)**
6. **props\(Object\)**
7. **attrs\(Object\)**
8. **style\(Object\)**
9. **class\(Object\)**
10. **directives\(Array\)**



**[自定义配置项说明](https://cn.vuejs.org/v2/guide/render-function.html#%E6%B7%B1%E5%85%A5-data-%E5%AF%B9%E8%B1%A1l)**
