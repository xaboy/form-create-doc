# Global configuration

Some common properties of components can be configured in the global configuration.

## Setting global configuration

- Component mode

```html
<form-create :option="option"></form-create>
```

- Global method

```js
Vm.$formCreate(rule,option)
window.formCreate.create(rule,option)
```


## Composition

The global configuration consists of the following sections.

**Basic configuration**

- el: the node into which the form is inserted
- onSubmit: form submission callback function
- onReload: callback function after form overloading
- mounted: callback function after the form is created successfully
- global: component global configuration

**UI framework configuration**

- form: form overall display rule configuration
- row: form component layout configuration
- submitBtn: submit button style configuration
- resetBtn: reset button style configuration
- ...


## Basic configuration

### el

- **Type**:`string | HTMLElement`
- **Description**: Provides a DOM element that already exists on the page as the mount target for the form, **No need to set in component mode**


### onSubmit

- **Type**:`Function`

- **Parameter**:
  - `Object` formData
  - `Object` $f


- **Description**: Form submission callback function

- **Example**:

  Set by option
  ```js
  {
    onSubmit:function(formData,$f){
      //TODO ajax submission form
    }
  }
  ```
  Set by label

  ```html
  <form-create @on-submit="onSubmit"></form-create>
  ```




### onReload

- **Type**:`Function`

- **Parameter**:
  - `Object` $f

- **Description**: Callback function after form overloading

- **Example**:

  Set by option
  ```js
  {
    onReload:function($f){
      //TODO
    }
  }
  ```

  Set by label
  ```html
  <form-create @on-reload="onReload"></form-create>
  ```



### mounted

- **Type**:`Function`

- **Parameter**:
  - `Object` $f

- **Description**: Callback function after form creation success

- **Example**:

  Set by option
  ```js
  {
    Mounted: function($f){
      //TODO
      //The TODO form was created successfully, and the form can be manipulated here.
    }
  }
  ```

  Set by label
  ```html
  <form-create @mounted="onMounted"></form-create>
  ```



### global

#### Component Common Configuration

- **type**: `Object`

- **Description**: Set general rules for all components

- **Example**:

  ```js
  {
    Global:{
      // Set all components
      '*':{
        Col:{
          Span:12
        },
        Props:{
          Disabled:false
        }
      }
    }
  }
  ```

#### Specify component global configuration

- **type**: `Object`

- **Description**: Set the global configuration of the specified component,

- **Example**:

  ```js
  {
    Global:{
      // Set the inputNumber component
      'inputNumber':{
        Props:{
          Disabled: true,
          Precision: 2
        }
      }
    }
  }
  ```
> The component name here must be the same as `type` in the build rule


## UI Configuration

- [Iview](/en/v2/iview/global.html)
- [ElementUI](/en/v2/element-ui/global.html)