---
sidebarDepth: 3
---

# API

## 获取API`$f`



- 全局方法

    ```js
    $f = formCreate.create(rules)
    $f = vm.$formCreate(rules)
    ```

- 组件模式

  ```html
  <form-create v-model="fApi"></form-create>
  ```
  ```js
  new Vue({
    data(){
      return {
          fApi:{}
      }
    }
    })
  ```


## 属性


### 表单的生成规则

- **类型**: `array`

- **用法**：

```js
$f.rule
```


### 表单的全局配置

- **类型**: `object`

- **用法**：

```js
$f.config
```


## 字段操作

### 获取表单所有字段名

- **返回值**: `string[]`

- **用法**：

  ```js
  const fields = $f.fields();
  ```

### 获取表单的键值对

- **返回值**: `object`

- **用法**：

  ```js
  const formData = $f.formData()
  ```


### 获取指定字段的值

- **参数**：`{string} field`

- **用法**：

  ```js
  const value = $f.getValue(field)
  ```

  获取 `field` 组件的值

### 设置字段的值

- **设置指定字段的值**
    - **参数**：
        - `{string} field`
        - `{any} value`
    
    - **用法**：
    
      ```js
      $f.setValue(field,value)
      ```
  修改`field`组件的值为`value`
  
- **批量设置**
    - **参数**：
        - `{object} formData`
    
    - **用法**：
    
      ```js
      $f.setValue({
        field1:value1,
        field2:value2,
        field3:value3
      });
      ```
  修改`field1,field2,field3`组件的值分别为`value1,value2,value3`
  
  **别名方法`changeValue`,`changeField`**


### 删除指定字段

- **参数**：`{string} [field|name]`

- **返回值**：`{object} rule`

- **用法**：

  ```js
  $f.removeField(field)
  ```
  删除`field`字段


### 获取双向数据绑定的表单键值对

- **返回值**：`{object}`

- **用法**：

  ```js
  const formData = $f.bind()
  ```



## 组件操作

### 更新组件规则

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

### 批量更新组件规则

- **参数**：
    - `{object} rules`
    - `{bool} cover` 默认为深拷贝,等于 true 时为直接覆盖

- **用法**：

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


### 获取指定组件生成规则

- **参数**：`{string} [field|name]`

- **返回值**：`{object}`

- **用法**：

  ```js
  const rule = $f.getRule(field)
  ```

### 获取表单组件的生成规则

- **返回值**：`{object}`

- **用法**：

  ```js
  const model = $f.model()
  ```
  
  获取表单组件的生成规则,**组件定义`field`属性才可以获取到**



### 获取自定义组件生成规则

- **返回值**：`{object}`

- **用法**：

  ```js
  const component = $f.component()
  ```

  获取自定义组件生成规则,**组件定义`name`属性才可以获取到**


### 调用生成组件的方法

- **参数**：
    - **`{string} field/name`**
    - **`{string} methodName`** 组件方法名称

- **返回值**：`Function`

- **用法**：

  ```js
  const val = $f.method('input','focus')();
  ```

### 手动触发组件的事件

- **参数**：
    - **`{string} field/name`**
    - **`{string} eventName`** 组件方法名称
    - **`... args`** 事件参数

- **用法**：

  ```js
  $f.trigger('input','on-change','new value');
  ```

### 获取组件的`vm/dom`元素

- **参数**：
    - **`{string} field/name`**

- **返回值**：`Vue|Element`

- **用法**：

  ```js
  $f.el(field);
  ```

## 表单操作

### 表单验证

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


### 验证指定字段

- **参数**：
    - `{string} field`
    - `{function} callback`

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


### 插入组件

- **参数**：
    - `{object} rule`
    - `{stirng} [field|name]`
    - `{boolean} isChild` 是否添加到 `[field|name]` 组件的子级

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


### 追加组件

- **参数**：
    - `{object} rule`
    - `{stirng} [field|name]`
    - `{bool} isChild` 是否添加到 `[field|name]` 组件的子级

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

  
  
### 手动提交表单

- **参数**：
    - `{function} onSubmit`
    - `{function} fail`

- **用法**：

  ```js
  $f.submit((formData,api)=>{
      //提交表单
  },(api)=>{
      //验证未通过
  })
  ```

  手动提交表单,如果传入`onSubmit`参数,就不会再触发`option.onSubmit`


