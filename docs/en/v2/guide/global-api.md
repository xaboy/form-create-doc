# Global API

## create

- **Type**:`Function`

- **Parameter**:

  - `Array` rules
  - `Object` options

- **return value**:
  - `Object` $f

- **Description**: Generate form

- **Usage**:
  
  ```js
  const $f = formCreate.create(rules,options);
  ```



## init

- **Type**:`Function`

- **Parameter**:
  - `Array` rules
  - `Object` options

- **return value**:
  - `Function` mount mount form
  - `Function` remove remove form
  - `Function` destroy destroys the form
  - `Object` $f

- **Description**: Create a form constructor

- **Usage**:
  
  ```js
  const {$f,mount,remove,destroy} = formCreate.init(rules,options);
  //mount the form to #app
  mount(document.getElementById('app'));
  //Destroy the form
  remove();
  ```

## component

- **Type**:`Function`

- **Parameter**:
  - `string` id
  - `Object` component


- **Description**: Mount custom components in form-create

- **Usage**:
 
  ```js
  //mount component
  formCreate.component('test',component);
  //get the component
  const component = formCreate.component('test');
  ```


## createParser

- **Type**:`Function`

- **return value**:
  - `Parser` parser


- **Description**: Create a new component parser

- **Usage**:
  
  ```js
  const Parser = formCreate.createParser();
  ```


## setParser

- **Type**:`Function`

- **Parameter**:
  - `string` componentName
  - `Parser` parser


- **Description**: Bind a component parser

- **Usage**:
  
  ```js
  const Parser = formCreate.createParser();
  parser.prototype.toFormValue = (value)=>parseFloat(value)||0;
  formCreate.setParser('inputNumber',Parser);
  ```


## maker

- **type**: `Object`

- **Description**: [Component Builder] (/v2/guide/maker-function.html)

- **Usage**:
  
  ```js
  rule = maker.input('testTitle','testField','testValue');
  ```





## $form

- **Type**:`Function`

- **Description**: Bind a component parser

- **Usage**:
  
  ```js
  $formCreate = formCreate.$form();
  //Local mount formCreate
  new vue({
      components:{
        'form-create': $formCreate
      }
  });
  //Global mount
  Vue.component('form-create',$formCreate);
  ```

## parseJson <Badge type="warn" text="0.0.4+"/>

- **Type**:`Function`

- **Description**: Convert json to build rule

- **Usage**:

   ```js
    const json = $f.toJson();
    const rule = formCreate.parseJson(json);
   ```

## vm.$formCreate

- **Type**:`Function`

- **Parameter**:
  - `Array` rules
  - `Object` options

- **return value**:
  - `Object` $f

- **Attributes**:
  - `Function` component
  - `Function` createParser
  - `Function` setParser
  - `Function` $form
  - `Function` parseJson
  - `Object` maker

- **Description**: Generate form

- **Usage**:
  
  ```js
  new vue({
    mounted(){
      Const $f = this.$formCreate(rules,options);
    }
  })
  ```