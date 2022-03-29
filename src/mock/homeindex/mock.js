let Mock = require("mockjs")

let data = [
    { id: 0, name: "朴树", text: "《平凡之路》" },
    { id: 1, name: "刀郎", text: "《情人》" },
    { id: 2, name: "毛不易", text: "《消愁》" },
    { id: 3, name: "小刚", text: "《青花》" },
    { id: 4, name: "任贤齐", text: "《天涯》" },
]
Mock.mock("/api/homeindex", "get", function(config) {
        console.log(config)
        return data
    })
    // /\/api\/homeindex\/\d/  
Mock.mock(/\/api\/homeindex\/\d/, "delete", function(config) {
        console.log(config.url) ///api/homeindex/0
        let arr = config.url.split("/")
        let id = arr.pop() //用于删除数组的最后一个元素并返回删除的元素。
        data.splice(id, 1);
        // data = data.map(function(item,index){
        //     item.id = index
        // })
        data.forEach(function(item,index) {
            item.id =index
        })
        return data
    })
    // 修改
Mock.mock(/\/api\/homeindex\/edit\/\d/, "put", function(config) {
    console.log(config);
    let arr = config.url.split("/");
    let id = arr.pop() //获取id
    let canshu = config.body //string
    canshu = JSON.parse(canshu); //obj
    data[id].name = canshu.name
    data[id].text = canshu.text
    return data
})

//添加 
Mock.mock("/api/homeindex",'post',function(config){
    let obj = JSON.parse(config.body)
    let name = obj.name
    let text = obj.text
    data.push({id:data.length,name,text})
    return data
})