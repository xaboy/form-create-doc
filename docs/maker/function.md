---
sidebarDepth: 3
---

# Maker 使用方法

maker 生成器是用来生成组件规则的助手方法,通过链式操作即可快速生成对应的组件规则



::: tip 获取 maker 生成器

- window.formCreate.maker
- import { maker } from 'form-create'

:::

## Hidden 组件

#### maker.hidden

- **参数**：`{string} field`、`{string|number} value`

- **用法**：

  ```js
  maker.hidden('field','value')
  ```

  生成一个 hidden 组件

- **参考**：[hidden组件](http://www.form-create.com/components/hidden.html#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)



## Input 组件

#### maker.input

- **参数**：`{string} field`、`{string} title`、`{string} value`、`{object} props`

- **用法**：

  ```js
  maker.input('field','title','value',{diabled:true})
  ```

  生成一个 input 组件,**type 默认为 text**

- **参考**：[input组件](http://www.form-create.com/components/input.html#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)



#### maker.text

- **参数**：`{string} field`、`{string} title`、`{string} value`、`{object} props`

- **用法**：

  ```js
  maker.text('field','title','value',{diabled:true})
  ```

  生成一个 input 组件,**type 为 text**





#### maker.url

- **参数**：`{string} field`、`{string} title`、`{string} value`、`{object} props`

- **用法**：

  ```js
  maker.url('field','title','value',{diabled:true})
  ```

  生成一个 input 组件,**type 为 url**



#### maker.idate

- **参数**：`{string} field`、`{string} title`、`{string} value`、`{object} props`

- **用法**：

  ```js
  maker.idate('field','title','value',{diabled:true})
  ```

  生成一个 input 组件,**type 为 date**





#### maker.password

- **参数**：`{string} field`、`{string} title`、`{string} value`、`{object} props`

- **用法**：

  ```js
  maker.password('field','title','value',{diabled:true})
  ```

  生成一个 input 组件,**type 为 password**



## InputNumber 组件

#### maker.inputNumber

- **参数**：`{string} field`、`{string} title`、`{number} value`、`{object} props`

- **用法**：

  ```js
  maker.inputNumber('field','title','value',{diabled:true})
  ```

  生成一个 inputNumber 组件,**`maker.number`是该方法的别名**

- **参考**：[InputNumber 组件](http://www.form-create.com/components/input-number.html#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)





## AutoComplete 组件

#### maker.autoComplete

- **参数**：`{string} field`、`{string} title`、`{string} value`、`{object} props`

- **用法**：

  ```js
  maker.autoComplete('field','title','xaboy',{data:['xaboy','github','xian']})
  ```

  生成一个 autoComplete 组件,**`maker.auto`是该方法的别名**

- **参考**：[autoComplete 组件](http://www.form-create.com/components/auto-complete.html#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)





## Radio 组件

#### maker.radio

- **参数**：`{string} field`、`{string} title`、`{string|number} value`、`{object} props`

- **用法**：

  ```js
  maker.radio('field','title',1)
      .options([{value:1,label:'好用'},{value:2,label:'不好用',diabled:true}])
  ```

  生成一个 radio 组件

- **参考**：[Radio 组件](http://www.form-create.com/components/radio.html#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)







## Checkbox 组件

#### maker.checkbox

- **参数**：`{string} field`、`{string} title`、`{array} value`、`{object} props`

- **用法**：

  ```js
  maker.checkbox('field','title',[1,2])
      .options([{value:1,label:'高效'},{value:2,label:'简单'}])
  ```

  生成一个 checkbox 组件

- **参考**：[checkbox 组件](http://www.form-create.com/components/checkbox.html#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)









## Select 组件

#### maker.select

- **参数**：`{string} field`、`{string} title`、`{string|number|array} value`、`{object} props`

- **用法**：

  ```js
  maker.select('field','title',1)
      .options([{value:1,label:'高效'},{value:2,label:'简单'}])
  ```

  生成一个 select 组件,`props.multiple` 默认为 `false`

- **参考**：[select 组件](http://www.form-create.com/components/select.html#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)



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





## Switch 组件

#### maker.switch

- **参数**：`{string} field`、`{string} title`、`{string|number} value`、`{object} props`

- **用法**：

  ```js
  maker.switch('field','title',1,{trueValue:1,falseValue:0})
  ```

  生成一个 switch 组件

- **参考**：[switch 组件](http://www.form-create.com/components/switch.html#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)





## Cascader 组件

#### maker.cascader

- **参数**：`{string} field`、`{string} title`、`{array} value`、`{object} props`

- **用法**：

  ```js
  maker.cascader('field','title',[],{data:[]})
  ```

  生成一个 cascader 组件

- **参考**：[cascader 组件](http://www.form-create.com/components/cascader.html#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)、[data 数据结构](https://github.com/xaboy/form-create/blob/master/district/province_city.js)、[省市区二、三级联动数据](https://github.com/xaboy/form-create/tree/master/district)







## DatePicker 组件

#### maker.datePicker

- **参数**：`{string} field`、`{string} title`、`{array|string|date} value`、`{object} props`

- **用法**：

  ```js
  maker.datePicker('field','title','2018-12-16')
  ```

  生成一个 datePicker 组件,**`type` 默认为 `date`**

- **参考**：[datePicker 组件](http://www.form-create.com/components/date-picker.html#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)



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







## TimePicker 组件

#### maker.timePicker

- **参数**：`{string} field`、`{string} title`、`{array|string|date} value`、`{object} props`

- **用法**：

  ```js
  maker.timePicker('field','title','23:23:23')
  ```

  生成一个 timePicker 组件,**`type` 默认为 `time`**

- **参考**：[timePicker 组件](http://www.form-create.com/components/time-picker.html#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)



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





## ColorPicker 组件

#### maker.colorPicker

- **参数**：`{string} field`、`{string} title`、`{string} value`、`{object} props`

- **用法**：

  ```js
  maker.colorPicker('field','title','#FF7271')
  ```

  生成一个 colorPicker 组件,**`maker.color`是该方法的别名**

- **参考**：[colorPicker 组件](http://www.form-create.com/components/color-picker.html#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)





## Upload 组件

#### maker.upload

- **参数**：`{string} field`、`{string} title`、`{string|array} value`、`{object} props`

- **用法**：

  ```js
  maker.upload('field','title','image1.png',{action:'upload.php',maxLength:1})
  ```

  生成一个 upload 组件,**`type` 默认为 `field`**

- **参考**：[upload 组件](http://www.form-create.com/components/upload.html#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)



#### maker.uploadImage (1.5.1版本)

- **参数**：`{string} field`、`{string} title`、`{array} value`、`{object} props`

- **用法**：

  ```js
  maker.uploadImage('field','title',['image1.png'.'image2.png'],{action:'upload.php'})
  ```

  生成一个 upload 组件,**`type` 为 `image`,`maker.image`是该方法的别名**



#### maker.uploadFile (1.5.1版本)

- **参数**：`{string} field`、`{string} title`、`{array} value`、`{object} props`

- **用法**：

  ```js
  maker.uploadFile('field','title',['image1.png'.'image2.png'],{action:'upload.php'})
  ```

  生成一个 upload 组件,**`type` 为 `file`,`maker.file`是该方法的别名**



#### maker.uploadImageOne (1.5.1版本)

- **参数**：`{string} field`、`{string} title`、`{string|array} value`、`{object} props`

- **用法**：

  ```js
  maker.uploadImageOne('field','title','image1.png',{action:'upload.php'})
  ```

  生成一个 upload 组件,**`type` 为 `image`且`maxLength `为`1`只能上传一张图片**

  **`maker.imageOne`是该方法的别名**





#### maker.uploadFileOne (1.5.1版本)

- **参数**：`{string} field`、`{string} title`、`{string} value`、`{object} props`

- **用法**：

  ```js
  maker.uploadFileOne('field','title','image1.png',{action:'upload.php'})
  ```

  生成一个 upload 组件,**`type` 为 `file`且`maxLength `为`1`只能上传一个文件**

  **`maker.fileOne`是该方法的别名**





## Rate 组件

#### maker.rate

- **参数**：`{string} field`、`{string} title`、`{number} value`、`{object} props`

- **用法**：

  ```js
  maker.rate('field','title',10)
  ```

  生成一个 rate 组件

- **参考**：[rate 组件](http://localhost:8080/components/rate.html#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)





## Slider 组件

#### maker.slider

- **参数**：`{string} field`、`{string} title`、`{number} value`、`{object} props`

- **用法**：

  ```js
  maker.slider('field','title',10)
  ```

  生成一个 slider 组件,**`props.range`默认为`false`**

- **参考**：[slider 组件](http://localhost:8080/components/slider.html#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)



#### maker.sliderRange

- **参数**：`{string} field`、`{string} title`、`{array} value`、`{object} props`

- **用法**：

  ```js
  maker.sliderRange('field','title',[10,100])
  ```

  生成一个 slider 组件,**`props.range`为`true`,可选择区间**





## Tree 组件

#### maker.tree

- **参数**：`{string} field`、`{string} title`、`{array} value`、`{object} props`

- **用法**：

  ```js
  maker.tree('field','title',[12,13],{data:[]})
  ```

  生成一个 tree 组件

- **参考**：[tree 组件](http://localhost:8080/components/tree.html#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)

- **相关方法**：

  - `maker.treeSelected`
  - `maker.treechecked`







## Frame 组件

#### maker.frame

- **参数**：`{string} field`、`{string} title`、`{array|string} value`、`{object} props`

- **用法**：

  ```js
  maker.tree('field','title',10)
  ```

  生成一个 frame 组件

- **参考**：[frame 组件](http://localhost:8080/components/frame.html#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E) 、[data 数据结构](http://localhost:8080/components/tree.html#data%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84)

- **相关方法**：
  - `maker.frameInputs`
  - `maker.frameInputOne`
  - `maker.frameFiles`
  - `maker.frameFileOne`
  - `maker.frameImages`
  - `maker.frameImageOne`





## 自定义组件

#### maker.create

```js
$formCreate.maker.create(componentName) //component为生成组件的名称

//示例:
maker.create('i-button').props({
        type:"primary",
        size:"large",
    }).on({
        "click":()=>{console.log(1);},
    }).col({span:8,labelWidth:1}).children([
        maker.create('span').domProps({
            innerHTML:'测试按钮'
        })
    ]),
```

#### maker.createTmp

```js
$formCreate.maker.createTmp(template,vm)

//示例
maker.createTmp('<i-button @click="onClick" long>字符串测试{{test}}-{{num}}</i-button>',new Vue({
    data:{
        test:'createTmp渲染',
        num:0
    },
    methods:{
        onClick:function(){
            this.num++;
        }
    }
})).col({labelWidth:1})

```

**`maker.template`是该方法的别名**

