async function getData(id) {
  return new Promise((resolve, reject) => {
    if (id === 105) {
      reject("an error uccured");
    } else {
      setTimeout(() => {
        console.log("the data is" + id);
        resolve("Success");
      }, 3000);
    }
  });
}

await getData(102);
await getData(103);
await getData(104);
await getData(105);
await getData(106);

// function getData(id){

//     return new Promise((resolve,reject)=>{
//         if(id===105){
//             reject("an error uccured");
//         }
//         else{
//             setTimeout(()=>{
//         console.log("the data is"+id);
//         resolve("Success");
//     },3000);
//         }

//     });

// }

// getData(102)
// .then(()=>getData(103))
// .then(()=>getData(104))
// .then(()=>getData(105))
// .then(()=>getData(106))
// .then(()=>getData(107))
// .catch(()=>console.log("Error occured"));

// let promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("i am promise");
//         resolve("Success");
//     },3000);
// });
