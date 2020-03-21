# Event listener

**Through the configuration items `on` and` emit`, you can listen to events thrown in the component**, such as listening to the `change` event of the` input` component. For the event name, refer to [Input](/en/v2/element-ui/components/input.html#events)

## Listening to events through the configuration item `on`
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
                    }
                },
                rule:[
                    {
                        type:'input',
                        field:'event',
                        title:'change',
                        on:{
                            change:()=>{
                                alert(`change!![${this.fApi.getValue('event')}]`);
                            }
                        }
                    }
                ]
            }
            
        }
    }
</script>
```
:::

## Listen for events via the configuration item `emit`

> Only supported in component mode

Event name is `${field}-${eventName}`

::: demo
```html
<template>
    <FormCreate :rule="rule" v-model="fApi" :option="options" @input-field-change="change" @input-field2-blur="blur"/>
</template>

<script>
    export default {
        data(){
            return {
                fApi:{},
                options:{
                    onSubmit:(formData)=>{
                        alert(JSON.stringify(formData));
                    }
                },
                rule:[
                    {
                        type:'input',
                        field:'inputField',
                        title:'change',
                        emit:['change']
                    },
                    {
                        type:'input',
                        field:'inputField2',
                        title:'blur',
                        emit:['blur']
                    }
                ]
            }
            
        },
        methods:{
            change(){
                alert(`change!![${this.fApi.getValue('inputField')}]`);
            },
            blur(){
                alert('blur!');
            }
        }
    }
</script>
```
:::


## Customize event prefix via configuration item `emitPrefix`

Event name is `${emitPrefix}-${eventName}`

::: demo
```html
<template>
    <FormCreate :rule="rule" v-model="fApi" :option="options" @prefix1-change="change" @prefix2-blur="blur"/>
</template>

<script>
    export default {
        data(){
            return {
                fApi:{},
                options:{
                    onSubmit:(formData)=>{
                        alert(JSON.stringify(formData));
                    }
                },
                rule:[
                    {
                        type:'input',
                        field:'inputField',
                        title:'change',
                        emit:['change', 'blur'],
                        emitPrefix:'prefix1'
                    },
                    {
                        type:'input',
                        field:'inputField2',
                        title:'blur',
                        emit:['blur'],
                        emitPrefix:'prefix2'
                    }
                ]
            }
            
        },
        methods:{
            change(){
                alert(`change!![${this.fApi.getValue('inputField')}]`);
            },
            blur(){
                alert('blur!');
            }
        }
    }
</script>
```
:::


## Listening to events via the `on` method


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
                    }
                },
                rule:[
                    {
                        type:'input',
                        field:'inputField',
                        title:'change',
                        emit:['change', 'blur'],
                        emitPrefix:'prefix1'
                    },
                    {
                        type:'input',
                        field:'inputField2',
                        title:'blur',
                        emit:['blur'],
                    }
                ]
            }
            
        },
        methods:{
            change(){
                alert(`change!![${this.fApi.getValue('inputField')}]`);
            },
            blur(){
                alert('blur!');
            }
        },
        mounted(){
            this.$nextTick(()=>{
                this.fApi.on('prefix1-change',this.change);
                this.fApi.on('input-field2-blur',this.blur);
            })
        }
    }
</script>
```
:::

## Inject `$f` and custom parameters into the event

>Support multiple ways to enable event injection

::: demo
```html
<template>
    <FormCreate :rule="rule" v-model="fApi" :option="options" @prefix1-change="change"/>
</template>

<script>
    export default {
        data(){
            return {
                fApi:{},
                options:{
                    onSubmit:(formData)=>{
                        alert(JSON.stringify(formData));
                    }
                },
                rule:[
                    {
                        type:'input',
                        field:'inputField',
                        title:'change',
                        emit: [{
                            name: 'change',
                            inject: ['Custom parameters, unlimited data types']
                        }],
                        emitPrefix:'prefix1',
     
                    },
                    {
                        type:'input',
                        field:'inputField2',
                        title:'blur',
                        inject:true,
                        on:{
                            blur: this.blur
                        }
                    }
                ]
            }
            
        },
        methods:{
            change(inject){
                alert(`change: ${inject.inject}[${inject.$f.getValue('inputField')}]`);
            },
            blur(inject){
                alert(`blur: ${inject.self.title}`);
            }
        }
    }
</script>
```
:::

Data structure of the inject parameter
```ts
{
    $f:Object,//api
    rule:Array,//Generation rule
    self:Object,//Current generation rule
    option:Object,//Global configuration
    inject:Any,//Custom injection parameters
}
```

**Parameter injection can also be enabled via the global configuration item `injectEvent: true`**