# 组件生成器

**maker 组件生成器是用来生成组件规则的助手方法,通过链式操作即可快速生成对应的组件规则**



## 获取 maker 生成器

**浏览器**

`window.formCreate.maker`

**NodeJs**
- iview

    `import { maker } from '@form-create/iview'`
- elementUI

    `import { maker } from '@form-create/element-ui'`

## Maker.parse


- **参数**：`{string|array} Json`、`{bool} toMaker=false`

- **用法**：

  ```js
  let rules = maker.parse(json);
  let rule = rules.find(field);
  rule.value = 'value';
  rule.event.click = function(){
    //TODO
  }
  ```
将 json 转换为生成规则,**转换后可使用 find()方法快速查找指定`field`字段**

## 生成组件


- [Iview](/v2/iview/maker.html)
