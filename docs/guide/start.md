### 快速上手

本节将介绍如何在项目中使用 form-create

#### 引入 form-create

##### 浏览器:

```markdown
<!-- import Vue 2.5-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.min.js"></script>

<!-- import iview 2.14.3-->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/iview@2.14.3/dist/styles/iview.css">
<script src="https://cdn.jsdelivr.net/npm/iview@2.14.3/dist/iview.min.js"></script>

<!-- 省市区三级联动json数据,不使用三级联动不需要引入 -->
<script src="district/province_city_area.js"></script>

<!-- 模拟数据,实际使用中不需要引入 -->
<script src="demo/mock.js"></script>

<!-- import formCreate -->
<script src="dist/form-create.min.js"></script>
```

##### NodeJs:

在 main.js 中写入以下内容：

```js
import Vue from 'vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import formCreat from 'form-create'

//三级联动数据,不用可以不引入
import 'form-create/district/province_city_area.js'
//示例规则,实际使用中不需要引入
import 'form-create/mock.js'

Vue.use(iView);
Vue.use(formCreat)
```



#### 创建表单

::: tip 可使用3种方式创建表单: 

   组件模式, Vue 全局方法, Window 全局方法

::: 

##### 组件模式

使用  `<form-create>` 组件创建表单

```html
<div id="app1">
    <form-create ref="fc" :rule="rule" :option="option"></form-create>
</div>
```

```js
let rules = mock();
new Vue({
    el:'#app1',
    data:{
        //表单生成规则
        rule:rules,
        //组件参数配置
        option:{
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
        },
        //初始化变量
        $f: {},
        model: {}
    },
    mounted:function () {

        //获取表单api
        this.$f = this.$refs.fc.$f;

        //获取双向数据绑定的数据规则
        this.model = this.$f.model();
    }
});
```



##### Vue 全局方法

使用 vue 全局方法`$formCreate` 创建表单

```html
<div id="app2">
    <div id="form-create"></div>
</div>
```

```js
let rules = mock();
new Vue({
    el:'#app2',
    data:{
        //初始化变量
        $f:{},
        model:{}
    },
    mounted:function () {

        //表单插入的节点
        const root = document.getElementById('form-create');

        //$f为表单api
        this.$f = this.$formCreate(
            //表单生成规则
            rules,
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



##### 全局方法

使用 window 全局方法`formCreate.create()`创建表单

```html
<div id="app3">
    <div id="form-create"></div>
</div>
```

```js
//表单插入的节点
var root = document.getElementById('form-create'),rules = mock();
//初始化变量
var $f = {},model = {};

//$f为表单api
$f = window.formCreate.create(
    //表单生成规则
    rules,
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

