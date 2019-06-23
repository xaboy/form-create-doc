# 组件生成器

### Hidden

#### maker.hidden

- **参数**：`{string} field`、`{string|number} value`

- **用法**：

  ```js
  maker.hidden('field','value')
  ```

  生成一个 hidden 组件



## Input

#### maker.input

- **参数**：`{string} field`、`{string} title`、`{string} value`、`{object} props`

- **用法**：

  ```js
  maker.input('field','title','value',{disabled:true})
  ```

  生成一个 input 组件,**type 默认为 text**



#### maker.text

- **参数**：`{string} field`、`{string} title`、`{string} value`、`{object} props`

- **用法**：

  ```js
  maker.text('field','title','value',{disabled:true})
  ```

  生成一个 input 组件,**type 为 text**





#### maker.url

- **参数**：`{string} field`、`{string} title`、`{string} value`、`{object} props`

- **用法**：

  ```js
  maker.url('field','title','value',{disabled:true})
  ```

  生成一个 input 组件,**type 为 url**



#### maker.idate

- **参数**：`{string} field`、`{string} title`、`{string} value`、`{object} props`

- **用法**：

  ```js
  maker.idate('field','title','value',{disabled:true})
  ```

  生成一个 input 组件,**type 为 date**





#### maker.password

- **参数**：`{string} field`、`{string} title`、`{string} value`、`{object} props`

- **用法**：

  ```js
  maker.password('field','title','value',{disabled:true})
  ```

  生成一个 input 组件,**type 为 password**



## InputNumber

#### maker.inputNumber

- **参数**：`{string} field`、`{string} title`、`{number} value`、`{object} props`

- **用法**：

  ```js
  maker.inputNumber('field','title','value',{disabled:true})
  ```

  生成一个 inputNumber 组件,**`maker.number`是该方法的别名**



## AutoComplete

#### maker.autoComplete

- **参数**：`{string} field`、`{string} title`、`{string} value`、`{object} props`

- **用法**：

  ```js
  maker.autoComplete('field','title','xaboy',{data:['xaboy','github','xian']})
  ```

  生成一个 autoComplete 组件,**`maker.auto`是该方法的别名**



## Radio

#### maker.radio

- **参数**：`{string} field`、`{string} title`、`{string|number} value`、`{object} props`

- **用法**：

  ```js
  maker.radio('field','title',1)
      .options([{value:1,label:'好用'},{value:2,label:'不好用',disabled:true}])
  ```

  生成一个 radio 组件



## Checkbox

#### maker.checkbox

- **参数**：`{string} field`、`{string} title`、`{array} value`、`{object} props`

- **用法**：

  ```js
  maker.checkbox('field','title',[1,2])
      .options([{value:1,label:'高效'},{value:2,label:'简单'}])
  ```

  生成一个 checkbox 组件



## Select

#### maker.select

- **参数**：`{string} field`、`{string} title`、`{string|number|array} value`、`{object} props`

- **用法**：

  ```js
  maker.select('field','title',1)
      .options([{value:1,label:'高效'},{value:2,label:'简单'}])
  ```

  生成一个 select 组件,`props.multiple` 默认为 `false`



#### maker.selectOne

- **参数**：`{string} field`、`{string} title`、`{string|number} value`、`{object} props`

- **用法**：

  ```js
  maker.selectOne('field','title',1)
      .options([{value:1,label:'高效'},{value:2,label:'简单'}])
  ```

  生成一个 select 组件,`props.multiple` 为 `false`即为**单选的下拉选择框**



#### maker.selectMultiple

- **参数**：`{string} field`、`{string} title`、`{array} value`、`{object} props`

- **用法**：

  ```js
  maker.selectMultiple('field','title',[1,2])
      .options([{value:1,label:'高效'},{value:2,label:'简单'}])
  ```

  生成一个 select 组件,`props.multiple` 为 ` true`即为**可多选的下拉选择框**





## Switch

#### maker.switch

- **参数**：`{string} field`、`{string} title`、`{string|number} value`、`{object} props`

- **用法**：

  ```js
  maker.switch('field','title',1,{trueValue:1,falseValue:0})
  ```

  生成一个 switch 组件



## Cascader

#### maker.cascader

- **参数**：`{string} field`、`{string} title`、`{array} value`、`{object} props`

- **用法**：

  ```js
  maker.cascader('field','title',[],{data:[]})
  ```

  生成一个 cascader 组件



## DatePicker

#### maker.datePicker

- **参数**：`{string} field`、`{string} title`、`{array|string|date} value`、`{object} props`

- **用法**：

  ```js
  maker.datePicker('field','title','2018-12-16')
  ```

  生成一个 datePicker 组件,**`type` 默认为 `date`**


#### maker.date

- **参数**：`{string} field`、`{string} title`、`{date|string} value`、`{object} props`

- **用法**：

  ```js
  maker.date('field','title','2018-12-16')
  ```

  生成一个 datePicker 组件,**`type` 为 `date`,可选择日期**



#### maker.dateRange

- **参数**：`{string} field`、`{string} title`、`{array} value`、`{object} props`

- **用法**：

  ```js
  maker.dateRange('field','title',['2018-11-30','2018-12-16'])
  ```

  生成一个 datePicker 组件,**`type` 为 `dateRange`,可选择日期区间**





#### maker.dateTime

- **参数**：`{string} field`、`{string} title`、`{date|string} value`、`{object} props`

- **用法**：

  ```js
  maker.dateTime('field','title','2018-12-16 23:23:23')
  ```

  生成一个 datePicker 组件,**`type` 为 `dateTime`,可选择日期+时间**





