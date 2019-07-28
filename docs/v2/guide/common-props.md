# 组件公共配置

通过全局配置中的`global`配置项可实现组件的公共配置,支持设置组件所有的配置项

[全局配置](/v2/guide/global-options)

### 设置所有组件的`col`为`{span:6}`,并且禁用

```js
{
    global: {
      '*': {
          props: {
              disabled: true
          },
          col: {
              span: 6
          }
      }
    }
}
```

### 设置 `upload` 组件上传成功的回调事件

```js
{
    global: {
      upload: {
          props: {
              onSuccess: function(res, file){
                file.url = res.data.url;
              }
          }
      }
    }
}
```