# Component common configuration

The common configuration of components can be implemented through the `global` configuration item in the global configuration, and all configuration items of the component are supported.

[Global Configuration](/en/v2/guide/global-options)

### Set `col` for all components to `{span:6}` and disable
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
### Setting up the `upload` component to upload a successful callback event

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