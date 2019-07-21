# Slot

For example, the `i-input` component is prefixed and suffixed with `prefix` and `suffix` [Input](https://iviewui.com/components/input#QZHHZTB)

```js
{
     type: 'input',
     field: 'test',
     title: 'test',
     value: '',
     children: [
         {
             type: 'i-con',
             props: {
                 type: 'ios-contact'
             },
             slot: 'prefix' //the name of the front slot
         },
         {
             type: 'i-con',
             props: {
                 type: 'ios-search'
             },
             slot: 'suffix' //the name of the rear slot
         },
     ]
}