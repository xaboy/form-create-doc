# 在线示例

以下是 from-create 的功能演示和参考案例

## 简单示例

::: demo
```html
<template>
    <FormCreate :rule="rule" v-model="fApi" :option="options"/>
</template>

<script>
    export default {
        data(){
            return {
                fApi:{},
                options:{
                    onSubmit:(formData)=>{
                        alert(JSON.stringify(formData));
                    },
                    resetBtn:true
                },
                rule:[
                    {
                        type:'input',
                        field:'goods_name',
                        title:'商品名称'
                    },
                    {
                        type:'checkbox',
                        field:'label',
                        title:'标签',
                        options: [
                            {label:'好用',value:0},
                            {label:'快速',value:1},
                            {label:'高效',value:2},
                            {label:'全能',value:3},
                        ]
                    },
                ]
            }
            
        }
    }
</script>
```
:::

## 组件示例

- [Input 输入框](http://jsrun.pro/7ehKp/edit)
- [AutoComplete 自动生成](http://jsrun.pro/TnhKp/edit)
- [Radio 单选框](http://jsrun.pro/cehKp/edit)
- [Cascader 多级联动](http://jsrun.pro/EehKp/edit)
- [Upload 上传](http://jsrun.pro/dehKp/edit)
- [Select 下拉选择框](http://jsrun.pro/FehKp/edit)
- [Checkbox 多选框](http://jsrun.pro/JehKp/edit)
- [InputNumber 数字输入框](http://jsrun.pro/xehKp/edit)
- [TimePicker 时间选择器](http://jsrun.pro/GehKp/edit)
- [DatePicker 日期选择器](http://jsrun.pro/HehKp/edit)
- [Switch 开关](http://jsrun.pro/5ehKp/edit)
- [ColorPicker 颜色选择框](http://jsrun.pro/tehKp/edit)
- [Rate 评分](http://jsrun.pro/CehKp/edit)
- [Slider 滑块](http://jsrun.pro/rehKp/edit)
- [Tree 树形组件](http://jsrun.pro/AehKp/edit)
- [Frame 框架](http://jsrun.pro/mehKp/edit)
- [数组组件/组件嵌套](http://jsrun.pro/VLfKp/edit)
- [control 配置项](http://jsrun.pro/C8fKp/edit)


## 功能示例

- [使用 json 参数生成表单](http://jsrun.pro/NQhKp/edit)
- [使用 maker 生成器生成表单](http://jsrun.pro/LQhKp/edit)
- [Validator 表单验证](http://jsrun.pro/LchKp/edit)
- [Dynamic Add 动态添加组件](http://jsrun.pro/WchKp/edit)
- [Bind 双向数据绑定](http://jsrun.pro/bchKp/edit)
- [Generate 生成任意组件](http://jsrun.pro/ychKp/edit)
- [Event 事件扩展](http://jsrun.pro/XchKp/edit)
- [Col 栅格布局规则](http://jsrun.pro/gchKp/edit)


## 案例

- [CRMEB客户管理+电商管理系统](https://gitee.com/ZhongBangKeJi/CRMEB) ([演示站](http://demo25.crmeb.net) 账号：demo 密码：crmeb.com)
- [深入使用 maker 自定义组件案例](https://github.com/HeyMrLin/fc-demo)
