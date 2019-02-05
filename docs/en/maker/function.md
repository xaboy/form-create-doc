---
sidebarDepth: 3
---

# Component generator

**The maker component generator is a helper method for generating component rules, which can quickly generate corresponding component rules through chain operations.**



::: tip Get maker generator

Browser

`window.formCreate.maker`

NodeJs

`import { maker } from 'form-create'`

:::

[Maker generator configuration item description](/en/guide/maker.html)

## Hidden

#### maker.hidden

- **parameter**：`{string} field`、`{string|number} value`

- **usage**：

  ```js
  maker.hidden('field','value')
  ```

  Generate a hidden component

- **reference**：[hidden](/en/components/hidden.html#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)



## Input

#### maker.input

- **parameter**：`{string} field`、`{string} title`、`{string} value`、`{object} props`

- **usage**：

  ```js
  maker.input('field','title','value',{diabled:true})
  ```

  Generate an input component, **type defaults to text**

- **reference**：[input](/en/components/input.html#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)



#### maker.text

- **parameter**：`{string} field`、`{string} title`、`{string} value`、`{object} props`

- **usage**：

  ```js
  maker.text('field','title','value',{diabled:true})
  ```

  Generate an input component, **type is text**





#### maker.url

- **parameter**：`{string} field`、`{string} title`、`{string} value`、`{object} props`

- **usage**：

  ```js
  maker.url('field','title','value',{diabled:true})
  ```

  Generate an input component, **type is url**



#### maker.idate

- **parameter**：`{string} field`、`{string} title`、`{string} value`、`{object} props`

- **usage**：

  ```js
  maker.idate('field','title','value',{diabled:true})
  ```

  Generate an input component, **type is date**





#### maker.password

- **parameter**：`{string} field`、`{string} title`、`{string} value`、`{object} props`

- **usage**：

  ```js
  maker.password('field','title','value',{diabled:true})
  ```

  Generate an input component, **type is password**



## InputNumber

#### maker.inputNumber

- **parameter**：`{string} field`、`{string} title`、`{number} value`、`{object} props`

- **usage**：

  ```js
  maker.inputNumber('field','title','value',{diabled:true})
  ```

  Generate an inputNumber component, **`maker.number` is an alias for this method**

- **reference**：[InputNumber](/en/components/input-number.html#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)





## AutoComplete

#### maker.autoComplete

- **parameter**：`{string} field`、`{string} title`、`{string} value`、`{object} props`

- **usage**：

  ```js
  maker.autoComplete('field','title','xaboy',{data:['xaboy','github','xian']})
  ```

  Generate an autoComplete component, **`maker.auto` is an alias for this method**

- **reference**：[autoComplete](/en/components/auto-complete.html#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)





## Radio

#### maker.radio

- **parameter**：`{string} field`、`{string} title`、`{string|number} value`、`{object} props`

- **usage**：

  ```js
  maker.radio('field','title',1)
      .options([{value:1,label:'好用'},{value:2,label:'不好用',diabled:true}])
  ```

  Generate a radio component

- **reference**：[Radio](/en/components/radio.html#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)







## Checkbox

#### maker.checkbox

- **parameter**：`{string} field`、`{string} title`、`{array} value`、`{object} props`

- **usage**：

  ```js
  maker.checkbox('field','title',[1,2])
      .options([{value:1,label:'高效'},{value:2,label:'简单'}])
  ```

  Generate a checkbox component

- **reference**：[checkbox](/en/components/checkbox.html#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)









## Select

#### maker.select

- **parameter**：`{string} field`、`{string} title`、`{string|number|array} value`、`{object} props`

- **usage**：

  ```js
  maker.select('field','title',1)
      .options([{value:1,label:'高效'},{value:2,label:'简单'}])
  ```

  Generate a select component, `props.multiple` defaults to `false`

- **reference**：[select](/en/components/select.html#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)



#### maker.selectOne

- **parameter**：`{string} field`、`{string} title`、`{string|number} value`、`{object} props`

- **usage**：

  ```js
  maker.selectOne('field','title',1)
      .options([{value:1,label:'高效'},{value:2,label:'简单'}])
  ```

  Generate a select component, `props.multiple` is `false` which is the **selection drop-down selection box**



#### maker.selectMultiple

- **parameter**：`{string} field`、`{string} title`、`{array} value`、`{object} props`

- **usage**：

  ```js
  maker.selectMultiple('field','title',[1,2])
      .options([{value:1,label:'高效'},{value:2,label:'简单'}])
  ```

  Generate a select component, `props.multiple` is ` true` which is **multi-selectable drop-down selection box**





## Switch

#### maker.switch

- **parameter**：`{string} field`、`{string} title`、`{string|number} value`、`{object} props`

- **usage**：

  ```js
  maker.switch('field','title',1,{trueValue:1,falseValue:0})
  ```

  Generate a switch component

- **reference**：[switch](/en/components/switch.html#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)





## Cascader

#### maker.cascader

- **parameter**：`{string} field`、`{string} title`、`{array} value`、`{object} props`

- **usage**：

  ```js
  maker.cascader('field','title',[],{data:[]})
  ```

  Generate a cascader component

- **reference**：[cascader](/en/components/cascader.html#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)、[Data structure](https://github.com/xaboy/form-create/blob/master/district/province_city.js)







## DatePicker

#### maker.datePicker

- **parameter**：`{string} field`、`{string} title`、`{array|string|date} value`、`{object} props`

- **usage**：

  ```js
  maker.datePicker('field','title','2018-12-16')
  ```

  Generate a datePicker component, **`type` defaults to `date`**

- **reference**：[datePicker](/en/components/date-picker.html#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)



#### maker.date

- **parameter**：`{string} field`、`{string} title`、`{date|string} value`、`{object} props`

- **usage**：

  ```js
  maker.date('field','title','2018-12-16')
  ```

  Generate a datePicker component, **`type` is `date`, select date****



#### maker.dateRange

- **parameter**：`{string} field`、`{string} title`、`{array} value`、`{object} props`

- **usage**：

  ```js
  maker.dateRange('field','title',['2018-11-30','2018-12-16'])
  ```

  Generate a datePicker component, **`type` is `dateRange`, select the date range**





#### maker.dateTime

- **parameter**：`{string} field`、`{string} title`、`{date|string} value`、`{object} props`

- **usage**：

  ```js
  maker.dateTime('field','title','2018-12-16 23:23:23')
  ```

  Generate a datePicker component, **`type` is `dateTime`, select date + time**





#### maker.dateTimeRange

- **parameter**：`{string} field`、`{string} title`、`{array} value`、`{object} props`

- **usage**：

  ```js
  maker.dateTimeRange('field','title',['2018-11-30 23:23:23','2018-12-16 23:23:23'])
  ```

  Generate a datePicker component, **`type` is `dateTimeRange`, select date + time interval**





#### maker.year

- **parameter**：`{string} field`、`{string} title`、`{string} value`、`{object} props`

- **usage**：

  ```js
  maker.year('field','title','2018-12-16')
  ```

  Generate a datePicker component, **`type` is `year`, select the year **





#### maker.month

- **parameter**：`{string} field`、`{string} title`、`{string} value`、`{object} props`

- **usage**：

  ```js
  maker.dateRange('field','title','2018-12-16')
  ```

  Generate a datePicker component, **`type` is `month`, select month **







## TimePicker

#### maker.timePicker

- **parameter**：`{string} field`、`{string} title`、`{array|string|date} value`、`{object} props`

- **usage**：

  ```js
  maker.timePicker('field','title','23:23:23')
  ```

  Generate a timePicker component, **`type` defaults to `time`**

- **reference**：[timePicker](/en/components/time-picker.html#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)



#### maker.time

- **parameter**：`{string} field`、`{string} title`、`{string|date} value`、`{object} props`

- **usage**：

  ```js
  maker.timePicker('field','title','23:23:23')
  ```

  Generate a timePicker component, **`type` is `time`, select time**



#### maker.timeRang

- **parameter**：`{string} field`、`{string} title`、`{array} value`、`{object} props`

- **usage**：

  ```js
  maker.timePicker('field','title',['23:23:23','23:59:59'])
  ```

  Generate a timePicker component, **`type` defaults to `time`, select time interval**





## ColorPicker

#### maker.colorPicker

- **parameter**：`{string} field`、`{string} title`、`{string} value`、`{object} props`

- **usage**：

  ```js
  maker.colorPicker('field','title','#FF7271')
  ```

  Generate a colorPicker component, **`maker.color` is an alias for this method**

- **reference**：[colorPicker](/en/components/color-picker.html#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)





## Upload

#### maker.upload

- **parameter**：`{string} field`、`{string} title`、`{string|array} value`、`{object} props`

- **usage**：

  ```js
  maker.upload('field','title','image1.png',{action:'upload.php',maxLength:1})
  ```

  Generate an upload component, **`type` defaults to `field`**

- **reference**：[upload](/en/components/upload.html#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)



#### maker.uploadImage <Badge text="1.5.1+"/>

- **parameter**：`{string} field`、`{string} title`、`{array} value`、`{object} props`

- **usage**：

  ```js
  maker.uploadImage('field','title',['image1.png'.'image2.png'],{action:'upload.php'})
  ```

  Generate an upload component, **`type` is `image`, `maker.image` is an alias for this method**



#### maker.uploadFile <Badge text="1.5.1+"/>

- **parameter**：`{string} field`、`{string} title`、`{array} value`、`{object} props`

- **usage**：

  ```js
  maker.uploadFile('field','title',['image1.png'.'image2.png'],{action:'upload.php'})
  ```

  Generate an upload component, **`type` is `file`, `maker.file` is an alias for this method**



#### maker.uploadImageOne <Badge text="1.5.1+"/>

- **parameter**：`{string} field`、`{string} title`、`{string|array} value`、`{object} props`

- **usage**：

  ```js
  maker.uploadImageOne('field','title','image1.png',{action:'upload.php'})
  ```

  Generate an upload component, **`type` is `image` and `maxLength` is `1`. Only one image can be uploaded**

  **`maker.imageOne` is an alias for this method**





#### maker.uploadFileOne <Badge text="1.5.1+"/>

- **parameter**：`{string} field`、`{string} title`、`{string} value`、`{object} props`

- **usage**：

  ```js
  maker.uploadFileOne('field','title','image1.png',{action:'upload.php'})
  ```

  Generate an upload component, **`type` is `file` and `maxLength` is `1`. Only one file can be uploaded**

  **`maker.fileOne` is an alias for this method**





## Rate

#### maker.rate

- **parameter**：`{string} field`、`{string} title`、`{number} value`、`{object} props`

- **usage**：

  ```js
  maker.rate('field','title',10)
  ```

  Generate a rate component

- **reference**：[rate](/en/components/rate.html#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)





## Slider

#### maker.slider

- **parameter**：`{string} field`、`{string} title`、`{number} value`、`{object} props`

- **usage**：

  ```js
  maker.slider('field','title',10)
  ```

  Generate a slider component, **`props.range` defaults to `false`**

- **reference**：[slider](/en/components/slider.html#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)



#### maker.sliderRange

- **parameter**：`{string} field`、`{string} title`、`{array} value`、`{object} props`

- **usage**：

  ```js
  maker.sliderRange('field','title',[10,100])
  ```

  Generate a slider component, **`props.range` is `true`, select interval**





## Tree

#### maker.tree

- **parameter**：`{string} field`、`{string} title`、`{array} value`、`{object} props`

- **usage**：

  ```js
  maker.tree('field','title',[12,13],{data:[]})
  ```

  Generate a tree component

- **reference**：[tree](/en/components/tree.html#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)

- **Related methods**：

  - `maker.treeSelected`
  - `maker.treechecked`







## Frame

#### maker.frame

- **parameter**：`{string} field`、`{string} title`、`{array|string} value`、`{object} props`

- **usage**：

  ```js
  maker.tree('field','title',10)
  ```

  Generate a frame component

- **reference**：[frame](/en/components/frame.html#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E) 、[data structure](/en/components/tree.html#data%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84)

- **Related methods**：

  - `maker.frameInputs`
  - `maker.frameInputOne`
  - `maker.frameFiles`
  - `maker.frameFileOne`
  - `maker.frameImages`
  - `maker.frameImageOne`

