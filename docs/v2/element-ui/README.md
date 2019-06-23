# 安装

### CDN 引入

目前可以通过 [unpkg.com/@form-create/element-ui](https://unpkg.com/@form-create/element-ui/) 获取到最新版本的资源，在页面上引入 js 即可开始使用。

```html
<!-- import Vue.js -->
<script src="//vuejs.org/js/vue.min.js"></script>
<!-- import stylesheet -->
<link href="https://cdn.jsdelivr.net/npm/element-ui@2.8.2/lib/theme-chalk/index.css" rel="stylesheet">
<!-- import ElementUI -->
<script defer src="https://cdn.jsdelivr.net/npm/element-ui@2.8.2/lib/index.js"></script>
<!-- import form-create -->
<script src="//unpkg.com/@form-create/element-ui/dist/form-create.min.js"></script>

```


### NPM 

**安装**

推荐使用 npm 的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用。

```
npm i @form-create/element-ui
```

**引入**

```js
import formCreate, {maker} from '@form-create/element-ui'
```

### 兼容

- element-ui ^2.8.2


### 图例

![form-create 图例](/img/form-create.elm.png)
