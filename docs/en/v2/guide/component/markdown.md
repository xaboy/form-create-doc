# Markdown editor

This article uses a third-party Markdown editor [mavonEditor](https://github.com/hinesboy/mavonEditor)

### Effect

![mavonEditor](/img/mavon-editor.png)

### Installation

Node

```sh
npm install mavon-editor
```

Browser

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/mavon-editor@2.7.5/dist/css/index.css">
<script src="https://unpkg.com/vue2-editor/dist/vue2-editor.umd.js"></script>
```

### Import

Node

```js
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
```

Browser

```
var MavonEditor = window.MavonEditor
```

### Mounting

```js
Vue.use(MavonEditor);
```


### Generate

```js
$f = formCreate.create([
     {
         type: 'mavon-editor',
         title: 'Markdown',
         field: 'markdown',
         value:'# form-create'
     }
])
```


### Modify

```js
$f.setValue('json', '# form-create v2')
```