### 隐藏或显示指定组件

- **参数**：
    - `{bool} hidden`
    - `{string|array} [field|name]`

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

### 获取组件显示状态

- **参数**：`{string} [field|name]`

- **返回值**：`{bool}`

- **用法**：
```js
const hiddenStatus = $f.hiddenStatus();
```

### 禁用或取消指定组件

- **参数**：
    - `{bool} disabled`
    - `{string|array} field`

- **用法**：

  ```js
  $f.disabled(true)
  ```
  ```js
  $f.disabled(true, field)
  ```
  ```js
  $f.disabled(true, [field1,field2,field3])
  ```

### 清除组件的验证信息

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

### 获取表单中的值是否发生变化状态

- **返回值**：`{bool}`

- **用法**：

  ```js
  const status = $f.changeStatus()
  ```


### 清除表单的值是否发生变化状态

- **用法**：

  ```js
  $f.clearChangeStatus()
  ```

### 修改表单提交按钮规则

- **参数**：`{object} props`

- **用法**：

  ```js
  $f.submitBtnProps({loading:true})
  ```

- **快捷操作**:

  - `$f.btn.loading(loading = true)` 设置提交按钮进入loading状态
  - `$f.btn.disabled(disabled = true)` 设置提交按钮禁用状态
  - `$f.btn.show(isShow = true)` 设置提交按钮显示状态

### 修改表单重置按钮规则

- **参数**：`{object} props`

- **用法**：

  ```js
  $f.resetBtnProps({disabled:true})
  ```

- **快捷操作**:

  - `$f.resetBtn.loading(loading = true)` 设置重置按钮进入loading状态
  - `$f.resetBtn.disabled(disabled = true)` 设置重置按钮禁用状态
  - `$f.resetBtn.show(isShow = true)` 设置重置按钮显示状态

### 关闭frame组件的弹出框

- **参数**：`{string} [field|name]`

- **用法**：

  ```js
  $f.closeModal(field)
  ```

### 更新全局配置

- **参数**：`{object} options`

- **用法**：

  ```js
  $f.updateOptions(({
      onSubmit:(formData)=>{
          //提交表单
      }
  })
  ```

### 修改表单提交的回调

- **参数**：`{Function} [onSubmit]`

- **用法**：

  ```js
  $f.onSubmit((formData)=>{
      //提交表单
  })
  ```


### 控制表单整体显示状态

- **参数**：`{bool} isShow`

- **用法**：

  ```js
  $f.hideForm(true)
  ```

### 将生成规则转换为 json

- **返回值**：`{string}`

- **用法**：

  ```js
  const json = $f.toJson();
  ```


### 手动重新渲染指定组件

- **参数**：`{string} [field/name]`

- **用法**：

  ```js
  $f.sync(field)
  ```

### 重载表单

- **参数**：`{Array} [rules]`

- **用法**：

  ```js
  $f.reload(newRule)
  ```

  按照新的生成规则重载表单生成器,如果不传入`rules`会按照当前规则重载



### 重新渲染表单

- **参数**：`{bool} [clear]`

- **用法**：

  ```js
  $f.refresh(true)
  ```

  重新渲染表单,`clear`为`true`时会清空所有组件的缓存


### 重置表单

- **用法**：

  ```js
  $f.resetFields()
  ```


### 销毁表单

- **用法**：

  ```js
  $f.destroy()
  ```

### 监听表单事件


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


### 监听表单事件，只触发一次


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



### 移除表单事件监听器


- **参数**：
    - **`{string | Array} emitName`**  生成规则`emit`事件名称
    - **`{Function} [callback]`** 回调方法

- **用法**：

   移除自定义事件监听器。

   - 如果没有提供参数，则移除所有的事件监听器；

   - 如果只提供了事件，则移除该事件所有的监听器；

   - 如果同时提供了事件与回调，则只移除这个回调的监听器。
   
### $f.set
   
   - **参数**：
        - `{object} node`
        - `{string} key`
        - `{any} value`
   
   - **用法**：
   
     ```js
     $f.set(field.rule.col,'span',12)
     ```
   
     如果修改组件的规则后页面没有更新时可以尝试使用该方法,该方法与`Vue.$set`相同
   
