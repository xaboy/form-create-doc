# Json editor

This article uses a third-party Json editor [v-jsoneditor](https://github.com/yansenlei/VJsoneditor)

### Effect

![v-jsoneditor](/img/v-jsoneditor.png)


### Installation

Node

```sh
npm install v-jsoneditor
```

Browser

```html
<script src="https://unpkg.com/v-jsoneditor/docs/dist/v-jsoneditor.min.js"></script>
```

### Import

Node

```js
import VJsoneditor from 'v-jsoneditor'
```

Browser

```
var VJsoneditor = window.VJsoneditor.default;
```

### Mounting

```js
Vue.use(VJsoneditor);
//or
Vue.component('VJsoneditor', VJsoneditor);
//or
formCreate.component('VJsoneditor', VJsoneditor);
```


### Generate

```js
$f = formCreate.create([
     {
         type: 'v-jsoneditor',
         title: 'json',
         field: 'json',
         value:{
             type: 'form-create'
         }
     }
])
```

### Modify

```js
$f.setValue('json', {type: 'form-create v2'})
```