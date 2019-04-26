---
sidebarDepth: 3
---

# Instance method

::: tip Get $f instance object



- Global method

  - $f = formCreate.create(rules)
  - $f = vm.\$formCreate(rules)

- Component mode

  ```js
  <form-create ref="fc" v-model="fApi" :rule="rules"></form-create>
  ```

  - $f = vm.fApi <Badge text="1.5.2+"/><Badge type="warn" text="recommend"/>

:::



## $f.fields

- **usage**：

  ```js
  $f.fields()
  ```

  Get all field names of the form


## $f.formData

- **usage**：

  ```js
  formData = $f.formData()
  ```

  Get the key-value pairs of the form


## $f.getValue

- **parameter**：`{string} field`

- **usage**：

  ```js
  field_value = $f.getValue(field)
  ```

   Get the value of the specified field



## $f.changeField

- **parameter**：`{string} field`、`value`

- **usage**：

  ```js
  $f.changeField(field,value)
  ```

  Modify the value of the specified field,`$f.changeValue` is an alias for this method



## $f.resetFields

- **usage**：

  ```js
  $f.resetFields()
  ```

  Reset form


## $f.removeField

- **parameter**：`{string} field`

- **usage**：

  ```js
  $f.removeField(field)
  ```

  Delete specified field

## $f.component <Badge text="1.5.4+"/>

- **usage**：

  ```js
  component = $f.component()
  ```

- **data structure**：

  ```js
  {
      field1:{props,validate,options,slot,event,...[other]}
      field2:{props,validate,options,slot,event,...[other]}
  }
  ```

  Get custom component generation rules for two-way data binding,**Custom components must be defined by the `field` attribute.**

## $f.model

- **usage**：

  ```js
  model = $f.model()
  ```

- **data structure**：

  ```js
  {
      field1:{value,rule:{props,validate,options,slot,event,...[other]}}
      field2:{value,rule:{props,validate,options,slot,event,...[other]}}
  }
  ```

  Get form generation rules for two-way data binding


## $f.bind <Badge text="1.4.1+"/>

- **usage**

  ```js
  bind = $f.bind()
  ```

  Get two-way data-bound form key-value pairs


## $f.hidden <Badge text="1.4.1+"/>

- **parameter**：`{string} field`、`{bool} hidden`

- **usage**：

  ```js
  $f.hidden(field,true)
  ```

  Hide or show the specified component


## $f.visibility <Badge text="1.4.1+"/>

- **parameter**：`{string} field`、`{bool} visibility`

- **usage**：

  ```js
  $f.visibility(field,true)
  ```

  Hide or show the specified component


## $f.validate

- **parameter**：`{function} success`、`{function} error`

- **usage**：

  ```js
  $f.validate(()=>console.log('验证通过'),()=>console.log('验证未通过'))
  ```

  Form validation, if the validation is done by executing `success`, failing to execute `error`


## $f.validateField

- **parameter**：`{string} field`、`{function} callback`

- **usage**：

  ```js
  $f.validateField(field,(errMsg)=>{
      if(errMsg){
          //TODO fail
      }else{
          //TODO success
      }
  });
  ```

  Form validation specified field


## $f.prepend

::: warning Suggest

It is recommended to directly generate the rule `rules` and insert it into the corresponding position of the array.

:::

- **parameter**：`{object} rule`、`{stirng} field`

- **usage**：

  ```js
  $f.prepend({
         type:"input",
         title:"商品简介",
         field:"goods_info",
         value:"",
         props: {
             "type": "text",
             "placeholder": "请输入商品简介",
         },
         validate:[
             { required: true, message: '请输入商品简介', trigger: 'blur' },
         ],
  },undefined);
  ```

  Insert the specified form element before the field of `field`, not passing `field` by default in the first


## $f.append

::: warning Suggestion

It is recommended to directly generate the rule `rules` and insert it into the corresponding position of the array.

:::

- **parameter**：`{object} rule`、`{stirng} field`

