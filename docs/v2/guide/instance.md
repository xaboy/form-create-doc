---
sidebarDepth: 3
---

# 实例方法

## 获取实例对象 $f



- 全局方法

  - $f = formCreate.create(rules)
  - $f = vm.\$formCreate(rules)

- 组件模式

  ```html
  <form-create ref="fc" v-model="fApi" :rule="rules"></form-create>
  ```
  - $f = vm.fApi
  - $f = vm.fc.$f



## 属性


### $f.rule

  当前表单的生成规则


### $f.config

  当前表单的全局配置


## 方法



### $f.fields

- **用法**：

  ```js
  $f.fields()
  ```

  获取表单所有字段名


### $f.formData

- **用法**：

  ```js
  formData = $f.formData()
  ```

  获取表单的键值对


### $f.getValue

- **参数**：`{string} field`

- **用法**：

  ```js
  field_value = $f.getValue(field)
  ```

获取指定字段的值



### $f.setValue

- **参数**：`{string|object} field`、`value`

- **用法**：

  ```js
  $f.setValue(field,value)
  ```
  ```js
  $f.setValue({
    field1:value1,
    field2:value2,
    field3:value3
  });
  ```

   批量设置字段的值,别名方法`changeValue`,`changeField`


### $f.removeField

- **参数**：`{string} [field|name]`

- **返回值**：`{object} rule`

- **用法**：

  ```js
  $f.removeField(field)
  ```

  删除指定字段


### $f.updateRule <Badge type="warn" text="0.0.5+"/>

- **参数**：
    - `{string} [field|name]`
    - `{object} rule`
    - `{bool} cover` 默认为深拷贝,等于 true 时为直接覆盖

- **返回值**：`{object} rule`

- **用法**：

  ```js
  $f.updateRule(field,{
    props:{
      disabled: true
    }
  })
  ```

  更新指定组件



### $f.updateRules <Badge type="warn" text="0.0.5+"/>

- **参数**：`{object} rules`

- **用法**：

  ```js
  $f.updateRule({
    field:{
      props:{
        disabled: true
      }
    }
  })
  ```

  批量更新组件


### $f.getRule <Badge type="warn" text="0.0.6+"/>

- **参数**：`{string} [field|name]`

- **用法**：

  ```js
  $f.getRule(field)
  ```

   获取指定组件生成规则

### $f.validate

- **参数**：`{function} callback`

- **用法**：

  ```js
  $f.validate((valid)=>{
    if(valid){
      //TODO 验证通过
    }else{
      //TODO 验证未通过
    }
     
  })
  ```

  表单验证


### $f.validateField

- **参数**：`{string} field`、`{function} callback`

- **用法**：

  ```js
  $f.validateField(field,(errMsg)=>{
      if(errMsg){
          //TODO 验证未通过
      }else{
          //TODO 验证通过
      }
  });
  ```
  表单验证指定字段


### $f.resetFields

- **用法**：

  ```js
  $f.resetFields()
  ```

  重置表单




### $f.destroy

- **用法**：

  ```js
  $f.destroy()
  ```

  销毁表单
  
  


### $f.prepend

- **参数**：`{object} rule`、`{stirng} [field|name]`、`{boolean} isChild`

- **用法**：

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
  }, 'goods-name', false);
  ```

  在`field`的字段之前插入指定表单元素,不传入`field`默认在第一个.如果`isChild`为 `true`,将会添加到`field`的子级


### $f.append

- **参数**：`{object} rule`、`{stirng} [field|name]`、`{bool} isChild`

- **用法**：

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
  }, 'goods-name', false);
  ```

  在`field`的字段之后插入指定表单元素,不传入`field`默认在最后一个.如果`isChild`为 `true`,将会添加到`field`的子级

  
  
### $f.submit

- **参数**：`{function} onSubmit`、`{function} fail`

- **用法**：

  ```js
  $f.submit((formData,api)=>{
      //提交表单
  },(api)=>{
      //验证未通过
  })
  ```

  手动提交表单,如果传入`onSubmit`参数,就不会再触发`option.onSubmit`


### $f.hidden

- **参数**：`{bool} hidden`、`{string|array} [field|name]`

- **用法**：

  ```js
  $f.hidden(true)
  ```
  ```js
  $f.hidden(true,field)
  ```
  ```js
  $f.hidden(true, [field1,field2,field3,name1,name2])
  ```

  隐藏或显示指定组件


### $f.hiddenStatus

- **参数**：`{string} field`

   获取组件显示状态


### $f.visibility

- **参数**：`{bool} visibility`、`{string|array} [field|name]`

- **用法**：

  ```js
  $f.visibility(true)
  ```
  ```js
  $f.visibility(true,field)
  ```
  ```js
  $f.visibility(true, [field1,field2,field3,name1,name2])
  ```
  隐藏或显示指定组件


### $f.visibilityStatus

- **参数**：`{string} field`

   获取组件显示状态

### $f.disabled

- **参数**：`{bool} disabled`、`{string|array} field`

- **用法**：

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

  禁用或取消指定组件


### $f.clearValidateState

- **参数**：`{string|array} field`

