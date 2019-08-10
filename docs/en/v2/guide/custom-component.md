# Custom component

Form-create supports generating any vue component inside the form

::: tip Reminder

- Only need to define the `name` attribute when you need to get the generation rules for this component via the `$f.component()` method.
- When you need to have custom components and built-in components have the same functionality, you can convert them to form components

:::


## Generate components by tag

Generate custom components by creating a virtual DOM

### JSON generation
```js
{
    type: 'i-button',
    name: 'btn',
    props:{
        type: 'primary',
        field: 'btn',
        loading: true
    },
    children:['Loading']
  }
```

### Maker generation

#### maker.create

- **Parameter**:
  - `{string} tab` component name/tag name
  - `{string} field`
  - `{string} title`

- **Usage**:

  ```js
  formCreate.maker.create('i-button', 'btn', 'custom button')
  ```

#### Generation

```js
formCreate.maker.create('i-button').props({
    type: 'primary',
    field: 'btn'
    loading: true
  }).children(['Loading']).name('btn');
```


#### Modify

**Get the component generation rules and modify them by `$f.component()` method**

```js
$f.component().btn.props.loading = false;
```

#### Example

![create-demo](/img/create-demo.jpg)

```js
let rule = [
  {
    type: 'row',
    children:[
      {
        type: 'i-col',
        props:{
          span:12
        },
        children:[
          formCreate.maker.input('commodity name', 'goods_name', 'iphone'),
          formCreate.maker.number('Product plus one', 'goods_price', 8688)
        ]
      },
      {
        type: 'i-col',
        props:{
          span:12
        },
        children:[
          formCreate.maker.dateTime('creation time', 'create_at'),
          formCreate.maker.radio('Do you want ','is_show').options([
            {value:1,label:'Show '},
            {value:0,label:'Do not display'}
          ])
        ]
      }
    ]
  }
]
```



## Generating components from templates

Generate custom components by **template**


### JSON generation
```js
{
    type: 'template',
    name:'btn'
    template:'<i-button :loading="loading">{{text}}<i-button>',
    vm: new Vue({
      data:{
        loading: true,
        text: 'Loading'
      }
    })
  }
```


### Maker generation

- **Parameter**:
  - `{string} template`
  - `{Vue} vm`
  - `{string} field = undefined`
  - `{string} title = undefined`

- **Usage**:

  ```js
  formCreate.maker.template('<i-button></i-button>', new Vue, 'btn', 'custom button')
  ```

#### maker.template

```js
formCreate.maker.template('<i-button :loading="loading">{{text}}</i-button>',new Vue({
    data:{
      loading: true,
      text: 'Loading...'
    }
})).name('btn')
```

#### Modify

The internal values ​​of the `vm` component can be dynamically modified in two ways.

**Get the `vm` of the custom component via `rule` and modify it**

```js
rule.vm.text = 'Load completed';
rule.vm.loading = false;
```

**Get `vm` of custom component and modify it by `$f.component()` method**

```js
$f.component().btn.vm.text = 'Load completed';
$f.component().btn.vm.loading = false;
```
> If the modified component is not updated, force a refresh via `$.sync` or `$f.refresh`


## Form component

> ** Components that implement `v-model` can be called form components**

After converting to a form component, you can modify the component state by `$f.formData`,`$f.getValue`,`$f.setValue`,`$f.disabled`, etc.


### Predefined
**Define the following properties and events to achieve the same effect as the built-in components. Try it out**

**props**

Receive properties via `props` inside a custom component

- the value of the `value` form
- Disabled state of `disabled` component


E.g:
```js
vm = Vue({
  props:{
   value:String,
   disabled:Boolean
  }
})
```

**input event**

Update the internal values ​​of the component with the `input` event

When the component value changes, the value is updated via the input event. For example:
```js
vm.$emit('input',newValue);
```




### Mounting custom components

The custom component to be generated must be mounted to the global via the `vue.component` method, or mounted via the `formCreate.component` method.

E.g:

```js
formCreate.component('TestComponent',component);
```


### Generate

**Form component must define `field` attribute**

**JSON**
```js
{
    type: 'TestComponent',
    value: 'test',
    field: 'testField',
    title: 'custom component'
}
```

**Maker**

```js
formCreate.maker.create('TestComponent','testField', 'custom component').value('test')
```

Now this custom component can be manipulated just like the built-in components.


## example

Custom counter button component to get the number of button clicks. The function of this component is the same as the built-in component

```js
formCreate.maker.template('<i-button @click="onClick" long :disabled="disabled">counter-{{num}}</i-button>', new Vue({
  data: function () {
    return {
        num: this.value,
    }
  },
  props:{
    //Predefined
    disabled:Boolean,
    value:Number,
  },
  watch:{
    value(n){
        this.num = n;
    }
  },
  methods: {
    onClick: function () {
        this.num++;
        // Update the value inside the component
        this.$emit('input',this.num);
    },
  },
}), 'tmp', 'custom title').value(100).props('disabled',false)
```