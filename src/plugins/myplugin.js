
let myplugin = function(Vue){
    Vue.prototype.debouncefn = function(fn,wait) {
        let timer = null
        return function() { // 被封装后的新的业务函数
            clearTimeout(timer)
            timer = setTimeout(function(){
                fn() // fn 是业务函数
            },wait)
        }
    }
    Vue.prototype.throttlefn = function() {
        console.log("====")
    }
}
export default myplugin