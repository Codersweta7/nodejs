const fs =require("fs");
//sync....blocking request (we need workers to handle tasks, by default thread pole size =4, max?=>8 =>hread pole size 8)
//console.log("1");
//const result =fs.writeFileSync("./test.txt","hello there ! , my name is , sweta..this is sync..a blocking operation ");
//console.log(result);
//console.log("2");

//async;....non blocking operation(direct operation is performed )
fs.writeFile("./test.txt", "hey there this is async", (err)=>{});


//const result  =fs.readFileSync("./contact.txt","utf-8");
//console.log(result);
///async function doesnt return ..
console.log("1");
fs.readFile("contact.txt","utf-8",(err,result) =>{
    console.log(result);
});
console.log("2");//since the function is non -blocking then first 1 and 2 will be printed .
    //if (err)
{
    //console.log("error",err);
}
    //else{
       // console.log(result);
  //  }

//});
//fs.appendFileSync("test.txt",new Date().getDate().toLocaleString());//appends the file.
//fs.cpSync("./test.txt","./copy.txt");
//fs.unlinkSync("./copy.txt");
//console.log(fs.statSync("./test.txt"));

const os = require("os");
console.log(os.cpus().length);//4 this means i have 4 thread poles i.e, 4 workers.during blocking operation.