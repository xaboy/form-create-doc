---
sidebarDepth: 3	
---



# Global configuration

Some properties of the global configuration component can be made when using

## Configuration

- Component mode

```html
<form-create :option="option"></form-create>
```

- Global method

```js
vm.$formCreate(rule,option)
window.formCreate.create(rule,option)
```



## Composition

The global configuration consists of the following sections

- **el**：The node which the form is inserted into, no need to set in component mode
- **switchMaker**：Whether automatically convert the Maker Builder in the rules to an object
- **iframeHelper**：Whether to open the iframe component subpage helper function, **cross-domain invalid**
- **onSubmit**：**Callback function when the form is submitted **
- **onReload**：**callback function after form overloading**<Badge text="1.5.3+"/>
- **mounted**：**callback function after form creation success**
- **form**：Form overall display rule configuration
- **row**：Form components layout configuration  [iview Grid](https://www.iviewui.com/components/grid)
- **upload**：Upload component global configuration
- **submitBtn**：Submit button style configuration
- **resetBtn**：Reset button style configuration



## el

- **type**：`string | HTMLElement`
- **description**: Provide a DOM element that already exists on the page as the mount target for the form, **no need to set in component mode**





## switchMaker

- **type**：`bool`
- **default**： `true`
- **description**：Whether automatically convert the Maker Builder in the rules to an object



## iframeHelper

- **type**：`bool`

- **default**： `false`

- **description**：Whether to open the iframe component subpage helper function, **cross-domain invalid**

- **demo**：

  ```js
  //Field can only be used to generate the field of the iframe component, the other is invalid
  
  //set
  window[`${field}_change`](value);
  window.form_create_helper.set(field,value);
  
  //get
  window.form_create_helper.get(field)
  
  //close modal
  window.form_create_helper.close(field)
  ```


## onSubmit

- **type**：`Function`

- **description**：Form submission callback function

- **demo**: 

  ```js
  {
    onSubmit(formData){
      	//TODO 
    }
  }
  ```




## onReload <Badge text="1.5.3+"/>

- **type**：`Function`
- **description**：Callback function after form overloading

- **demo**: 

  ```js
  {
    onReload($f){
      //TODO 
    }
  }
  ```

  After the form is overloaded, the callback function `onReload` global configuration item can be used to update `$f`



## mounted

- **type**：`Function`
- **description**：Callback function after form creation success

- **demo**: 

  ```js
  {
    mounted($f){
      //TODO 
    }
  }
  ```





## form

- **type**：`Object`

- **description**：Form overall display rule configuration

- **default value**: 

  ```js
  {
  
    //Enable inline-form mode or not.
    inline:false,
    //The position of Form's labels. Optional value: left, right, top
    labelPosition:'right',
    //Width of Form's labels. All Form-items in Form will inherit the value
    labelWidth:125,
    //Show validation failing infomation or not
    showMessage:true,
    //Native autocomplete property, which can be selected as off or on
    autocomplete:'off',
      
  }
  ```

- reference: [Form props](https://www.iviewui.com/components/form#Form_props)





## row

- **type**：`Object`

- **description**：Form component layout configuration

- **default**: 

  ```js
  {
  
    //Grid spacing in pixels, split equally left and right
    gutter:0,
    //Layout mode. Can optionally make use of flex in a modern browser.
    type:undefined,
    //Vertical alignment of flex layout. You can choose between top, middle, bottom
    align:undefined,
    //Horizontal arrangement of flex layout. You can choose between start, end, center, space-around, space-between
    justify:undefined,
    //custom defined class's name
    className:undefined
  
  }
  ```

- reference: [Row props](https://www.iviewui.com/components/grid#Row_props)





## upload

- **type**：`Object`

- **description**：Upload component global configuration

- **default**: 

  ```js
  {
    //Hook before file starts to upload. The only parameter is the file. If the function return false, or a Promise, the upload procedure will be stopped.
    beforeUpload:()=>{},
    //Hook when file is uploading. It has three params: event, file, fileList
    onProgress:(event, file, fileList)=>{},
    //Hook when file is successfully uploaded. It has three params: response, file, fileList
    //If you need to add the file to the file list, you can return it in the function value.
    onSuccess:(response, file, fileList)=>{
    // return 'filePath';
   	},
    //Hook when file is failed to upload. It has three params: error, file, fileList
    onError:(error, file, fileList)=>{},
    //Hook when clicking uploaded file link. The only parameter is file. You can get server-side response data in file.response.
    onPreview:(file)=>{},
    //Hook when a certain file is removed from the file list. It has two params: file, fileList
    onRemove:(file, fileList)=>{},
    //Hook when file format verification is failed. It has two params: file, fileList
    onFormatError:(file, fileList)=>{},
    //Hook when file size exceeds the limitation. It has two params: file, fileList
    onExceededSize:(file, fileList)=>{},
    //Auxiliary action button icon, set to false will not display
    handleIcon:'ios-eye-outline',
    //Click on the auxiliary action button event
    onHandle:(src)=>{},
    //Whether it can be deleted, set to false does not display the delete button
    allowRemove:true,
    
  }
  ```

- reference: [Upload](/components/upload.html)





## submitBtn

- **type**：`Object`

- **description**：Submit button styles and layout configurations

- **default**: 

  ```js
  {
    //Button type, options include default, primary, dashed, text, info, success, warning, error, optional
    type:"primary",
    //Button size，options include large, small, default optional
    size:"large",
    //Button shape, options include circle, optional
    shape:undefined,
    //Set the width of the button to 100%
    long:true,
    //Set the button raw type，options include button、submit、reset
    htmlType:"button",
    //Disable the button
    disabled:false,
    //Set the icons used in the button
    icon:"ios-upload",
    //Button content
    innerText:"提交",
    //Set the button to loading status
    loading:false,
    //Whether to display
    show:true,
    //Set submit button layout rules, refer to col grid layout rules
    col:undefined
  }
  ```

  Submit button configuration, do not display buttons when submitBtn=false or submitBtn.show=false

- reference: [Col_props](/guide/col.html) | [Button_props](https://www.iviewui.com/components/button#Button_props)





## resetBtn

- **type**：`Object`

- **description**：Reset button style and layout configuration

- **default**: 

  ```js
  {
          
    //Configuration instructions are the same as above
    type:"ghost",
    size:"large",
    shape:undefined,
    long:true,
    htmlType:"button",
    disabled:false,
    icon:"refresh",
    innerText:"重置",
    loading:false,
    //default不显示
    show:false,
    //设置重置按钮布局规则,reference col 栅格布局规则
    col:undefined
  }
  ```

  Reset button default configuration, display when resetBtn=true or resetBtn.show=true

- reference: [Col_props](/guide/col.html) | [Button_props](https://www.iviewui.com/components/button#Button_props)





## default allocation

The following are complete configuration items and configuration instructions

```javascript
{
    //插入节点,defaultdocument.body
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

        //按钮type，可选值为primary、ghost、dashed、text、info、success、warning、error或者不设置
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
        //设置按钮的图标type
        icon:"ios-upload",
        //按钮文字提示
        innerText:"提交",
        //设置按钮为加载中状态
        loading:false,
        //default显示
        show:true,
        //设置提交按钮布局规则,reference col 栅格布局规则
				col:undefined
    },

    //重置按钮default配置,设置resetBtn=true或resetBtn.show=true时显示
    resetBtn:{
        
        //配置description同上
        type:"ghost",
        size:"large",
        shape:undefined,
        long:true,
        htmlType:"button",
        disabled:false,
        icon:"refresh",
        innerText:"重置",
        loading:false,
        //default不显示
        show:false,
        //设置重置按钮布局规则,reference col 栅格布局规则
		col:undefined

    }
}
```


