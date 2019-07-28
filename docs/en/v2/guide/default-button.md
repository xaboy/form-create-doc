# Modify default button

This article describes how to use the custom component button instead of the default button.

### Hide default button

First hide the default submit button and reset button by setting the global configuration
```js
{
   submitBtn: false,
   resetBtn: false
}
```


### Build a custom button component
>The example used in ElementUI

![default-button.png](/img/default-button.png)

```js
[
	{
		type: 'input',
		field: 'field-1',
		title: 'test',
		value: 'test submit',
		col: {
			span:6
		}

	},
	{
		type: 'el-button',
		on: {
			click: function(){
				//TODO submit Form
				$f.submit();
				//OR
				$f.resetFields();
			}
	    },
		col: {
			span:3,
			push: 1
		},
		children: ['submit']

	}
]
```