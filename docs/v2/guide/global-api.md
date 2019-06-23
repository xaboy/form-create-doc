# 全局 Api

## create

- **类型**：`Function`

- **参数**：
  - `Array` rules
  - `Object` options

- **返回值**：
  - `Object` $f

- **说明**：生成表单

- **用法**：
  
  ```js
  const $f = formCreate.create(rules,options); 
  ```



## init

- **类型**：`Function`

- **参数**：
  - `Array` rules
  - `Object` options

- **返回值**：
  - `Function` mount 挂载表单
  - `Function` remove 移除表单
  - `Function` destroy 销毁表单
  - `Object` $f

- **说明**：创建一个表单构造器

- **用法**：
  
  ```js
  const {$f,mount,remove,destroy} = formCreate.init(rules,options); 

  //挂载表单到#app
  mount(document.getElementById('app'));
  //销毁表单
  remove();
  ```

## component

- **类型**：`Function`

- **参数**：
  - `string` id
  - `Object` component


- **说明**：在 form-create 中挂载自定义组件

- **用法**：
  
  ```js
  //挂载组件
  formCreate.component('test',component);
  //获取组件
  const component = formCreate.component('test');
  ```


## createParser

- **类型**：`Function`

- **返回值**：
  - `Parser` parser


- **说明**：创建一个新的组件解析器

- **用法**：
  
  ```js
  const Parser = formCreate.createParser();
  ```


## setParser

- **类型**：`Function`

- **参数**：
  - `string` componentName
  - `Parser` parser


- **说明**：绑定一个组件解析器

- **用法**：
  
  ```js
  const Parser = formCreate.createParser();
  Parser.prototype.toFormValue = (value)=>parseFloat(value)||0;
  
  formCreate.setParser('inputNumber',Parser);
  ```


## maker

- **类型**：`Object`

- **说明**：[组件生成器](/v2/guide/maker-function.html)

- **用法**：
  
  ```js
  rule = maker.input('testTitle','testField','testValue');
  ```





## $form

- **类型**：`Function`

- **说明**：绑定一个组件解析器

- **用法**：
  
  ```js
  $formCreate = formCreate.$form();

  //局部挂载 formCreate
  new Vue({
      components:{
        'form-create':$formCreate
      }
  });

  //全局挂载
  Vue.component('form-create',$formCreate);

  ```

## vm.$formCreate

- **类型**：`Function`

- **参数**：
  - `Array` rules
  - `Object` options

- **返回值**：
  - `Object` $f

- **属性**：
  - `Function` component
  - `Function` createParser
  - `Function` setParser
  - `Function` $form
  - `Object` maker

- **说明**：生成表单

- **用法**：
  
  ```js
  new Vue({
    mounted(){
      const $f = this.$formCreate(rules,options); 
    }
  })
  ```



