//function add(a,b){
   // const sum=a+b;
   //// return sum;

//}
//function myfun(c,d){
  //  return c-d;
//}
//module.exports={add,myfun};
//use module.exports only once becoz it can overwrite;
//using export object ;
exports.add = (a,b) => {a+b};

exports.sub =  (a,b) =>  a-b;