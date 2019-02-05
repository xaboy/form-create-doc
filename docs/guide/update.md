---
title: 更新日志
---

### 当前版本 1.5.5

--------

::: tip 建议

建议保持在最新的版本

:::



#### 1.5.5 (2019-01-25)

- 修复 动态添加组件后组件值错乱bug
- 修复 `append`,`prepend`方法插入位置错误 bug
- 新增 `disabled` 方法,可禁用组件
- 新增 `setValue`方法,可批量修改组件值
- 新增 `show` 方法,可显示/隐藏表单
- 新增 `claerValidateState`方法,可手动情况表单错误信息
- 支持 自定义组件监听`disabled`事件,组件禁用时触发
- 支持 自定义组件监听`reset-field`事件,组件重置时触发
- 移除 部分错误提示
- 优化 项目打包,**文件缩小20kb**
- 支持 自定义内置重置按钮,提交按钮点击事件




#### 1.5.4 (2019-01-15)

- 优化 内部结构
- **重构 组件增加,修改,删除功能**
- **支持 自定义内部嵌套内置组件**
- 优化 **自定义组件可无需设置` field`**
- 优化 表单重载功能
- **新增 全局配置项`form.size`**,配置表单元素尺寸
- 移除 自定义组件缓存功能
- 修复 事件重复触发bug
- 优化  `$f `需要频繁获取的问题
- 新增 `$f.component()`方法,**可获取自定义组件生成规则**
- 新增 `$f.changeValue(field,value)`方法,该方法是`$f.changeField`的别名
- 新增 `$f.rule`属性,可获取表单的生成规则
- 修复`select`组件事件不触发`bug`


#### 1.5.2 (2018-12-31) <Badge text="金猪年" type="warn"/>

- 新增 upload 组件**列表样式**
- 修改 upload 组件按钮图标
- 修复 upload 组件上传 成功后不显示 bug
- 新增 自定义`datePicker`,`timePicker`,`select`组件 **slot** 功能 
- 新增 表单重载后回调函数`onReload`全局配置项,可用于更新`$f`
- 新增 组件`className`配置项,设置组件的 class



#### 1.5.2 (2018-12-26)

- 修复 `rule.value`未同步 bug
- 修复 `options.mounted` 多次触发 bug
- 增强 `iframeHelper`,新增全局方法`form_create_helper`
- 新增 `emitPrefix` 配置项,可自定义 组件`emit `事件的前缀
- 优化 `iview` 版本获取
- 新增 `option.submitBtn.col` 配置项,自定义提交按钮布局规则
- 新增 `option.resetBtn.col` 配置项,自定义重置按钮布局规则
- 新增 通过 `v-model` 获取$f



#### 1.5.1 (2018-12-17)
* 修复 意外添加字段的 bug
* 修复 maker 生成器`directives`方法 bug
* 新增 upload 组件`props.maxLength`参数默认为0
* 增强 maker 生成,新增方法`uploadFile`,`uploadImage`,`uploadFileOne`,`uploadImageOne`

* 优化 `upload`,`frame` 组件样式



#### 1.5.0 (2018-12-15)

* 优化 **内部重构**
* 优化 内置组件缓存功能,**按需重新渲染**
* 优化 **性能优化**,优化内部结构,优化内部事件机制,**性能秒杀之前所有版本**
* 增强 **maker 生成器功能**,可直接根据具体type生成,如`datePicker`组件的`.date`、`.dateRange`等
* 新增 `options`、`onSuccess` 方法,重新修改 options 配置
* 新增 `sync(field)`**手动刷新**指定组件、和`reflash`方法**手动全局刷新**
* 新增 `autoComplete`  **自动生成组件**
* 增强 自定义组件
* 新增 `createTmp `的别名`template`
* 修复 自定义组件获取 `$el`
* 修复 `upload` 组件上传失败后会显示新图片
* 新增 `options.mounted`增加参数`$f`
* 修复 `checkbox`  和`radio`组件首屏加载时选中 bug
* 新增  配置参数`options.switchMaker=ture`是否将规则中的 maker 生成器自动转换为对象
* 新增 配置参数`options.iframeHelper=false`是否开启 `iframe`组件 **子页面助手函数**`${field}_change` ,**快速修改该组件的 value**.**跨域无效**


