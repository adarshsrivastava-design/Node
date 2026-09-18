function greet(username , callback){
    console.log("welcome")
    if(typeof callback === "function"){
        callback(username)
    }
}

greet("zishan",(username)=>{
    console.log("Hello, ",username)
})