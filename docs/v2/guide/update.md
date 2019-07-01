---
 title: 更新日志 (0.0.4)
---

### 当前版本 0.0.4

--------

#### 0.0.4 (2019-06-30)

- 新增 `$f.toJson`和`formCreate.parseJson` 方法, 将生成规则转为 json 和反转
- 新增 `info` 配置项,配置组件的提示信息
- 新增 `option.info`配置项,设置组件提示信息的相关配置
- 移除 对时间组件,日期组件的值得二次处理
- 增加 `$f.method` 方法不存在时的错误提示
- 增加 `frame` 组件的 `modal` 配置项,可设置`modal`的属性
- 修复 `element-ui` 部分组件 `placeholder` 属性无效问题
- 更新 `element-ui` 时间组件,日期组件 `maker` 生成器

#### 0.0.3

内部功能重构、
功能精简和优化、
扩展更简单


**新功能**
- 自定义组件可转换为表单组件,具有验证和内置组件的功能
- 增加组件的全局配置
- 增加 `name`配置项,自定义组件可配置
- 增加 判断表单是否修改的方法 `changeStatus`
- 增加 获取组件隐藏状态方法`hiddenStatus`
- 增加 `rule.native` 配置项
- 增加 `$f.method` 方法,可调用组件方法

**修改**
- 将 `switch` 组件 `slot` 配置,移动到 `props.slot` 中
- 修改 `$f.validate` 方法的参数
- 修改 `$f.hidden`,`$f.visibility`,`$f.disabled` 方法的参数顺序
- 修改 方法名`$f.submitStatus` => `$f.submitBtnProps`
- 修改 方法名`$f.resetBtnStatus` => `$f.resetBtnProps`
- 重构 `frame` 组件,移动`event`到 `props` 中

**移除**

- 移除 自定义组件相关事件
- 移除 `frame` 组件 spin 配置项
- 移除 全局配置中 `upload` 配置项
- 移除 表单最外层的 `margin` 20px
- 移除 `$f.btn.finish`和`$f.resetBtn.finish` 方法
- 移除 `defaultSlot` 配置项
- 移除 内置组件自动填充默认属性
- 移除 组件规则中的`hidden`和`visibility`属性
- 移除 `upload` 组件 `onSuccess` 中返回 url 自动添加功能