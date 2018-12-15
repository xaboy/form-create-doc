module.exports = {
    title: 'form-create 文档', 
    description: 'form-create是具有动态渲染、数据收集、校验和提交功能的表单生成器，支持双向数据绑定和事件扩展，组件包含有复选框、单选框、输入框、下拉选择框等表单元素以及省市区三级联动,时间选择,日期选择,颜色选择,滑块,评分,框架,树型,文件/图片上传等功能组件。',
    head: [
        ['link', { rel: 'icon', href: '/img/form-create.png' }],
        ['script', { type: 'text/javascript', src: '/static/index.js' }],
    ],
    themeConfig: {
	    editLinks: true,
	    editLinkText: '帮助我改善此页面！',
	    repo: 'xaboy/form-create-doc',
	    sidebar: [
	      '/guide/install',
	      '/guide/start',
	      '/guide/global',
	      '/guide/update',
	      {
	      	title:'深入',
	      	collapsable:false,
	      	children:[
	      		'/guide/instance',
	      		'/guide/col',
	      		'/guide/maker',
	      		'/guide/question',
	      		'/guide/demo',
	      	]
	      },
	      {
	      	title:'内置组件',
	      	collapsable:false,
	      	children:[
	      		'/components/hidden',
	      		'/components/input',
	      		'/components/input-number',
	      		'/components/auto-complete',
	      		'/components/radio',
	      		'/components/checkbox',
	      		'/components/select',
	      		'/components/switch',
	      		'/components/cascader',
	      		'/components/date-picker',
	      		'/components/time-picker',
	      		'/components/color-picker',
	      		'/components/upload',
	      		'/components/rate',
	      		'/components/slider',
	      		'/components/tree',
	      		'/components/frame',
	      	]
	      },
	      {
	      	title:'其他',
	      	collapsable:false,
	      	children:[
	      		'/other/reference',
	      		'/other/iview-components',
	      		'/other/time-format',
	      		'/other/contact',
	      	]
	      },
	    ]


	}
}
