const promises1 = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve({username: "adarsh srivastava", location: "noida"}
            
        );
    } else {
        reject("promise rejected!");
    }
});
console.log(promises1)

const promises2 = new Promise((resolve, reject) => {
    let success = true;
    if (success){
        resolve("promise resolved successfully");
    }
    else{
        reject("promises rejected!")
    }
});
console.log(promises2)

Promise.all([promises1, promises2])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

Promise.any([promises1, promises2])
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.log(error.name)
    })