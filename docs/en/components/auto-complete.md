### AutoComplete

#### [demo](http://jsrun.net/TnhKp/edit)

#### maker

```js
$formCreate.maker.auto('自动完成', 'auto', 'xaboy').props({
	data: [
		'xaboy',
		'xian',
		'github'
	],
	filterMethod: (value, option) => {
		return option.toUpperCase().indexOf(value.toUpperCase()) !== -1
	}
})
```

#### json

```json
{
     type:"autoComplete",
     field:"auto",
     title:"自动完成",
     value:'xaboy',
     props:{
         "data": [
             'xaboy',
             'xian',
             'github'
         ],
         "clearable": false,
         "disabled": false,
         "placeholder": "",
         "size": undefined,
         "icon":undefined,
         "filterMethod":false,
          "placement":undefined,
          "transfer":false,
     },
     validate:[]
}
```

#### Parameter Description

reference:[iview2.x](http://v2.iviewui.com/components/auto-complete#API) | [iview3.x](https://www.iviewui.com/components/auto-complete#API)

##### AutoComplete props

| Property      | Description                                                  | Type                | Default |
| ------------- | ------------------------------------------------------------ | ------------------- | ------- |
| data          | Data source for autocomplete.                                | Array               | []      |
| clearable     | Set AutoComplete to clear option.                            | Boolean             | false   |
| disabled      | Whether disabled select.                                     | Boolean             | false   |
| placeholder   | Placeholder of input.                                        | String              | -       |
| size          | The size of Input. Optional value: `large`, `small`, `default` or leave empty. | String              | -       |
| icon          | Icon at the end of Input.                                    | String              | -       |
| filterMethod | Filter options by input, if function, filter options against it. The function will receive two arguments, `value` and `option`, if the function returns true, the option will be included in the filtered set; Otherwise, it will be excluded. | Function \| Boolean | false   |
| placement     | The direction of pop-ups. The value could be `bottom` or `top`, supports automatic recognition after 2.12.0 | String              | bottom  |
| transfer      | Whether to append the layer in body. When used in Tabs or a fixed Table column, suggests adding this property, it will not be affected by the parent style, resulting in better results. | Boolean             | false   |

##### AutoComplete events

| Event Name | Description                                                  | Return Value |
| ---------- | ------------------------------------------------------------ | ------------ |
| change     | Called when select an option or input value change, or value of input is changed. | value        |
| select     | Called when a option is selected. param is option's value and option instance. | value        |
| search     | Called when searching items.                                 | query        |
| focus      | Called when focus.                                           | event        |
| blur       | Called when blur.                                            | event        |



