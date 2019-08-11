# 富文本框

本文使用的是第三方富文本组件 [vue2-editor](https://github.com/davidroyer/vue2-editor)

### 效果

![vue2-editor](/img/vue2-editor.png)


### 安装

Node

```sh
npm install vue2-editor
```

浏览器

```html
<script src="https://unpkg.com/quill/dist/quill.min.js"></script>
<script src="https://unpkg.com/vue2-editor/dist/vue2-editor.umd.js"></script>
```

### 导入

Node

```js
import { VueEditor } from "vue2-editor";
```

浏览器

```
var VueEditor = window.Vue2Editor.VueEditor;
```

### 挂载

```js
Vue.use(VueEditor);
//或者
Vue.component('vue-editor', VueEditor);
//或者
formCreate.component('vue-editor', VueEditor);
```


### 生成

```js
$f = formCreate.create([
    {
        type:'vue-editor',
        title:'商品详情',
        field:'editor',
        value:'<h1>form-create</h1>'
    }
])
```

