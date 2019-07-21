# Maker

**The maker component generator is a helper method for generating component rules, which can quickly generate corresponding component rules through chain operations.**


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


- [Iview](/en/v2/iview/maker.html)
- [ElementUI](/en/v2/element-ui/maker.html)
