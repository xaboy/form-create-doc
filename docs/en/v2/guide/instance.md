# Instance method

## Get instance object $f



- Global method

  - $f = formCreate.create(rules)
  - $f = vm.\$formCreate(rules)

- Component mode

  ```html
  <form-create ref="fc" v-model="fApi" :rule="rules"></form-create>
  ```
  - $f = vm.fApi



## Attributes


### $f.rule

  Current form generation rules


### $f.config

  Global configuration of the current form


## method



### $f.fields

- **Usage**:

  ```js
  $f.fields()
  ```

  Get all field names of the form


### $f.formData

- **Usage**:

  ```js
  formData = $f.formData()
  ```

  Get the key-value pairs of the form


### $f.getValue

- **Parameter**:`{string} field`

- **Usage**:

  ```js
  field_value = $f.getValue(field)
  ```

Get the value of the specified field



### $f.setValue

- **Parameters**:`{string|object} field`, `value`

- **Usage**:

  ```js
  $f.setValue(field,value)
  ```
  ```js
  $f.setValue({
    Field1:value1,
    Field2:value2,
    Field3:value3
  });
  ```

   Set the value of the field in batches, alias method `changeValue`, `changeField`


### $f.removeField

- **Parameter**:`{string} [field|name]`

- **Usage**:

  ```js
  $f.removeField(field)
  ```

  Delete specified field
  
### $f.updateRule <Badge type="warn" text="0.0.5+"/>

- **Parameter**:`{string} [field|name]`,`{object} rule`

- **Usage**:

```js
$f.updateRule(field,{
  props:{
    disabled: true
  }
})
```

   Update specified component



### $f.updateRules <Badge type="warn" text="0.0.5+"/>

- **parameters**:`{object} rules`

- **Usage**:

```js
$f.updateRule({
  field:{
    props:{
      disabled: true
    }
  }
})
```

   Batch update component


### $f.getRule <Badge type="warn" text="0.0.6+"/>

- **Parameter**:`{string} [field|name]`

- **Usage**:

```js
$f.getRule(field)
```

    Get the specified component generation rule


### $f.validate

- **Parameter**:`{function} callback`

- **Usage**:

  ```js
  $f.validate((valid)=>{
    If(valid){
      //TODO verification passed
    }else{
      //TODO verification failed
    }
     
  })
  ```

  form validation


### $f.validateField

- **Parameters**:`{string} field`, `{function} callback`

- **Usage**:

  ```js
  $f.validateField(field,(errMsg)=>{
      If(errMsg){
          //TODO verification failed
      }else{
          //TODO verification passed
      }
  });
  ```
  Form validation specified field


### $f.resetFields

- **Usage**:

  ```js
  $f.resetFields()
  ```

  Reset form




### $f.destroy

- **Usage**:

  ```js
  $f.destroy()
  ```

  Destroy form
  
  


### $f.prepend

- **Parameters**:`{object} rule`, `{stirng} [field|name]`, `{boolean} isChild`

- **Usage**:

  ```js
  $f.prepend({
         Type:"input",
         Title: "Product introduction",
         Field:"goods_info",
         Value:"",
         Props: {
             "type": "text",
             "placeholder": "Please enter the product description",
         },
         Validate:[
             { required: true, message: 'Please enter the product description', trigger: 'blur' },
         ],
  });
  ```

  Insert the specified form element before the field of `field`, not passing `field` by default in the first one. If `isChild` is `true`, it will be added to the child of `field`


### $f.append

- **Parameters**:`{object} rule`, `{stirng} [field|name]`, `{bool} isChild`

- **Usage**:

  ```js
  $f.prepend({
         Type:"input",
         Title: "Product introduction",
         Field:"goods_info",
         Value:"",
         Props: {
             "type": "text",
             "placeholder": "Please enter the product description",
         },
         Validate:[
             { required: true, message: 'Please enter the product description', trigger: 'blur' },
         ],
  });
  ```

  Insert the specified form element after the field of `field`, not passing `field` by default in the last one. If `isChild` is `true`, it will be added to the child of `field`

  
  
### $f.submit

- **Parameters**:`{function} onSubmit`,`{function} fail`

- **Usage**:

  ```js
  $f.submit((formData,api)=>{
      //submit Form
  },(api)=>{
      //Verification failed
  })
  ```

  Submit the form manually, if you pass the `onSubmit` parameter, it will no longer trigger `option.onSubmit`


### $f.hidden

- **Parameters**:`{bool} hidden`,`{string|array} [field|name]`

- **Usage**:

  ```js
  $f.hidden(true)
  ```
  ```js
  $f.hidden(true,field)
  ```
  ```js
  $f.hidden(true, [field1,field2,field3,name1,name2])
  ```

  Hide or show the specified component


### $f.hiddenStatus

- **Parameters**：`{string} field`

   Get component display status



### $f.visibility

- **Parameters**:`{bool} visibility`,`{string|array} [field|name]`

