# Rule


## Description
**The configuration item name of the JSON rule is the same as the configuration method name of the component generator, and the configuration parameters are the same**

For example to generate an input component:

JSON rules
```js
{
  field: 'test',
  type: 'input',
  title: 'textTitle'
  props:{
    disable: true
  },
  on:{
    change:function(){
    }
  }
}
```
Generate the same rules with Maker
```js
maker.create('input','test','textTitle').props({
    disable: true
  }).on({
    change:function(){
    }
})
```

## **Basic Rules**


### **type**

- **Type**: `String`
- **Description**: Set the name of the generated component

### **field**

- **Type**: `String`
- **Description**: Set the field name of the **form component**, **Custom component can not be configured**


### **title**

- **Type**: `String`
- **Description**: The name of the component, you can not set

### **name**

- **Type**: `String`
- **Description**: Field name of the custom component

### **value**

- **Type**: `any`
- **Description**: Field values ​​for form components, custom components can be set without

### **native**

- **Type**: `Bool`
- **Description**: Whether to generate components as they are, not nested in `FormItem`


### **hidden**

- ​**Type**:  `Bool`
- **Description**: Set whether the component is displayed

### **info**

- **Type**: `String`
- **Description**: Set the prompt information for the component
- Global Configuration Description: [iview](/en/v2/iview/global.html) | [element-ui](/en/v2/element-ui/global.html)

### **className**

- **Type**: `String`
- **Description**: Set the `class` of the component


## **Extension rules**


### **validate**

- **Type**: `Array`
- **Description**: Set validation rules for form components

### **options**

- **Type**: `Array`
- **Description**: Set `radio`, `select`, `checkbox` and other components `option` options

### **inject**

- **Type**:  `any`
- **Description**: Set event injection is custom data


### **col**

- **Type**: `Object`
- **Description**: Set layout rules for components

### **control**
- **Type**:  `Object`
- **Description**:  Controlling other component displays

[description](/en/v2/guide/control.html)


### **children**
- **Type**: `Array<rule|string|maker>`
- **Description**: Set the slot of the parent component. The default is `default`. It can be used with the `slot` configuration item.

  
  - Example 1
  ```js
  formCreate.maker.create('button').children([
     'Button content'
  ]);
  ```
  
  - Example 2
   
  ```js
  maker.input('text','text','text').children([
      Maker.create('span').children(['append']).slot('append')
  ])
  ```
  
  - Example 3

  ```js
  formCreate.maker.create('i-row').children([
    formCreate.maker.create('i-col').props('span',12).children([
      formCreate.maker.template('<span>custom component</span>', new Vue)
    ]),
  ]);
  ```

### **emit**

- **Type**: `Array`
- **Description**: The event name triggered by the `emit` mode is configured in component mode, which can be combined with the `emitPrefix` parameter.

Example:
```js
// The following three ways have the same effect

rules = [{//emit mode triggers change event
    field: 'goods_name',
    //...
    emit:['change']
},{// custom emit event prefix, default is field field
    field: 'goods_info',
    //...
    emit:['change'],
    emitPrefix: 'gi'
},{// write the callback method directly in the rule
     field: 'goods_tag',
     //...
     event:{
         change:function() {
           //TODO
         }
     }
 }]
```

```html
<div id="app">
  <form-create :rule="rules" @goods-name-change="change" @gi-change="change"></form-create>
</div>
```

```js
new vue({
   el:'#app',
    data: {
        Rules:rules
    },
    methods:{
        change:function(){
            //TODO
        }
    }
})
```


### **emitPrefix**

- **Type**: `Object`
- **Description**: Custom Prefix for component `emit ` event
- **Default**: Component `field` field


## Template Rules

**template component must set the parameters, other components do not need to be set**

### **template**

- **Type**: `string`
- **Description**: Generate template for template component


### **vm**

- **Type**: `Vue|Function`
- **Description**: Vue sample object for template component for parsing template


## General rules

### **props**

- **Parameter**: `Object`
- **Description**: Set the component's `props`


### **class**

- **Parameter**: `Object|String|Array`
- **Description**: Set the `class` of the component

### **style**

- **Parameter**: `Object|String`
- **Description**: Set the `style` of the component

### **attrs**

- **Parameter**: `Object`
- **Description**: Set the normal HTML features of the component

### **domProps**

- **Parameter**: `Object`
- **Description**: Set the DOM attribute of the component

### **on**

- **Parameter**: `Object`
- **Description**: Set component events

### **nativeOn**

- **Parameter**: `Object`
- **Description**: Native events of the listening component

### **directives**

- **Parameter**: `Array`
- **Description**: Set custom instructions for components

### **scopedSlots**

- **Parameter**: `Object`
- **Description**: Set the slot of the component

### **slot**

- **Parameter**: `String`
- **Description**: Set the slot name of the component. If the component is a subcomponent of another component, specify a name for the slot.


**[Custom Configuration Item Description](https://cn.vuejs.org/v2/guide/render-function.html#%E6%B7%B1%E5%85%A5-data-%E5%AF%B9%E8%B1%A1l)**