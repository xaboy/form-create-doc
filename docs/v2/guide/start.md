# 快速上手

本节将以**iview版本**为例介绍如何在项目中使用 form-create

[ElementUI](/v2/element-ui/)

[AntDesignVue](/v2/ant-design-vue)

## 引入 form-create V2

#### 浏览器

```markdown
<!-- import Vue 2.5-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.min.js"></script>

<!-- import iview 2.14.3-->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/iview@2.14.3/dist/styles/iview.css">
<script src="https://cdn.jsdelivr.net/npm/iview@2.14.3/dist/iview.min.js"></script>

<!-- 省市区三级联动json数据,不使用三级联动不需要引入 -->
<script src="https://cdn.jsdelivr.net/npm/@form-create/data/dist/province_city_area.js"></script>

<!-- import formCreate -->
<script src="https://cdn.jsdelivr.net/npm/@form-create/iview/dist/form-create.min.js"></script>
```

#### NodeJs

在 main.js 中写入以下内容：

```js
import Vue from 'vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

import formCreate from '@form-create/iview'

Vue.use(iView);
Vue.use(formCreate)
```

# 生成表单

::: tip 可使用3种方式创建表单: 

   组件模式, Vue 原型方法, Window 全局方法

::: 

## 组件模式

使用  `<form-create></form-create>` 标签创建表单

```html
<div id="app1">
    <form-create v-model="fApi" :rule="rule" :option="option"></form-create>
</div>
```

#### NodeJs
```js
export default {
  data () {
    return {
     //实例对象
     fApi:{},
     //表单生成规则
     rule:[
       {
          type:'input',
          field:'goods_name',
          title:'商品名称'
        },
        {
          type:'datePicker',
          field:'created_at',
          title:'创建时间'
        }
     ],
     //组件参数配置
     option:{
       //表单提交事件
       onSubmit:function (formData) {
         alert(JSON.stringify(formData));
       }
     }
    };
  }
};
```
#### 浏览器
```js
new Vue({
  el:'#app1',
  data:{
    fApi:{},
    rule:[
      {
        type:'input',
        field:'goods_name',
        title:'商品名称'
      },
      {
        type:'datePicker',
        field:'created_at',
        title:'创建时间'
      }
    ],
    option:{
      onSubmit:function (formData) {
        alert(JSON.stringify(formData));
      }
    }
  }
});
```

## Vue 原型方法

使用 vue 原型方法`$formCreate(rule,option)` 创建表单

```html
<div id="app2">
    <div id="form-create"></div>
</div>
```

```js
new Vue({
  el:'#app2',
  data:{
      fApi:{},
      model:{}
  },
  mounted:function () {
    //表单插入的节点
    const root = document.getElementById('form-create');
    //fApi为表单api
    this.fApi = this.$formCreate(
      //表单生成规则
      [
    	this.$formCreate.maker.input('商品名称','goods_name',''),
      	this.$formCreate.maker.date('创建时间','created_at')
      ],
      //组件参数配置
      {
        el:root,
        //表单提交事件
        onSubmit:function (formData,fApi) {
          fApi.btn.loading();
        }
    });
  }
})
```

## 全局方法

使用 window 全局方法`formCreate.create(rule,option)`创建表单

```html
<div id="app3">
    <div id="form-create"></div>
</div>
```

```js
//表单插入的节点
const root = document.getElementById('form-create');

//$f为表单api
const $f = window.formCreate.create(
  //表单生成规则
  [
    {
      type:'input',
      field:'goods_name',
      title:'商品名称'
    },
    {
      type:'datePicker',
      field:'created_at',
      title:'创建时间'
    }
  ],
  //组件参数配置
  {
    el:root,
    //显示表单重置按钮
    resetBtn:true,
    //表单提交事件
    onSubmit:function (formData) {
      //按钮进入提交状态
      $f.btn.loading();
    }
});
```


## JSON

使用 JSON 生成表单

```html
<div id="app3">
    <div id="form-create"></div>
</div>
```

```js
//JSON 规则
const rule = [
  {"type":"input","field":"goods_name","title":"商品名称","value":"mi"},
  {"type":"inputNumber","field":"goods_price","title":"商品价格","value":12}
]
```

```js
//表单插入的节点
const root = document.getElementById('form-create');

//$f为表单api
const $f = window.formCreate.create(
  //表单生成规则
  rule,
  //组件参数配置
  {
    el:root,
    //显示表单重置按钮
    resetBtn:true,
    //表单提交事件
    onSubmit:function (formData) {
      //按钮进入提交状态
      $f.btn.loading();
    }
});
```

