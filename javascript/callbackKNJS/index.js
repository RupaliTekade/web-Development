function getData(id,getNextData){
    setTimeout(()=>{
        console.log("the data is"+id)

        if(getNextData){
            getNextData();
        }
    }
        ,3000)
}


getData(101,() => {
    getData(102, ()=>{
        getData(103, ()=>{
            getData(104, ()=>{
                getData(105);
            
        });
    
        });

    });
});





















//understanding actual and formal parameters

// //file1
// //import calculate from "file2"
// function sum(x,y){
//     console.log(x+y)
// }


// let p = 2;
// let q = 5;
// console.log(calculate(2,5,sum));

// //file2
// function calculate(i,j,function1){
//     let a = x+1;
//     let b = j+1;
//     let result = function1(a,b) + 10;
//     return ("the sum is" +result)
// }

