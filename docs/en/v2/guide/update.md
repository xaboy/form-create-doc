---
title: Update log (1.0.6)
---

### Current version 1.0.6

--------
#### 1.0.6 (2020-01-16)
- Support `TypeScript`
- Fixed `elm.frame` component not displaying in` input` type`icon`
- Fixed the issue that the `iview.tree` component was not selected for the first time rendering

#### 1.0.5 (2019-12-7)
- Refactored `hidden`,` visibility` functionality
- Added `hidden` and` visibility` configuration items
- Fix `value` may change unexpectedly
- Fixed the issue that page components may not render after changing the value

#### 1.0.4 (2019-11-21)
- Added `formData` configuration item to set the initial value of the form
- Fixed an infinite loop problem when `type` is undefined
- Fixed a problem with component not recognized in `type` uppercase
- Support for the `iview v4` version
```
npm i @form-create/iview4
```

#### 1.0.3 (2019-08-26)

- Fixed event invalidation of control bindings in the form after multiple v-ifs [#125](https://github.com/xaboy/form-create/issues/125)
- Fix toJson method function to json
- Fixed removing the extra layout when the built-in button is not displayed
- Added manual trigger event method `$f.trigger`
- Added Get component `vm` method `$f.el`
- Enhanced functions in `props` to support event injection
- Enhanced `removeField`, `updateRule` returns the current rule
- Enhanced `self` current rule in event injection parameters
- Enhanced vm parameter support set to `Function`
```js
{
    vm:function(){
        return new Vue;
    }
}
```

#### 1.0.2 (2019-08-11)

- Fixed style overridden issue [#121](https://github.com/xaboy/form-create/issues/121#issuecomment-519348579)
- Fixed datePicker, timePicker component validation issue, value issue [#118](https://github.com/xaboy/form-create/issues/118)
- Fixed `append`, `prepend` method error
- Enhanced After the rule definition `name` is generated, it can be obtained by the `component` method.
- Added `on`, `off`, `once` method binding emit event

#### 1.0.1 (2019-07-29)

- Add `$f.updateValidate`, `$f.updateValidates` method [#116](https://github.com/xaboy/form-create/issues/116)
- Fixed input box setting maximum and minimum characters invalid [#115](https://github.com/xaboy/form-create/issues/115)
- Fixed upload component uploading multiple images at the same time
- Fixed ElementUI.upload component loading animation does not display problem


#### 1.0.0 (2019-07-21)

- Fixed timePicker component not selecting problem
- Fixed stack overflow issue when type is template [#110](https://github.com/xaboy/form-create/issues/110)
- Added automatic injection of `$f` in the custom component props, which can be received with `props.formCreate`
- Added `$f.getRule` method to get the generation rule for specifying `field`


#### 0.0.5 (2019-07-07)

- Optimize the `$f.toJson` method, does not support converting `template` components
- Added `$f.updateRule`, `$f.updateRules` method
```js
//Update goods_name
$f.updateRule('goods_name',{
     props:{
         disabled: true
     }
})
// Batch update
$f.updateRules({
     'goods_name':{
         props:{
             disabled: true
         }
     }
})
```
- Added `injectEvent` global configuration item, set whether to enable event injection, inject $f, rule and other parameters. The first parameter of the event after opening is the injected parameter.
```js
// Inject the data structure of the parameters
{
   $f:Object,//api
   rule:Array, // generation rules
   option:Object, // global configuration
   inject:Any, // custom injection parameters
}

```
```js
//Open globally
{
     injectEvent:true
}
// specify the event to open
rule:{
     //inject extra custom injection parameters for the event
     emit:[{name:'click',inject:true}]
}
```
- Fixes remove the component and add `field` to the same component as the removed component. The component receives the value `undefined`.


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