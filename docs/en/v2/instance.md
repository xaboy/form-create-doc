---
sidebarDepth: 3
---

# API

## Get API `$f`



- Global method

    ```js
    $f = formCreate.create(rules)
    $f = vm.$formCreate(rules)
    ```

- Component pattern

  ```html
  <form-create v-model="fApi"></form-create>
  ```
  ```js
  new Vue({
    data(){
      return {
          fApi:{} //fApi is equivalent to $f
      }
    }
    })
  ```


## Attributes


### Form generation rules

- **Type**: `array`

- **Usage**：

```js
$f.rule
```


### Global configuration of the form

- **Type**: `object`

- **Usage**：

```js
$f.config
```


## Field operations

### Get all field names of a form

- **Return value**: `string[]`

- **Usage**：

  ```js
  const fields = $f.fields();
  ```

### Get key-value pairs of a form

- **Return value**: `object`

- **Usage**：

  ```js
  const formData = $f.formData()
  ```


### Get the value of the specified field

- **Parameter**：`{string} field`

- **Usage**：

  ```js
  const value = $f.getValue(field)
  ```

  Get the value of the `field` component

### Set the value of a field

- **Sets the value of the specified field**
    - **Parameter**：
        - `{string} field`
        - `{any} value`
    
    - **Usage**：
    
      ```js
      $f.setValue(field,value)
      ```
  Change the value of the `field` component to` value`
  
- **Batch settings**
    - **Parameter**：
        - `{object} formData`
    
    - **Usage**：
    
      ```js
      $f.setValue({
        field1:value1,
        field2:value2,
        field3:value3
      });
      ```
  Modify the values ​​of `field1, field2, field3` components to` value1, value2, value3` respectively
  
  **Alias ​​method`changeValue`,`changeField`**


### Delete specified field

- **Parameter**：`{string} [field|name]`

- **Return value**：`{object} rule`

- **Usage**：

  ```js
  $f.removeField(field)
  ```
  Delete the field


### Get form key-value pairs for two-way data binding

- **Return value**：`{object}`

- **Usage**：

  ```js
  const formData = $f.bind()
  ```



## Component operation

### Update component rules

- **Parameter**：
    - `{string} [field|name]`
    - `{object} rule`
    - `{bool} cover` The default is deep copy, which is directly overridden when equal to true

- **Return value**：`{object} rule`

- **Usage**：

  ```js
  $f.updateRule(field,{
    props:{
      disabled: true
    }
  })
  ```

### Bulk update component rules

- **Parameter**：
    - `{object} rules`
    - `{bool} cover` The default is deep copy, which is directly overridden when equal to true

- **Usage**：

  ```js
  $f.updateRules({
    field1:{
      props:{
        disabled: true
      }
    },
    field2:{
      props:{
        disabled: false
      }
    }
  })
  ```


### Get the specified component generation rule

- **Parameter**：`{string} [field|name]`

- **Return value**：`{object}`

- **Usage**：

  ```js
  const rule = $f.getRule(field)
  ```

### Get generation rules for form components

- **Return value**：`{object}`

- **Usage**：

  ```js
  const model = $f.model()
  ```
  
  Get the generation rules of the form component. **The component definition `field` property can be obtained**



### Get custom component generation rules

- **Return value**：`{object}`

- **Usage**：

  ```js
  const component = $f.component()
  ```

  Get custom component generation rules, **component definition `NAME` property can get**


### Call the method that generates the component

- **Parameter**：
    - **`{string} field/name`**
    - **`{string} methodName`** Component method name

- **Return value**：`Function`

- **Usage**：

  ```js
  const val = $f.method('input','focus')();
  ```

### Manually trigger events for the component

- **Parameter**：
    - **`{string} field/name`**
    - **`{string} eventName`** Component method name
    - **`... args`** Event parameter

- **Usage**：

  ```js
  $f.trigger('input','on-change','new value');
  ```

### Get the `vm / dom` element of the component

- **Parameter**：
    - **`{string} field/name`**

- **Return value**：`Vue|Element`

- **Usage**：

  ```js
  $f.el(field);
  ```

## Form operations

### Form validation

- **Parameter**：`{function} callback`

- **Usage**：

  ```js
  $f.validate((valid)=>{
    if(valid){
      //TODO success
    }else{
      //TODO fail
    }
     
  })
  ```


### Validate specified field

- **Parameter**：
    - `{string} field`
    - `{function} callback`

- **Usage**：

  ```js
  $f.validateField(field,(errMsg)=>{
      if(errMsg){
          //TODO success
      }else{
          //TODO fail
      }
  });
  ```


### Insert component

- **Parameter**：
    - `{object} rule`
    - `{stirng} [field|name]`
    - `{boolean} isChild` Whether to add to the children of the `[field|name]` component

- **Usage**：

  ```js
  $f.prepend({
         type:"input",
         title:"goods info",
         field:"goods_info",
         value:"",
         props: {
             "type": "text",
         },
         validate:[
             { required: true, trigger: 'blur' },
         ],
  }, 'goods-name', false);
  ```

  Insert the specified form element before the field of `field`. Do not pass`field` by default. If `isChild` is`true`, it will be added to the child of `field`.


### Append component

- **Parameter**：
    - `{object} rule`
    - `{stirng} [field|name]`
    - `{bool} isChild` Whether to add to the children of the `[field|name]` component

- **Usage**：

  ```js
  $f.append({
         type:"input",
         title:"goods info",
         field:"goods_info",
         value:"",
         props: {
             "type": "text",
         },
         validate:[
             { required: true, trigger: 'blur' },
         ],
  }, 'goods-name', false);
  ```

  Insert the specified form element after the field of `field`. Do not pass` field` by default. If `isChild` is` true`, it will be added to the child of `field`

  
  
