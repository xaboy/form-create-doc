# Code editor

This article uses a third-party code editor [vue-codemirror](https://github.com/surmon-china/vue-codemirror)

### Effect

![vue-codemirror](/img/vue-codemirror.png)


### Installation

Node

```sh
npm install vue-codemirror
```

Browser

```html
<link rel="stylesheet" href="https://unpkg.com/codemirror/lib/codemirror.css">
<link rel="stylesheet" href="https://unpkg.com/codemirror/theme/monokai.css">
<script type="text/javascript" src="https://unpkg.com/codemirror/lib/codemirror.js"></script>
<script type="text/javascript" src="https://unpkg.com/codemirror/mode/javascript/javascript.js"></script>
<script type="text/javascript" src="https://unpkg.com/vue-codemirror/dist/vue-codemirror.js"></script>
```

### Import

Node

```js
import VueCodemirror from 'vue-codemirror'

// language
import 'codemirror/mode/javascript/javascript.js'
// theme css
import 'codemirror/theme/monokai.css'
```

Browser

```
var VueCodemirror = window.VueCodemirror;
```

### Mounting

```js
vue.use(VueCodemirror);
```


### Generate

```js
$f = formCreate.create([
    {
        type: 'codemirror',
        field: 'code',
        props:{
            options:{
                tabsize: 4,
                mode: 'text/javascript',
                theme: 'monokai',
                linenumbers: true,
                line: true,
            }
        },
        value:`a = formcreate.create([
             {type:'codemirror',field:'code',props:{options:{
                 // codemirror options
                 tabsize: 4,
                 mode: 'text/javascript',
                 theme: 'monokai',
                 linenumbers: true,
                 line: true,
                 // more codemirror options, more advanced configuration of codemirror...
               }}, value:'let $f = formcreate.create([])'}
         ])`
    }
])
```