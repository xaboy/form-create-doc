---
sidebarDepth: 3
---



# Quick Start

This section describes how to use form-create in your project.

## Import form-create

#### Browser

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
import formCreat from 'form-create'
//获取生成器
import { maker } from 'form-create'

//三级联动数据,不用可以不引入
import 'form-create/district/province_city_area.js'

Vue.use(iView);
Vue.use(formCreat)
```

## Generate form

::: tip There are 3 ways to create a form:

 Component mode, Vue prototype method, Window global method

::: 

### Component mode

Create a form with the `<form-create></form-create>` tag

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
#### Browser
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

###  Vue prototype method

Create a form using the vue prototype method `$formCreate(rule,option)`

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
        		this.formCreate.maker.input('商品名称','goods_name',''),
           		this.formCreate.maker.date('创建时间','created_at')
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

### Window global method

Create a form using the window global method `formCreate.create(rule,option)`

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