### Submit the form manually

- **Parameter**：
    - `{function} onSubmit`
    - `{function} fail`

- **Usage**：

  ```js
  $f.submit((formData,api)=>{
      //success
  },(api)=>{
      //fail
  })
  ```

  Submit the form manually.If you pass the onSubmit parameter, the option.onSubmit will not be triggered.


### Hide or show the specified component

- **Parameter**：
    - `{bool} hidden`
    - `{string|array} [field|name]`

- **Usage**：

  ```js
  $f.hidden(true)
  ```
  ```js
  $f.hidden(true,field)
  ```
  ```js
  $f.hidden(true, [field1,field2,field3,name1,name2])
  ```

### Get component display status

- **Parameter**：`{string} [field|name]`

- **Return value**：`{bool}`

- **Usage**：
```js
const hiddenStatus = $f.hiddenStatus();
```

### Disable or unassign components

- **Parameter**：
    - `{bool} disabled`
    - `{string|array} field`

- **Usage**：

  ```js
  $f.disabled(true)
  ```
  ```js
  $f.disabled(true, field)
  ```
  ```js
  $f.disabled(true, [field1,field2,field3])
  ```

### Clear component verification information

- **Parameter**：`{string|array} field`

- **Usage**：

  ```js
  $f.clearValidateState();
  ```

  ```js
  $f.clearValidateState(field);
  ```

  ```js
  $f.clearValidateState([field1,field2]);
  ```

### Gets whether the value in the form has changed state

- **Return value**：`{bool}`

- **Usage**：

  ```js
  const status = $f.changeStatus()
  ```


### Clear whether the value of the form has changed

- **Usage**：

  ```js
  $f.clearChangeStatus()
  ```

### Modify the form submit button rule

- **Parameter**：`{object} props`

- **Usage**：

  ```js
  $f.submitBtnProps({loading:true})
  ```

- **Quick operation**:

  - `$f.btn.loading(loading = true)` Set the submit button to the loading state
  - `$f.btn.disabled(disabled = true)` Set submit button disabled
  - `$f.btn.show(isShow = true)` Set the submit button display status

### Modify the form reset button rule

- **Parameter**：`{object} props`

- **Usage**：

  ```js
  $f.resetBtnProps({disabled:true})
  ```

- **Quick operation**:

  - `$f.resetBtn.loading(loading = true)` Set the reset button to the loading state
  - `$f.resetBtn.disabled(disabled = true)` Set reset button disabled
  - `$f.resetBtn.show(isShow = true)` Set the reset button display status

### Close the popup of the frame component

- **Parameter**：`{string} [field|name]`

- **Usage**：

  ```js
  $f.closeModal(field)
  ```

### Update global configuration

- **Parameter**：`{object} options`

- **Usage**：

  ```js
  $f.updateOptions({
      onSubmit:(formData)=>{
          //submit Form
      }
  })
  ```

### Modify form submission callback

- **Parameter**：`{Function} [onSubmit]`

- **Usage**：

  ```js
  $f.onSubmit((formData)=>{
      //submit Form
  })
  ```


### Control the overall display status of the form

- **Parameter**：`{bool} isShow`

- **Usage**：

  ```js
  $f.hideForm(true)
  ```

### Convert generation rules to json

- **Return value**：`{string}`

- **Usage**：

  ```js
  const json = $f.toJson();
  ```


### Manually re-render the specified component

- **Parameter**：`{string} [field/name]`

- **Usage**：

  ```js
  $f.sync(field)
  ```

### Reload form

- **Parameter**：`{Array} [rules]`

- **Usage**：

  ```js
  $f.reload(newRule)
  ```

  Reload the form generator according to the new generation rules. If you do not pass in rules, the form generator will be reloaded according to the current rules.



### Refresh form

- **Parameter**：`{bool} [clear]`

- **Usage**：

  ```js
  $f.refresh(true)
  ```

  Re-render the form, clearing all components' caches when clear is true


### Reset form

- **Usage**：

  ```js
  $f.resetFields()
  ```


### Destroy form

- **Usage**：

  ```js
  $f.destroy()
  ```

### Listening to form events


- **Parameter**：
    - **`{string} emitName`**  Generate rule `emit` event name
    - **`{Function} callback`** Callback method

- **Usage**：

  ```js
  /*
  rule:{
    field:'goods-name'
    //...
    emit:['on-change']
  }
  */

  $f.on('goods-name-on-change',() => {
    //TODO
  });
  ```


### Listen for form events, only fired once


- **Parameter**：
    - **`{string} emitName`**  Generate rule `emit` event name
    - **`{Function} callback`** Callback method

- **Usage**：

  ```js
  /*
    rule:{
      field:'goods-name'
      //...
      emit:['on-change']
    }
    */
  $f.once('goods-name-on-change',() => {
    //TODO
  });
  ```

   Listen for a custom event, but only fire once, remove the listener after the first trigger



### Remove form event listener


- **Parameter**：
    - **`{string | Array} emitName`**  Generate rule `emit` event name
    - **`{Function} [callback]`** Callback method

- **Usage**：

   Remove custom event listeners.

   -If no parameters are provided, remove all event listeners;

   -If only events are provided, remove all listeners for the event;

   -If both an event and a callback are provided, only the listener for this callback is removed.
   
  ```js  
  $f.off('goods-name-on-change');
  // $f.off('goods-name-on-change', fn);
  ```
   
### $f.set
   
   - **Parameter**：
        - `{object} node`
        - `{string} key`
        - `{any} value`
   
   - **Usage**：
   
     ```js
     $f.set(field.rule.col,'span',12)
     ```
   
     You can try this method if the page is not updated after modifying the rules of the component, the method is the same as `Vue.$Set`
   
