function getuser(){
const userData = new Promise((resolve,reject)=>{
      let user =true
      if(user){
        reject(new Error("user not exits,"));
      }else{
        resolve({
            username: " josh",
            role: "pt wala"
        });
      }
      return userData;
});
}

const response=await getuser()
console.log(response);
console.log("hello");
