# Json编辑器

本文使用的是第三方Json编辑器 [v-jsoneditor](https://github.com/yansenlei/VJsoneditor)

### 效果

![v-jsoneditor](/img/v-jsoneditor.png)


### 安装

Node

```sh
npm install v-jsoneditor
```

浏览器

```html
<script src="https://unpkg.com/v-jsoneditor/docs/dist/v-jsoneditor.min.js"></script>
```

### 导入

Node

```js
import VJsoneditor from 'v-jsoneditor'
```

浏览器

```
var VJsoneditor = window.VJsoneditor.default;
```

### 挂载

```js
Vue.use(VJsoneditor);
//或者
Vue.component('VJsoneditor', VJsoneditor);
//或者
formCreate.component('VJsoneditor', VJsoneditor);
```


### 生成

```js
$f = formCreate.create([
    {
        type:'v-jsoneditor',
        title:'json',
        field:'json',
        value:{
            type: 'form-create'
        }
    }
])
```

### 修改

```js
$f.setValue('json', {type: 'form-create v2'})
```
