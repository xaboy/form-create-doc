# Maker

**The maker component generator is a helper method for generating component rules, which can quickly generate corresponding component rules through chain operations.**


## Get maker

**Browser**

`window.formCreate.maker`

**NodeJs**
- iview

    `import { maker } from '@form-create/iview'`
- elementUI

    `import { maker } from '@form-create/element-ui'`

## Maker.parse


- **Parameter**：`{string|array} Json`、`{bool} toMaker=false`

- **Usage**：

  ```js
  let rules = maker.parse(json);
  let rule = rules.find(field);
  rule.value = 'value';
  rule.event.click = function(){
    //TODO
  }
  ```
Convert the json into a generation rule. **After conversion, you can use the find () method to quickly find the specified field.**

## Build component


- [Iview](/en/v2/iview/maker.html)
- [ElementUI](/en/v2/element-ui/maker.html)
