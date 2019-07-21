
# 1.x升级

::: warning 提示
v2 主要更新是重构、拆包和优化，使用方式和1.x版本保持一致。
有部分不兼容，详细请参考底部不兼容项
:::

## Npm

### 卸载 1.x

```sh
npm remove form-create
```

### 安装 V2

#### iview

安装
```sh
npm install @form-create/iview
```

导入
```js
import formCreate from "@form-create/iview"
import {maker} from "@form-create/iview"
```

#### element-ui

安装
```sh
npm install @form-create/element-ui
```

导入
```js
import formCreate from "@form-create/element-ui"
import {maker} from "@form-create/element-ui"
```


## 浏览器
修改静态资源地址
#### iview
```html
<script src="https://cdn.jsdelivr.net/npm/@form-create/iview/dist/form-create.min.js"></script>
```

#### element-ui
```html
<script src="https://cdn.jsdelivr.net/npm/@form-create/element-ui/dist/form-create.min.js"></script>
```

## 不兼容项

- 移除 自定义组件相关事件
- 移除 全局配置中 `upload` 配置项
- 移除 表单最外层的 `margin` 20px
- 移除 `defaultSlot` 配置项
- 移除 内置组件自动填充默认属性
- 移除 组件规则中的`hidden`和`visibility`属性
- 移除 `upload` 组件 `onSuccess` 中返回 url 自动添加功能
- **移除 `iview`版 event 配置项自动添加`on-`前缀功能**

[更多说明](/v2/guide/update.html#_0-0-3)