- **Usage**:

  ```js
  $f.visibility(true)
  ```
  ```js
  $f.visibility(true,field)
  ```
  ```js
  $f.visibility(true, [field1,field2,field3,name1,name2])
  ```
  Hide or show the specified component


### $f.visibilityStatus

- **Parameters**：`{string} field`

   Get component display status


### $f.disabled

- **Parameters**:`{bool} disabled`,`{string|array} field`

- **Usage**:

  ```js
  $f.disabled(true)
  $f.disabled([field1, field2,field3],false)
  ```
  ```js
  $f.disabled(true, field)
  ```
  ```js
  $f.disabled(true, [field1,field2,field3])
  ```

  Disable or unassign components


### $f.clearValidateState

- **Parameter**:`{string|array} field`

- **Usage**:

  ```js
  $f.clearValidateState();
  ```

  ```js
  $f.clearValidateState(field);
  ```

  ```js
  $f.clearValidateState([field1,field2]);
  ```

  Clear component verification information


### $f.model

- **Usage**:

  ```js
  Model = $f.model()
  ```
  
  Get the generation rules of the form component, **component definition `field` attribute can be obtained**



### $f.component

- **Usage**:

  ```js
  Component = $f.component()
  ```

  Get the custom component generation rules, ** component definition `name` property can get **


### $f.bind

- **Usage**:

  ```js
  formData = $f.bind()
  ```

  Get two-way data-bound form key-value pairs



### $f.submitBtnProps

- **Parameter**:`{object} props`

- **Usage**:

  ```js
  $f.submitBtnProps({loading:true})
  ```

- **Shortcut**:

  - `$f.btn.loading(loading = true)` Set the submit button to enter the loading state
  - `$f.btn.disabled(disabled = true)` Set the submit button disabled state
  - `$f.btn.show(isShow = true)` Set the submit button display status

  Modify form submission button rules

### $f.resetBtnProps

- **Parameter**:`{object} props`

- **Usage**:

  ```js
  $f.resetBtnProps({disabled:true})
  ```

- **Shortcut**:

  - `$f.resetBtn.loading(loading = true)` Set the reset button to enter the loading state
  - `$f.resetBtn.disabled(disabled = true)` Set reset button disabled state
  - `$f.resetBtn.show(isShow = true)` Set the reset button display status

  Modify form reset button rules


### $f.closeModal

- **Parameter**:`{string} field`

- **Usage**:

  ```js
  $f.closeModal(field)
  ```

  Close the popup of the frame component



### $f.set

- **Parameters**:`{object} node`, `{string} key`, `value`

- **Usage**:

  ```js
  $f.set(field.rule.col,'span',12)
  ```

  If you do not update the page after modifying the rules of the component, you can try this method, which is the same as `Vue.$set`



### $f.reload

- **Parameters**:`{array} rules`

- **Usage**:

  ```js
  $f.reload()
  ```

  Reload the form generator according to the new build rule. If you don't pass `rules`, it will be overloaded according to the current rule.



### $f.updateOptions

- **Parameters**:`{object} options`

- **Usage**:

  ```js
  $f.updateOptions(({
      onSubmit:(formData)=>{
          //submit Form
      }
  })
  ```

  Update global configuration



### $f.onSubmit

- **Parameters**:`{function} onSubmit`

- **Usage**:

  ```js
  $f.onSubmit((formData)=>{
      //submit Form
  })
  ```
   Set the callback for the form submission



### $f.sync

- **Parameter**:`{string} [field|name]`

- **Usage**:

  ```js
  $f.sync(field)
  ```

  Manually re-render the specified component



### $f.refresh

- **Parameter**:`{bool} clear`

- **Usage**:

  ```js
  $f.refresh(true)
  ```

  Re-render the form, clearing the cache of all components when `clear` is `true`




### $f.hideForm

- **Parameter**:`{bool} isShow`

- **Usage**:

  ```js
  $f.hideForm(true)
  ```

  Control the overall display status of the form

### $f.method

- **Parameters**:`{string} field`, `{string} methodName`

- **Return value**:`Function`

- **Usage**:

    ```js
    $f.method('input','focus')();
    ```

    Method of calling a component

### $f.toJson <Badge type="warn" text="0.0.4+"/>


- **Return value**: `json`

- **Usage**:

    ```js
    const json = $f.toJson();
    ```

    Convert the current build rule to json


### $f.on <Badge type="warn" text="1.0.2+"/>


- **Parameters**：
    - **`{string} emitName`**
    - **`{Function} callback`**

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

   Listen for custom events on the current instance



### $f.once <Badge type="warn" text="1.0.2+"/>


- **Parameters**：
    - **`{string} emitName`**
    - **`{Function} callback`**

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



### $f.off <Badge type="warn" text="1.0.2+"/>


- **Parameters**：
    - **`{string | Array} emitName`**
    - **`{Function} [callback]`**

- **Usage**：

    Remove the custom event listener.

    - remove all event listeners if no arguments are supplied;

    - If only an event is provided, remove all listeners for that event;

    - If both events and callbacks are provided, only the listeners for this callback are removed.