#### maker.dateTimeRange

- **参数**：`{string} field`、`{string} title`、`{array} value`、`{object} props`

- **用法**：

  ```js
  maker.dateTimeRange('field','title',['2018-11-30 23:23:23','2018-12-16 23:23:23'])
  ```

  生成一个 datePicker 组件,**`type` 为 `dateTimeRange`,可选择日期+时间区间**





#### maker.year

- **参数**：`{string} field`、`{string} title`、`{string} value`、`{object} props`

- **用法**：

  ```js
  maker.year('field','title','2018-12-16')
  ```

  生成一个 datePicker 组件,**`type` 为 `year`,可选择年份**





#### maker.month

- **参数**：`{string} field`、`{string} title`、`{string} value`、`{object} props`

- **用法**：

  ```js
  maker.dateRange('field','title','2018-12-16')
  ```

  生成一个 datePicker 组件,**`type` 为 `month`,可选择月份**







## TimePicker

#### maker.timePicker

- **参数**：`{string} field`、`{string} title`、`{array|string|date} value`、`{object} props`

- **用法**：

  ```js
  maker.timePicker('field','title','23:23:23')
  ```

  生成一个 timePicker 组件,**`type` 默认为 `time`**



#### maker.time

- **参数**：`{string} field`、`{string} title`、`{string|date} value`、`{object} props`

- **用法**：

  ```js
  maker.timePicker('field','title','23:23:23')
  ```

  生成一个 timePicker 组件,**`type` 为 `time`,可选择时间**



#### maker.timeRang

- **参数**：`{string} field`、`{string} title`、`{array} value`、`{object} props`

- **用法**：

  ```js
  maker.timePicker('field','title',['23:23:23','23:59:59'])
  ```

  生成一个 timePicker 组件,**`type` 默认为 `time`,可选择时间区间**





## ColorPicker

#### maker.colorPicker

- **参数**：`{string} field`、`{string} title`、`{string} value`、`{object} props`

- **用法**：

  ```js
  maker.colorPicker('field','title','#FF7271')
  ```

  生成一个 colorPicker 组件,**`maker.color`是该方法的别名**



## Upload

#### maker.upload

- **参数**：`{string} field`、`{string} title`、`{string|array} value`、`{object} props`

- **用法**：

  ```js
  maker.upload('field','title','image1.png',{action:'upload.php',maxLength:1})
  ```

  生成一个 upload 组件,**`type` 默认为 `field`**


#### maker.uploadImage

- **参数**：`{string} field`、`{string} title`、`{array} value`、`{object} props`

- **用法**：

  ```js
  maker.uploadImage('field','title',['image1.png'.'image2.png'],{action:'upload.php'})
  ```

  生成一个 upload 组件,**`type` 为 `image`,`maker.image`是该方法的别名**



#### maker.uploadFile

- **参数**：`{string} field`、`{string} title`、`{array} value`、`{object} props`

- **用法**：

  ```js
  maker.uploadFile('field','title',['image1.png'.'image2.png'],{action:'upload.php'})
  ```

  生成一个 upload 组件,**`type` 为 `file`,`maker.file`是该方法的别名**



#### maker.uploadImageOne

- **参数**：`{string} field`、`{string} title`、`{string|array} value`、`{object} props`

- **用法**：

  ```js
  maker.uploadImageOne('field','title','image1.png',{action:'upload.php'})
  ```

  生成一个 upload 组件,**`type` 为 `image`且`maxLength `为`1`只能上传一张图片**

  **`maker.imageOne`是该方法的别名**





#### maker.uploadFileOne

- **参数**：`{string} field`、`{string} title`、`{string} value`、`{object} props`

- **用法**：

  ```js
  maker.uploadFileOne('field','title','image1.png',{action:'upload.php'})
  ```

  生成一个 upload 组件,**`type` 为 `file`且`maxLength `为`1`只能上传一个文件**

  **`maker.fileOne`是该方法的别名**





## Rate

#### maker.rate

- **参数**：`{string} field`、`{string} title`、`{number} value`、`{object} props`

- **用法**：

  ```js
  maker.rate('field','title',10)
  ```

  生成一个 rate 组件



## Slider

#### maker.slider

- **参数**：`{string} field`、`{string} title`、`{number} value`、`{object} props`

- **用法**：

  ```js
  maker.slider('field','title',10)
  ```

  生成一个 slider 组件,**`props.range`默认为`false`**



#### maker.sliderRange

- **参数**：`{string} field`、`{string} title`、`{array} value`、`{object} props`

- **用法**：

  ```js
  maker.sliderRange('field','title',[10,100])
  ```

  生成一个 slider 组件,**`props.range`为`true`,可选择区间**





## Tree

#### maker.tree

- **参数**：`{string} field`、`{string} title`、`{array} value`、`{object} props`

- **用法**：

  ```js
  maker.tree('field','title',[12,13],{data:[]})
  ```

  生成一个 tree 组件

- **相关方法**：

  - `maker.treeSelected`
  - `maker.treechecked`




## Frame

#### maker.frame

- **参数**：`{string} field`、`{string} title`、`{array|string} value`、`{object} props`

- **用法**：

  ```js
  maker.tree('field','title',10)
  ```

  生成一个 frame 组件

- **相关方法**：
  - `maker.frameInputs`
  - `maker.frameInputOne`
  - `maker.frameFiles`
  - `maker.frameFileOne`
  - `maker.frameImages`
  - `maker.frameImageOne`


