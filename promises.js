const promises1 = new Promises((resolve,reject)=>{
    let success = true
    if(success){
        resolve({
         username: "Sparsh Soni",
         location: "Ghaziabad"
        })
    }
    else{
        reject(new Error("user not fetched"))
    }
})
console.log(promises1)
