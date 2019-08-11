# Markdown 编辑器

本文使用的是第三方Markdown编辑器 [mavonEditor](https://github.com/hinesboy/mavonEditor)

### 效果

![mavonEditor](/img/mavon-editor.png)

### 安装

Node

```sh
npm install mavon-editor
```

浏览器

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/mavon-editor@2.7.5/dist/css/index.css">
<script src="https://unpkg.com/vue2-editor/dist/vue2-editor.umd.js"></script>
```

### 导入

Node

```js
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
```

浏览器

```
var MavonEditor = window.MavonEditor
```

### 挂载

```js
Vue.use(MavonEditor);
```


### 生成

```js
$f = formCreate.create([
    {
        type:'mavon-editor',
        title:'Markdown',
        field:'markdown',
        value:'# form-create'
    }
])
```


### 修改

```js
$f.setValue('json', '# form-create v2')
```
