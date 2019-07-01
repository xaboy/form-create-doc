---
 Title: update log (0.0.4)
---

### Current version 0.0.4

--------


#### 0.0.4 (2019-06-30)

- Added `$f.toJson` and `formCreate.parseJson` methods to convert build rules to json and reverse
- Added `info` configuration item to configure component prompts
- Added `option.info` configuration item to set the configuration information of the prompt information.
- Remove the time component, the date component is worth reprocessing
- Added an error when the `$f.method` method does not exist
- Add the `modal` configuration item of the `frame` component to set the property of `modal`
- Fixed `element-ui` partial component `placeholder` attribute invalid
- Update `element-ui` time component, date component `maker` generator

#### 0.0.3

Internal function refactoring,
Streamlined and optimized,
Easier to expand


**new function**
- Custom components can be converted to form components with features for validation and built-in components
- Increase the global configuration of components
- Added `name` configuration item, custom component configurable
- Added method to determine if the form is modified `changeStatus`
- Increase Get component hidden state method `hiddenStatus`
- Added `rule.native` configuration item
- Added `$f.method` method to call component method

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