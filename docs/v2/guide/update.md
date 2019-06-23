---
 title: 更新日志 (2.0.0)
---

### 当前版本 2.0.0

--------


#### 2.0.0

内部功能重构、
功能精简和优化、
扩展更简单


**新功能**
- 自定义组件可转换为表单组件,具有验证和内置组件的功能
- 增加组件的全局配置
- 增加 `name`配置项,自定义组件可配置

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