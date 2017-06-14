/*
	作用：创建函数闭包，动态生成一段代码
	root: window this脚本运行的环境
	factory:
	plug:


	(this,function(){},'bootstrapValidator')
	this:window 运行环境  方便以后的跨平台使用（苹果 电视 等等）
	function(){}工厂函数 
	bootstrapValidator 插件的名称
*/
(function (root,factory,plug) {
	/*
		console.log(root)
		console.log(factory)
		console.log(plug)
		factory.call()  //生成组件
	*/
	factory.call(root,root.jQuery,plug);
	/*
		root 传递的是作用域	
	*/
})(this,function($,plug){
	/*
		this===window；
		plug插件的名称
		this脚本运行的环境
	*/
	/*
		console.log($,plug);
		输出的jQuery函数  以及 插件名称
	*/
	// 实现插件的封装
	$.fn[plug]=function () {
		// alert('###########')
		console.log(this);
		if(!this.is('form')){
			throw new Error('必须针对form表单元素进行处理')
		}
	}
},'bootstrapValidator')