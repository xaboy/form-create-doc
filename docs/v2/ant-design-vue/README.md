# 安装

### CDN 引入

目前可以通过 [unpkg.com/@form-create/ant-design-vue](https://unpkg.com/@form-create/ant-design-vue/) 获取到最新版本的资源，在页面上引入 js 即可开始使用。

```html
<!-- import Vue.js -->
<script src="//vuejs.org/js/vue.min.js"></script>
<!-- import stylesheet -->
<link href="https://unpkg.com/ant-design-vue@1.5.3/dist/antd.min.css" rel="stylesheet">
<!-- import moment -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/locale/zh-cn.js"></script>
<!-- import ant-design-vue -->
<script defer src="https://unpkg.com/ant-design-vue@1.5.3/dist/antd.js"></script>
<!-- import form-create -->
<script src="//unpkg.com/@form-create/ant-design-vue/dist/form-create.min.js"></script>
```


### NPM 

**安装**

推荐使用 npm 的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用。

```
npm i @form-create/ant-design-vue
```

**引入**

```js
import formCreate, {maker} from '@form-create/ant-design-vue'
```

### 兼容

- ant-design-vue ^1.5.3


### 图例

![form-create 图例](/img/form-create.antd.jpg)
