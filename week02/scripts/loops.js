const DAYS = 6;
const LIMIT = 30;

let studentReport = [11, 42, 33, 64, 29, 37, 44]
let result;
let whileCondition;

for(let i=0; i<studentReport.length; i++){
    if(studentReport[i] < LIMIT){
        console.log(studentReport[i])
    }
    
}
//while loop
while(i=0 < studentReport.length){
    
    if(studentReport[i] < LIMIT){
        console.log(studentReport[i])
    }
    i++;
}

//forEach loop
studentReport.forEach(function (item){
    if(item < LIMIT){
        console.log(item);
    }
});

//for....in loop
for (i in studentReport){
    if(studentReport[i] < LIMIT){
        console.log(studentReport[i]);
    }
}

