### Col Layout Rules

::: tip 

All the components support layout configuration rules. Detailed instructions are available at [Col props](http://v2.iviewui.com/components/grid#Col_props)

:::

#### Demo

Maker

>  Use maker to generate generators and set component layout rules

```js
// Generate an input component and set the component length to 50% via col rule
maker.input('col','text','').col({span:12,labelWidth:200,xs:24})
```

Json

>  Use json to set the layout rules

```js
{
    type:'input',
    title:'col',
    field:'text',
    value:'',
    col:{
        span:12,
        labelWidth:200,
        xs:24
    }
}
```



### Col props

| Property   | Description                                                  | Type             | Default |
| ---------- | ------------------------------------------------------------ | ---------------- | ------- |
| span       | Column span. Value can be integer from 0 to 24. When 0, it equals to `display:none` | Number \| String | -       |
| labelWidth | Set the `label` width of form field                          | Number           | 150     |
| order      | Grid order when using `flex` layout mode.                    | Number \| String | -       |
| offset     | Number of cells to the left of grid spacing. No cells can be inside the grid spacing. | Number \| String | -       |
| push       | Number of cells to move to the right                         | Number \| String | -       |
| pull       | Number of cells to move to the left                          | Number \| String | -       |
| class-name | Custom defined class's name                                  | String           | -       |
| xs         | `<768px` can be a span value or an object containing props   | Number \| Object | -       |
| sm         | `≥768px` can be a span value or an object containing props   | Number \| Object | -       |
| md         | `≥992px` can be a span value or an object containing props   | Number \| Object | -       |
| lg         | `≥1200px` can be a span value or an object containing props  | Number \| Object | -       |