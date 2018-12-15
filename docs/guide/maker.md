### maker 组件生成器


**注意!Rule生成规则的配置项名称与组件生成器的配置方法名称相同,配置参数也相同**

#### 内置**组件配置项说明**

1. **props\(Object\)** 组件配置
2. **event\(Object\)** 组件事件配置
3. **slot\(Object\)** 部分组件填充内容配置
4. **validate\(Array\)** 组件验证规则配置
5. **options\(Array\)** 部分组件选择项配置
6. **emit\(Array\)** 组件模式下配置使用emit方式触发的事件
7. **col\(Object\)** 组件布局配置

#### 自定义组件额外支持一下配置项

1. **children\(Array\)** 组件元素生成规则
2. **scopedSlots\(Object\)**
3. **nativeOn\(Object\)**
4. **on\(Object\)**
5. **domProps\(Object\)**
6. **props\(Object\)**
7. **attrs\(Object\)**
8. **style\(Object\)**
9. **class\(Object\)**
10. **directives\(Array\)**




**[以上配置项说明](https://cn.vuejs.org/v2/guide/render-function.html#%E6%B7%B1%E5%85%A5-data-%E5%AF%B9%E8%B1%A1l)**



#### 使用maker生成器生成组件

> `$formCreate.maker`**指的是 vue内部的**`this.$formCreate.maker`**或者**`window.formCreate.maker`

**自定义组件**

```js
$formCreate.maker.create(componentName) //component为生成组件的名称

//示例:
maker.create('i-button').props({
        type:"primary",
        size:"large",
    }).on({
        "click":()=>{console.log(1);},
    }).col({span:8,labelWidth:1}).children([
        maker.create('span').domProps({
            innerHTML:'测试按钮'
        })
    ]),
```

**template 模板组件**

```js
$formCreate.maker.createTmp(template,vm)

//示例
maker.createTmp('<i-button @click="onClick" long>字符串测试{{test}}-{{num}}</i-button>',new Vue({
    data:{
        test:'createTmp渲染',
        num:0
    },
    methods:{
        onClick:function(){
            this.num++;
        }
    }
})).col({labelWidth:1})

```

**hidden** 隐藏字段

```js
$formCreate.maker.hidden(field,value)
```

**input** 输入框

```js
$formCreate.maker.input(title,field,value)
```

**radio** 单选框

```js
$formCreate.maker.radio(title,field,value)
```

**checkbox** 多选框

```js
$formCreate.maker.checkbox(title,field,value) //value为array类型
```

**select** select选择器

```js
$formCreate.maker.select(title,field,value) //多选是value为array类型
```

**switch** 开关

```js
$formCreate.maker.switch(title,field,value)
```

**datepicker** 日期选择器

```js
$formCreate.maker.date(title,field,value) //type为daterange或datetimerange时 value为array类型
//OR
$formCreate.maker.datepicker(title,field,value)
```

**timepicker** 时间选择器

```js
$formCreate.maker.time(title,field,value) //type为timerange时 value为array类型
//OR
$formCreate.maker.timepicker(title,field,value)
```

**inputnumber** 数字输入框

```js
$formCreate.maker.number(title,field,value)
//OR
$formCreate.maker.inputnumber(title,field,value)
```

**colorpicker** 颜色选择器

```js
$formCreate.maker.color(title,field,value)
//OR
$formCreate.maker.colorpicker(title,field,value)
```

**cascader** 多级联动

```js
$formCreate.maker.cascader(title,field,value) //value为array类型
```

**upload** 上传

```js
$formCreate.maker.upload(title,field,value)
```

**rate** 评分

```js
$formCreate.maker.rate(title,field,value)
```

**slider** 滑块

```js
$formCreate.maker.slider(title,field,value) //props range为true时 value为array类型
```

**frame** 框架

```js
$formCreate.maker.frame(title,field,value)
```

**tree** 树形

```js
$formCreate.maker.tree(title,field,value)
```



