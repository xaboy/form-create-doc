---
 Title: update log (2.0.0)
---

### Current version 2.0.0

--------


#### 2.0.0

Internal function refactoring,
Streamlined and optimized,
Easier to expand


**new function**
- Custom components can be converted to form components with features for validation and built-in components
- Increase the global configuration of components
- Added `name` configuration item, custom component configurable

**modify**
- Move the `switch` component `slot` configuration to `props.slot`
- Modify the parameters of the `$f.validate` method
- Modify the parameter order of `$f.hidden`, `$f.visibility`, `$f.disabled` methods
- Modify method name `$f.submitStatus` => `$f.submitBtnProps`
- Modify method name `$f.resetBtnStatus` => `$f.resetBtnProps`
- Refactor the `frame` component and move `event` to `props`

**Remove**

- Remove custom component related events
- Remove the `frame` component spin configuration item
- Remove the `upload` configuration item in the global configuration
- Remove the `margin` 20px from the outermost layer of the form
- Remove the `$f.btn.finish` and `$f.resetBtn.finish` methods
- Remove the `defaultSlot` configuration item
- Remove built-in components to automatically populate default properties
- Remove the `hidden` and `visibility` attributes from the component rules
- Remove `upload` component `onSuccess` returns url auto add function