---
sidebarDepth: 3	
---



# 全局配置

使用时，可以进行全局配置组件的一些属性。

## 配置

- 组件模式

```html
<form-create :option="option"></form-create>
```

- 全局方法

```js
vm.$formCreate(rule,option)
window.formCreate.create(rule,option)
```



## 构成

全局配置由一下几个部分构成。

- **el**：表单插入的节点,组件模式下无需设置
- **switchMaker**：是否自动转换规则中的 maker 生成器为对象
- **iframeHelper**：是否开启iframe组件子页面助手函数,**跨域无效**
- **onSubmit**：**表单提交回调函数**
- **onReload**：**表单重载后回调函数**<Badge text="1.5.3+"/>
- **mounted**：**表单创建成功后回调函数**
- **form**：表单整体显示规则配置
- **row**：表单组件布局配置  [参考iview栅格布局](https://www.iviewui.com/components/grid)
- **upload**：upload组件全局配置
- **submitBtn**：提交按钮样式配置
- **resetBtn**：重置按钮样式配置



## el

- **类型**：`string | HTMLElement`
- **说明**: 提供一个在页面上已存在的 DOM 元素作为表单的挂载目标,**组件模式下无需设置**





## switchMaker

- **类型**：`bool`
- **默认**： `true`
- **说明**：是否自动转换规则中的 maker 生成器为对象



## iframeHelper

- **类型**：`bool`

- **默认**： `false`

- **说明**：是否开启iframe组件子页面助手函数,**跨域无效**

- **示例**：

  ```js
  //在iframe 子页面中,field 为字段名
  //field 只能为生成iframe 组件的 field,其他无效
  
  //修改表单 field 字段的值
  window[`${field}_change`](value);
  window.form_create_helper.set(field,value);
  
  //获取 field 字段的值
  window.form_create_helper.get(field)
  
  //关闭 iframe
  window.form_create_helper.close(field)
  ```


## onSubmit

- **类型**：`Function`

- **说明**：表单提交回调函数

- **示例**: 

  ```js
  {
    onSubmit(formData){
      	//TODO 
      	//ajajx提交表单
    }
  }
  ```




## onReload <Badge text="1.5.3+"/>

- **类型**：`Function`
- **说明**：表单重载后回调函数

- **示例**: 

  ```js
  {
    onReload($f){
      //TODO 
      //更新$f
    }
  }
  ```

  表单重载后回调函数`onReload`全局配置项,可用于更新`$f` 



## mounted

- **类型**：`Function`
- **说明**：表单创建成功后回调函数

- **示例**: 

  ```js
  {
    mounted($f){
      //TODO 
      // 表单创建成功,可在此操作表单
    }
  }
  ```





## form

- **类型**：`Object`

- **说明**：表单整体显示规则配置

- **默认值**: 

  ```js
  {
  
    //是否开启行内表单模式
    inline:false,
    //表单域标签的位置，可选值为 left、right、top
    labelPosition:'right',
    //表单域标签的宽度，所有的 FormItem 都会继承 Form 组件的 label-width 的值
    labelWidth:125,
    //是否显示校验错误信息
    showMessage:true,
    //原生的 autocomplete 属性，可选值为 off 或 on
    autocomplete:'off',
      
  }
  ```

- 参考: [Form props](https://www.iviewui.com/components/form#Form_props)





## row

- **类型**：`Object`

- **说明**：表单组件布局配置

- **默认值**: 

  ```js
  {
  
    //栅格间距，单位 px，左右平分
    gutter:0,
    //布局模式，可选值为flex或不选，在现代浏览器下有效
    type:undefined,
    //flex 布局下的垂直对齐方式，可选值为top、middle、bottom
    align:undefined,
    //flex 布局下的水平排列方式，可选值为start、end、center、space-around、space-between
    justify:undefined,
    //自定义的class名称
    className:undefined
  
  }
  ```

- 参考: [Row props](https://www.iviewui.com/components/grid#Row_props)





## upload

- **类型**：`Object`

- **说明**：upload组件全局配置

- **默认值**: 

  ```js
  {
    //上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传
    beforeUpload:()=>{},
    //文件上传时的钩子，返回字段为 event, file, fileList
    onProgress:(event, file, fileList)=>{},
    //文件上传成功时的钩子，返回字段为 response, file, fileList,
    //若需要把文件添加到文件列表中,在函数值返回即可
    onSuccess:(response, file, fileList)=>{
    // return 'filePath';
   	},
    //文件上传失败时的钩子，返回字段为 error, file, fileList
    onError:(error, file, fileList)=>{},
    //点击已上传的文件链接时的钩子，返回字段为 file， 
    //可以通过 file.response 拿到服务端返回数据
    onPreview:(file)=>{},
    //文件列表移除文件时的钩子，返回字段为 file, fileList
    onRemove:(file, fileList)=>{},
    //文件格式验证失败时的钩子，返回字段为 file, fileList
    onFormatError:(file, fileList)=>{},
    //文件超出指定大小限制时的钩子，返回字段为 file, fileList
    onExceededSize:(file, fileList)=>{},
    //辅助操作按钮的图标 ,设置为false将不显示
    handleIcon:'ios-eye-outline',
    //点击辅助操作按钮事件
    onHandle:(src)=>{},
    //是否可删除,设置为false不显示删除按钮
    allowRemove:true,
    
  }
  ```

- 参考: [Upload](/components/upload.html)





## submitBtn

- **类型**：`Object`

- **说明**：提交按钮样式和布局配置

- **默认值**: 

  ```js
  {
    //按钮类型，可选值为primary、ghost、dashed、text、info、success、warning、error或者不设置
    type:"primary",
    //按钮大小，可选值为large、small、default或者不设置
    size:"large",
    //按钮形状，可选值为circle或者不设置
    shape:undefined,
    //开启后，按钮的长度为 100%
    long:true,
    //设置button原生的type，可选值为button、submit、reset
    htmlType:"button",
    //设置按钮为禁用状态
    disabled:false,
    //设置按钮的图标类型
    icon:"ios-upload",
    //按钮文字提示
    innerText:"提交",
    //设置按钮为加载中状态
    loading:false,
    //是否显示,默认显示
    show:true,
    //设置提交按钮布局规则,参考 col 栅格布局规则
    col:undefined
  }
  ```

  提交按钮配置,设置submitBtn=false或submitBtn.show=false时不显示按钮

- 参考: [布局规则](/guide/col.html) | [Button_props](https://www.iviewui.com/components/button#Button_props)





## resetBtn

- **类型**：`Object`

- **说明**：重置按钮样式和布局配置

- **默认值**: 

  ```js
  {
          
    //配置说明同上
    type:"ghost",
    size:"large",
    shape:undefined,
    long:true,
    htmlType:"button",
    disabled:false,
    icon:"refresh",
    innerText:"重置",
    loading:false,
    //默认不显示
    show:false,
    //设置重置按钮布局规则,参考 col 栅格布局规则
    col:undefined
  }
  ```

  重置按钮默认配置,设置resetBtn=true或resetBtn.show=true时显示

- 参考: [布局规则](/guide/col.html) | [Button_props](https://www.iviewui.com/components/button#Button_props)





## 默认配置

下列是完整的配置项及配置说明。

```javascript
{
    //插入节点,默认document.body
    el:null,
        
	//是否自动转换规则中的 maker 生成器为对象
    switchMaker:true,
        
    //是否开启iframe组件子页面助手函数
    //`${field}_change(value)`
    //只能设置当前字段的 value
    //form_create_helper.close(field)
    //form_create_helper.get(field)
    //form_create_helper.set(field,value)
    //快速修改该组件的value. 跨域无效!!
    iframeHelper:false,
        
    //form配置
    form:{

        //是否开启行内表单模式
        inline:false,
        //表单域标签的位置，可选值为 left、right、top
        labelPosition:'right',
        //表单域标签的宽度，所有的 FormItem 都会继承 Form 组件的 label-width 的值
        labelWidth:125,
        //是否显示校验错误信息
        showMessage:true,
        //原生的 autocomplete 属性，可选值为 off 或 on
        autocomplete:'off',

    },

    //row布局配置
    row:{

        //栅格间距，单位 px，左右平分
        gutter:0,
        //布局模式，可选值为flex或不选，在现代浏览器下有效
        type:undefined,
        //flex 布局下的垂直对齐方式，可选值为top、middle、bottom
        align:undefined,
        //flex 布局下的水平排列方式，可选值为start、end、center、space-around、space-between
        justify:undefined,
        //自定义的class名称
        className:undefined

    },

    //上传组件全局配置
    upload:{

        //上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传
        beforeUpload:()=>{},
        //文件上传时的钩子，返回字段为 event, file, fileList
        onProgress:(event, file, fileList)=>{},
        //文件上传成功时的钩子，返回字段为 response, file, fileList,
        //若需有把文件添加到文件列表中,在函数值返回即可
        onSuccess:(response, file, fileList)=>{
            // return 'filePath';
        },
        //文件上传失败时的钩子，返回字段为 error, file, fileList
        onError:(error, file, fileList)=>{},
        //点击已上传的文件链接时的钩子，返回字段为 file， 
        //可以通过 file.response 拿到服务端返回数据
        onPreview:(file)=>{},
        //文件列表移除文件时的钩子，返回字段为 file, fileList
        onRemove:(file, fileList)=>{},
        //文件格式验证失败时的钩子，返回字段为 file, fileList
        onFormatError:(file, fileList)=>{},
        //文件超出指定大小限制时的钩子，返回字段为 file, fileList
        onExceededSize:(file, fileList)=>{},
        //辅助操作按钮的图标 ,设置为false将不显示
        handleIcon:'ios-eye-outline',
        //点击辅助操作按钮事件
        onHandle:(src)=>{},
        //是否可删除,设置为false是不显示删除按钮
        allowRemove:true,

    },
        
	//表单创建成功后回调函数
    mounted:($f)=>{},
    //表单提交事件
    onSubmit:(formData)=>{},
    //表单重载后回调函数`onReload`全局配置项,可用于更新`$f` 
    //>=1.5.3版本
    onReload:($f)=>{}

    //提交按钮配置,设置submitBtn=false或submitBtn.show=false时不显示按钮
    submitBtn:{

        //按钮类型，可选值为primary、ghost、dashed、text、info、success、warning、error或者不设置
        type:"primary",
        //按钮大小，可选值为large、small、default或者不设置
        size:"large",
        //按钮形状，可选值为circle或者不设置
        shape:undefined,
        //开启后，按钮的长度为 100%
        long:true,
        //设置button原生的type，可选值为button、submit、reset
        htmlType:"button",
        //设置按钮为禁用状态
        disabled:false,
        //设置按钮的图标类型
        icon:"ios-upload",
        //按钮文字提示
        innerText:"提交",
        //设置按钮为加载中状态
        loading:false,
        //默认显示
        show:true,
        //设置提交按钮布局规则,参考 col 栅格布局规则
				col:undefined
    },

    //重置按钮默认配置,设置resetBtn=true或resetBtn.show=true时显示
    resetBtn:{
        
        //配置说明同上
        type:"ghost",
        size:"large",
        shape:undefined,
        long:true,
        htmlType:"button",
        disabled:false,
        icon:"refresh",
        innerText:"重置",
        loading:false,
        //默认不显示
        show:false,
        //设置重置按钮布局规则,参考 col 栅格布局规则
		col:undefined

    }
}
```


