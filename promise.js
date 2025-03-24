//const data={name:"buddy",age:3};
function fetchdata(){
   return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(data)
    }, 2000);
   })}
fetchdata().then(
    data=>{
        console.log("Data:",data);
    })
    .catch(err=>{
        console.log("Error:",err

        )
    })

