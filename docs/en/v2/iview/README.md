# Install

### CDN

Currently, you can get the latest version of the resource through [unpkg.com/@form-create/iview](https://unpkg.com/@form-create/iview/), and you can start using js by introducing js on the page.

```html
<!-- import Vue.js -->
<script src="//vuejs.org/js/vue.min.js"></script>
<!-- import stylesheet -->
<link rel="stylesheet" href="//unpkg.com/iview/dist/styles/iview.css">
<!-- import iView -->
<script src="//unpkg.com/iview/dist/iview.min.js"></script>
<!-- import form-create -->
<script src="//unpkg.com/@form-create/iview/dist/form-create.min.js"></script>

```


### NPM 

**install**

It is recommended to use npm to install, it can be used better with [webpack](https://webpack.js.org/) packaging tool.

iview 3.x,^2.13
```
npm i @form-create/iview
```
iview 4.x

```
npm i @form-create/iview4
```

**import**

```js
import formCreate, {maker} from '@form-create/iview'
//或者
import formCreate, {maker} from '@form-create/iview4'
```

### Compatible

- iview 2.13.0

- iview 3.x

- iview 4.x


### Legend

![form-create 图例](https://raw.githubusercontent.com/xaboy/form-create/dev/images/sample110.jpg?1)



### Example

CDN can quickly write an example using iView, you can copy the code below or [online preview](http://fiddle.jshell.net/xaboy/j2zg6et0/show)。

<ClientOnly>

<iframe width="100%" height="600" src="//jsfiddle.net/xaboy/j2zg6et0/3/embedded/html,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

</ClientOnly>