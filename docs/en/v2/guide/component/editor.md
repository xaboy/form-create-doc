# Editor

This article uses a third-party rich text component [vue2-editor](https://github.com/davidroyer/vue2-editor)

### Effect

![vue2-editor](/img/vue2-editor.png)


### Installation

Node

```sh
npm install vue2-editor
```

Browser

```html
<script src="https://unpkg.com/quill/dist/quill.min.js"></script>
<script src="https://unpkg.com/vue2-editor/dist/vue2-editor.umd.js"></script>
```

### Import

Node

```js
import { VueEditor } from "vue2-editor";
```

Browser

```
var VueEditor = window.Vue2Editor.VueEditor;
```

### Mounting

```js
Vue.use(VueEditor);
//or
Vue.component('vue-editor', VueEditor);
//or
formCreate.component('vue-editor', VueEditor);
```


### Generate

```js
$f = formCreate.create([
     {
         type: 'vue-editor',
         title: 'product details',
         field: 'editor',
         value:'<h1>form-create</h1>'
     }
])
```