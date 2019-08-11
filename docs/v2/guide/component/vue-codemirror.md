# 代码编辑器

本文使用的是第三方代码编辑器 [vue-codemirror](https://github.com/surmon-china/vue-codemirror)

### 效果

![vue-codemirror](/img/vue-codemirror.png)


### 安装

Node

```sh
npm install vue-codemirror
```

浏览器

```html
<link rel="stylesheet" href="https://unpkg.com/codemirror/lib/codemirror.css">
<link rel="stylesheet" href="https://unpkg.com/codemirror/theme/monokai.css">
<script type="text/javascript" src="https://unpkg.com/codemirror/lib/codemirror.js"></script>
<script type="text/javascript" src="https://unpkg.com/codemirror/mode/javascript/javascript.js"></script>
<script type="text/javascript" src="https://unpkg.com/vue-codemirror/dist/vue-codemirror.js"></script>
```

### 导入

Node

```js
import VueCodemirror from 'vue-codemirror'

// language
import 'codemirror/mode/javascript/javascript.js'
// theme css
import 'codemirror/theme/monokai.css'
```

浏览器

```
var VueCodemirror = window.VueCodemirror;
```

### 挂载

```js
Vue.use(VueCodemirror);
```


### 生成

```js
$f = formCreate.create([
    {
        type:'codemirror',
        field:'code',
        props:{
            options:{
                tabSize: 4,
                mode: 'text/javascript',
                theme: 'monokai',
                lineNumbers: true,
                line: true,
            }
        },
        value:`a = formCreate.create([
             {type:'codemirror',field:'code',props:{options:{
                 // codemirror options
                 tabSize: 4,
                 mode: 'text/javascript',
                 theme: 'monokai',
                 lineNumbers: true,
                 line: true,
                 // more codemirror options, 更多 codemirror 的高级配置...
               }}, value:'let $f = formCreate.create([])'}
         ])`
    }
])
```