#### 1.4.6 (2018-11-25)

* 修复 `upload` 组件 `onRemove` 不触发bug
* 修复 `ie` 下兼容性问题
* 修复 `checkbox,radio` 组件不能选中 bug
* 修复 滑块组件不传值时默认 NAN bug

#### 1.4.5 (2018-11-12)
* 优化 上传组件图标显示
* 修复 上传组件图片无法删除 
* 新增 `options.mounted` 表单创建成功后的回调函数
* 支持 `iview>=3.1.4`版本- 
* 修复 上传组件图片无法删除 bug

#### 1.4.4 (2018-11-4)
* 优化 内部功能优化,参数优化
* 新增 使用 **reload 更新生成规则**  `$f.reload(newRules)`
* 新增 **标签模式下生成规则发生变化时表单自动刷新**
* 修复 npm run dev命令无法有时打开 Demo

#### 1.4.3 (2018-10-21)
* 修复 ie 兼容性问题,hidden 组件bug
* 新增 使用 template 快速生成自定义组件 `maker.createTmp(template,vm)`


#### 1.4.2 (2018-9-8)

* 新增  `bind`方法.以键值对的方式获取双向数据绑定的表单数据
* 修改  `model`方法. 修改为 `form = $f.model()`无需再传入对象
* 新增  `hidden` 和`visibility`方法设置组件的隐藏和显示

#### 1.4.0 \(2018-8-26\)

* 新增 打包命令`build`和调试命令`dev`

* 修复 frame,tree,inputNumber组件,弹出框BUG

* 新增 表单重置按钮,默认不显示

* 新增 frame组件关闭事件`cancel`

* 优化 maker规则生成器

* 新增 使用标签模式生成

* 新增 **生成任意标签组件**`maker.create(componentName)`\([点击查看iviewUI需要加`i-`前缀的组件列表](#iviewUI需要加`i-`前缀的组件列表)\)

* 新增 表单**重置按钮**

* 新增 标签模式下支持**emit触发事件**

#### 1.3.3 \(2018-8-4\)

* 新增 增加**col栅格布局**规则,设置组件的布局

* 新增 **树型组件**

* 新增`$f.set`方法

#### 1.3.2 \(2018-8-3\)

* 修复 多级联动,时间,日期组件初始化值的BUG

#### 1.3.1 \(2018-6-25\)

* 修复 无法获取时间组件值的bug

#### 1.3.0 \(2018-6-24\)

* 优化和精简内部结构

* 支持 双向数据绑定,可动态修改组件的值和配置参数。单独绑定`make.model(obj,field=''')`,批量绑定`$f.model(obj)`

* 支持 使用`window.formCreate`全局方法快速创建表单，也可以在Vue内部使用`this.$formCreate`

* 新增`option.mounted`事件 ，当组件加载完成后触发

* 修复 一些BUG

#### 1.2.3 \(2018-6-13\)

* 新增 **frame组件**,可通过iframe扩展功能,例如:在已有素材库中选择图片,文件等,图标等定制功能扩展
* 修改 Upload组件type为file时默认不可预览

#### 1.2.2 \(2018-5-27\)

* 修复 Bug
* 修复 显示问题

#### 1.2.0 \(2018-5-27\)

* 内部结构优化

* 新增 **组件规则生成器**`$formCreate.maker`

* 新增 **滑块、评分组件**

* 优化 文件上传组件

* 修复 上传组件无法验证等问题

> 感谢[wxxtqk](https://github.com/wxxtqk) \| [williamBoss](https://github.com/williamBoss)

#### 1.1.7 \(2018-5-18\)

* 修复表单排序问题

* 添加上传图片组件默认预览事件

#### 1.1.6 \(2018-5-17\)

* 修复 require加载问题

* 支持 **cmd,amd加载**

#### 1.1.5

1. 修复时间,日期组件值获取问题
2. 修复同时生成多个form表单冲突问

> 感谢 [时光弧线](https://github.com/shiguanghuxian)

#### 1.1.4

1. 新增动态添加表单元素功能
2. 优化操作接口

#### 1.1.0

1. 内部结构重新
2. 优化上传组件,时间组件
3. 添加多级联动组件
4. 添加多级联动组件的省市区json数据
5. 表单元素事件扩展