- **用法**：

  ```js
  $f.clearValidateState();
  ```

  ```js
  $f.clearValidateState(field);
  ```

  ```js
  $f.clearValidateState([field1,field2]);
  ```

  清除组件的验证信息


### $f.model

- **用法**：

  ```js
  model = $f.model()
  ```
  
  获取表单组件的生成规则,**组件定义`field`属性才可以获取到**



### $f.component

- **用法**：

  ```js
  component = $f.component()
  ```

  获取自定义组件生成规则,**组件定义`name`属性才可以获取到**


### $f.bind

- **用法**：

  ```js
  formData = $f.bind()
  ```

  获取双向数据绑定的表单键值对



### $f.submitBtnProps

- **参数**：`{object} props`

- **用法**：

  ```js
  $f.submitBtnProps({loading:true})
  ```

- **快捷操作**:

  - `$f.btn.loading(loading = true)` 设置提交按钮进入loading状态
  - `$f.btn.disabled(disabled = true)` 设置提交按钮禁用状态
  - `$f.btn.show(isShow = true)` 设置提交按钮显示状态

  修改表单提交按钮规则

### $f.resetBtnProps

- **参数**：`{object} props`

- **用法**：

  ```js
  $f.resetBtnProps({disabled:true})
  ```

- **快捷操作**:

  - `$f.resetBtn.loading(loading = true)` 设置重置按钮进入loading状态
  - `$f.resetBtn.disabled(disabled = true)` 设置重置按钮禁用状态
  - `$f.resetBtn.show(isShow = true)` 设置重置按钮显示状态

  修改表单重置按钮规则


### $f.closeModal

- **参数**：`{string} field`

- **用法**：

  ```js
  $f.closeModal(field)
  ```

  关闭frame组件的弹出框



### $f.set

- **参数**：`{object} node`、`{string} key`、`value`

- **用法**：

  ```js
  $f.set(field.rule.col,'span',12)
  ```

  如果修改组件的规则后页面没有更新时可以尝试使用该方法,该方法与`Vue.$set`相同



### $f.reload

- **参数**：`{Array} [rules]`

- **用法**：

  ```js
  $f.reload()
  ```

  按照新的生成规则重载表单生成器,如果不传入`rules`会按照当前规则重载



### $f.updateOptions

- **参数**：`{object} options`

- **用法**：

  ```js
  $f.updateOptions(({
      onSubmit:(formData)=>{
          //提交表单
      }
  })
  ```

  更新全局配置



### $f.onSubmit

- **参数**：`{Function} [onSubmit]`

- **用法**：

  ```js
  $f.onSubmit((formData)=>{
      //提交表单
  })
  ```
   设置表单提交的回调



### $f.sync

- **参数**：`{string} field/name`

- **用法**：

  ```js
  $f.sync(field)
  ```

  手动重新渲染指定组件



### $f.refresh

- **参数**：`{bool} [clear]`

- **用法**：

  ```js
  $f.refresh(true)
  ```

  重新渲染表单,`clear`为`true`时会清空所有组件的缓存




### $f.hideForm

- **参数**：`{bool} [isShow]`

- **用法**：

  ```js
  $f.hideForm(true)
  ```

  控制表单整体显示状态




### $f.method

- **参数**：
    - **`{string} field/name`**
    - **`{string} methodName`** 组件方法名称

- **返回值**：`Function`

- **用法**：

  ```js
  $f.method('input','focus')();
  ```

   调用组件的方法



### $f.toJson <Badge type="warn" text="0.0.4+"/>


- **返回值**：`json`

- **用法**：

  ```js
  const json = $f.toJson();
  ```

   将当前的生成规则转换为 json

### $f.trigger <Badge type="warn" text="1.0.3+"/>

- **参数**：
    - **`{string} field/name`**
    - **`{string} eventName`** 组件方法名称
    - **`... args`** 事件参数

- **用法**：

  ```js
  $f.toJson('input','on-change','new value');
  ```

   手动触发组件的事件

### $f.el <Badge type="warn" text="1.0.3+"/>

- **参数**：
    - **`{string} field/name`**

- **返回值**：`vm|Element`

- **用法**：

  ```js
  $f.el('input');
  ```

   获取组件的的`vm`或者`dom`元素

### $f.on <Badge type="warn" text="1.0.2+"/>


- **参数**：
    - **`{string} emitName`**  生成规则`emit`事件名称
    - **`{Function} callback`** 回调方法

- **用法**：

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

   监听当前实例上的自定义事件



### $f.once <Badge type="warn" text="1.0.2+"/>


- **参数**：
    - **`{string} emitName`**  生成规则`emit`事件名称
    - **`{Function} callback`** 回调方法

- **用法**：

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

   监听一个自定义事件，但是只触发一次，在第一次触发之后移除监听器



### $f.off <Badge type="warn" text="1.0.2+"/>


- **参数**：
    - **`{string | Array} emitName`**  生成规则`emit`事件名称
    - **`{Function} [callback]`** 回调方法

- **用法**：

   移除自定义事件监听器。

   - 如果没有提供参数，则移除所有的事件监听器；

   - 如果只提供了事件，则移除该事件所有的监听器；

   - 如果同时提供了事件与回调，则只移除这个回调的监听器。