- **usage**：

  ```js
  $f.prepend({
         type:"input",
         title:"商品简介",
         field:"goods_info",
         value:"",
         props: {
             "type": "text",
             "placeholder": "请输入商品简介",
         },
         validate:[
             { required: true, message: '请输入商品简介', trigger: 'blur' },
         ],
  },null);
  ```

  Insert the specified form element after the field of `field`, not passing `field` by default in the last one


## $f.submitStatus

- **parameter**：`{object} props`

- **usage**：

  ```js
  $f.submitStatus({loading:true})
  ```

- **Quick operation**:

  - `$f.btn.loading(loading = true)` Set the submit button to enter the loading state
  - `$f.btn.disabled(disabled = true)` Set submit button disabled state

- **props**：

  ```js
  {
          //按钮类型，可选值为primary、ghost、dashed、text、info、success、warning、error或者不设置
          type:"primary",
          //按钮大小，可选值为large、small、default或者不设置
          size:"large",
          //按钮形状，可选值为circle或者不设置
          shape:undefined,
          //开启后，按钮的长度为 100%
          long:true,
          //设置button原生的type，可选值为button、submit、reset
          htmlType:"button",
          //设置按钮为禁用状态
          disabled:false,
          //设置按钮的图标类型
          icon:"ios-upload",
          //按钮文字提示
          innerText:"提交",
          //设置按钮为加载中状态
          loading:false
  }
  ```

  Modify form submission button rules


## $f.resetStatus

- **parameter**：`{object} props`

- **usage**：

  ```js
  $f.resetStatus({disabled:true})
  ```

- **Quick operation**:

  - `$f.resetBtn.loading(loading = true)` Set the reset button to enter the loading state
  - `$f.resetBtn.disabled(disabled = true)` Set reset button disabled state

- **props**：

  ```js
  {
          //按钮类型，可选值为primary、ghost、dashed、text、info、success、warning、error或者不设置
          type:"primary",
          //按钮大小，可选值为large、small、default或者不设置
          size:"large",
          //按钮形状，可选值为circle或者不设置
          shape:undefined,
          //开启后，按钮的长度为 100%
          long:true,
          //设置button原生的type，可选值为button、submit、reset
          htmlType:"button",
          //设置按钮为禁用状态
          disabled:false,
          //设置按钮的图标类型
          icon:"ios-upload",
          //按钮文字提示
          innerText:"提交",
          //设置按钮为加载中状态
          loading:false
  }
  ```

  Modify form reset button rules


## $f.submit

- **parameter**：`{function} onSubmit`

- **usage**：

  ```js
  $f.submit((formData)=>{
      //提交表单
  })
  ```

  Submit the form manually, if you pass the `onSubmit` parameter, it will no longer trigger `option.onSubmit`


## $f.options

- **parameter**：`{object} options`

- **usage**：

  ```js
  $f.options(({
      onSubmit:(formData)=>{
          //提交表单
      }
  })
  ```

  Update global configuration

- **参考**：[global configuration](/en/guide/global.html)



## $f.reload

- **parameter**：`{array} rules`

- **usage**：

  ```js
  $f.reload()
  ```

  Reload the form generator according to the new build rule. If you don't pass `rules`, it will be overloaded according to the current rule.


## $f.refresh

- **usage**：

  ```js
  $f.refresh()
  ```

  Re-render the form


## $f.sync

- **parameter**：`{string} field`

- **usage**：

  ```js
  $f.sync(field)
  ```

  Re-rendering the `field` component


## $f.destroy

- **usage**：

  ```js
  $f.destroy()
  ```

  Destroy form


## $f.set

- **parameter**：`{object} node`、`{string} key`、`value`

- **usage**：

  ```js
  $f.set(field.rule.col,'span',12)
  ```

  You can try this method if the page is not updated after modifying the rules of the component. The method uses the same method as `Vue.$set`


## $f.closeModal

- **usage**：

  ```js
  $f.closeModal()
  ```

  Close the popup of the frame component



