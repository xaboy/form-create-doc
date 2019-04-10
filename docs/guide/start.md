---
sidebarDepth: 3
---



# 快速上手

本节将介绍如何在项目中使用 form-create

## 引入 form-create

#### 浏览器

```markdown
<!-- import Vue 2.5-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.min.js"></script>

<!-- import iview 2.14.3-->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/iview@2.14.3/dist/styles/iview.css">
<script src="https://cdn.jsdelivr.net/npm/iview@2.14.3/dist/iview.min.js"></script>

<!-- 省市区三级联动json数据,不使用三级联动不需要引入 -->
<script src="https://cdn.jsdelivr.net/npm/form-create/district/province_city_area.js"></script>

<!-- import formCreate -->
<script src="https://cdn.jsdelivr.net/npm/form-create/dist/form-create.min.js"></script>
```

#### NodeJs

在 main.js 中写入以下内容：

```js
import Vue from 'vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

//iviewUI
import formCreate from 'form-create'
//获取生成器
import { maker } from 'form-create'

//ElementUI
//import formCreate from 'form-create/element'
//获取生成器
//import { maker } from 'form-create/element'

//三级联动数据,不用可以不引入
import 'form-create/district/province_city_area.js'

Vue.use(iView);
Vue.use(formCreat)
```

## 生成表单

::: tip 可使用3种方式创建表单: 

   组件模式, Vue 原型方法, Window 全局方法

::: 

### 组件模式

使用  `<form-create></form-create>` 标签创建表单

```html
<div id="app1">
    <form-create ref="fc" v-model="fApi" :rule="rule" :option="option"></form-create>
</div>
```

#### NodeJs
```js
import {maker} from 'form-create'
export default {
    data () {
        return {
            fApi:{},
            model: {},
            //表单生成规则
            rule:[
                maker.input('商品名称','goods_name'),
                maker.date('创建时间','created_at')
            ],
            //组件参数配置
            option:{
                //表单提交事件
                onSubmit:function (formData) {
                    alert(JSON.stringify(formData));
                }
            }
        };
    },
    mounted:function(){
        this.model = this.fApi.model();
    }
};
```
#### 浏览器
```js
new Vue({
    el:'#app1',
    data:{
        fApi:{},
        model: {},
        rule:[
            formCreate.maker.input('商品名称','goods_name'),
            formCreate.maker.date('创建时间','created_at')
        ],
        option:{
            onSubmit:function (formData) {
                alert(JSON.stringify(formData));
            }
        }
    },
    mounted:function () {
        this.model = this.fApi.model();
    }
});
```

### Vue 原型方法

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
        $f:{},
        model:{}
    },
    mounted:function () {

        //表单插入的节点
        const root = document.getElementById('form-create');

        //$f为表单api
        this.$f = this.$formCreate(
            //表单生成规则
            [
        		this.$formCreate.maker.input('商品名称','goods_name',''),
           		this.$formCreate.maker.date('创建时间','created_at')
        	],
            //组件参数配置
            {
                el:root,
                //显示表单重置按钮
                resetBtn:true,
                //表单提交事件
                onSubmit:function (formData) {

                    //formData为表单数据

                    //按钮进入提交状态
                    this.$f.btn.loading();
                    //重置按钮禁用
                    this.$f.resetBtn.disabled();

                    //重置按钮恢复正常
                    //this.$f.resetBtn.disabled();
                    //按钮进入可点击状态
                    //this.$f.btn.loading(false);
                }
        });

        //获取双向数据绑定的数据规则
        this.model = this.$f.model();
    }

})
```

### 全局方法

使用 window 全局方法`formCreate.create(rule,option)`创建表单

```html
<div id="app3">
    <div id="form-create"></div>
</div>
```

```js
//表单插入的节点
var root = document.getElementById('form-create');

var $f = {},model = {};

//$f为表单api
$f = window.formCreate.create(
    //表单生成规则
    [
        window.formCreate.maker.input('商品名称','goods_name',''),
        window.formCreate.maker.date('创建时间','created_at')
    ],
    //组件参数配置
    {
        el:root,
        //显示表单重置按钮
        resetBtn:true,
        //表单提交事件
        onSubmit:function (formData) {

            //formData为表单数据

            //按钮进入提交状态
            $f.btn.loading();
            //重置按钮禁用
            $f.resetBtn.disabled();

            //重置按钮恢复正常
            //$f.resetBtn.disabled();
            //按钮进入可点击状态
            //$f.btn.loading(false);
        }
});

//获取双向数据绑定的数据规则
model = $f.model();
```


### JSON

使用 JSON 生成表单

```html
<div id="app3">
    <div id="form-create"></div>
</div>
```

```js
//JSON 规则
var rule = [
  {"type":"input","field":"goods_name","title":"商品名称","value":"mi"},
  {"type":"inputNumber","field":"goods_price","title":"商品价格","value":12}
]
```

```js
//表单插入的节点
var root = document.getElementById('form-create');

var $f = {},model = {};

//$f为表单api
$f = window.formCreate.create(
    //表单生成规则
    rule,
    //组件参数配置
    {
        el:root,
        //显示表单重置按钮
        resetBtn:true,
        //表单提交事件
        onSubmit:function (formData) {

            //formData为表单数据

            //按钮进入提交状态
            $f.btn.loading();
            //重置按钮禁用
            $f.resetBtn.disabled();

            //重置按钮恢复正常
            //$f.resetBtn.disabled();
            //按钮进入可点击状态
            //$f.btn.loading(false);
        }
});

//获取双向数据绑定的数据规则
model = $f.model();
```

