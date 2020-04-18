# Quick Start

This section will use **iview version** as an example to show how to use form-create in a project.

[ElementUI](/en/v2/element-ui/)

## Introducing form-create V2

#### Browser

```markdown
<!-- import Vue 2.5-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.min.js"></script>

<!-- import iview 2.14.3-->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/iview@2.14.3/dist/styles/iview.css">
<script src="https://cdn.jsdelivr.net/npm/iview@2.14.3/dist/iview.min.js"></script>

<!-- import formCreate -->
<script src="https://cdn.jsdelivr.net/npm/@form-create/iview/dist/form-create.min.js"></script>
```

#### NodeJs

Write the following in main.js:

```js
import Vue from 'vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

import formCreate from '@form-create/iview'

Vue.use(iView);
Vue.use(formCreate)
```

# Generate form

::: tip creates a form in 3 ways:

   Component mode, Vue prototype method, Window global method

:::

## component mode

Create a form with the `<form-create></form-create>` tag

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
     // instance object
     fApi:{},
     // form generation rules
     rule:[
       {
          type: 'input',
          field: 'goods_name',
          title: 'product name'
        },
        {
          type: 'datePicker',
          field: 'created_at',
          title: 'Create time'
        }
     ],
     // Component parameter configuration
     option:{
       // form submission event
       onSubmit:function (formData) {
         Alert(JSON.stringify(formData));
       }
     }
    };
  }
};
```
#### Browser
```js
new vue({
  el:'#app1',
  data:{
    fApi:{},
    rule:[
      {
        type: 'input',
        field: 'goods_name',
        title: 'product name'
      },
      {
        type: 'datePicker',
        field: 'created_at',
        title: 'Create time'
      }
    ],
    option:{
      onSubmit:function (formData) {
        Alert(JSON.stringify(formData));
      }
    }
  }
});
```

## Vue Prototype Method

Create a form using the vue prototype method `$formCreate(rule,option)`

```html
<div id="app2">
    <div id="form-create"></div>
</div>
```

```js
new vue({
  el:'#app2',
  data:{
      fApi:{},
      Model:{}
  },
  mounted:function () {
    // form inserted node
    const root = document.getElementById('form-create');
    //fApi is the form api
    this.fApi = this.$formCreate(
      // form generation rules
      [
        this.$formCreate.maker.input('product name', 'goods_name', ''),
        this.$formCreate.maker.date('create time', 'created_at')
      ],
      // Component parameter configuration
      {
        el:root,
        // form submission event
        onSubmit:function (formData,fApi) {
          fApi.btn.loading();
        }
    });
  }
})
```

## Global Method

Create a form using the window global method `formCreate.create(rule,option)`

```html
<div id="app3">
    <div id="form-create"></div>
</div>
```

```js
// form inserted node
const root = document.getElementById('form-create');

//$f is the form api
const $f = window.formCreate.create(
  // form generation rules
  [
    {
      type: 'input',
      field: 'goods_name',
      title: 'product name'
    },
    {
      type: 'datePicker',
      field: 'created_at',
      title: 'Create time'
    }
  ],
  // Component parameter configuration
  {
    el:root,
    // Display form reset button
    resetBtn: true,
    // form submission event
    onSubmit:function (formData) {
      // button enters the submission status
      $f.btn.loading();
    }
});
```


## JSON

Generate a form using JSON

```html
<div id="app3">
    <div id="form-create"></div>
</div>
```

```js
//JSON rule
const rule = [
  {"type":"input","field":"goods_name","title":"product name","value":"mi"},
  {"type":"inputNumber","field":"goods_price","title":"Product Price","value":12}
]
```

```js
// form inserted node
const root = document.getElementById('form-create');

//$f is the form api
const $f = window.formCreate.create(
  // form generation rules
  rule,
  // Component parameter configuration
  {
    el:root,
    // Display form reset button
    resetBtn: true,
    // form submission event
    onSubmit:function (formData) {
      // button enters the submission status
      $f.btn.loading();
    }
});
```