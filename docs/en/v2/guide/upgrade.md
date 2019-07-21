# 1.x upgrade

::: warning prompt
The v2 major updates are refactoring, unpacking, and optimization, and are consistent with the 1.x version.
Some are not compatible. Please refer to the bottom incompatible item for details.
:::

## Npm

### Uninstall 1.x

```sh
npm remove form-create
```

### Installation V2

#### iview

installation
```sh
npm install @form-create/iview
```

Import
```js
import formCreate from "@form-create/iview"
import {maker} from "@form-create/iview"
```

#### element-ui

installation
```sh
npm install @form-create/element-ui
```

Import
```js
import formCreate from "@form-create/element-ui"
import {maker} from "@form-create/element-ui"
```


## Browser
Modify static resource address
#### iview
```html
<script src="https://cdn.jsdelivr.net/npm/@form-create/iview/dist/form-create.min.js"></script>
```

#### element-ui
```html
<script src="https://cdn.jsdelivr.net/npm/@form-create/element-ui/dist/form-create.min.js"></script>
```

## Incompatible

- Remove custom component related events
- Remove the `upload` configuration item in the global configuration
- Remove the `margin` 20px from the outermost layer of the form
- Remove the `defaultSlot` configuration item
- Remove built-in components to automatically populate default properties
- Remove the `hidden` and `visibility` attributes from the component rules
- Remove `upload` component `onSuccess` returns url auto add function
- **Remove `iview` version event configuration item automatically adds `on-` prefix function**

[more details](/en/v2/guide/update.html#_0-0-3)