function Reference(obj) { 
    console.log("Inside Call by Reference Method"); 
    obj.a =obj.b+obj.a;
    obj.b =obj.a-obj.b;
    obj.a =obj.a-obj.b;
    console.log(obj);
  } 
  var obj = {};
  obj.a = prompt("Enter num a: ");
  obj.a= Number(obj.a);
  obj.b = prompt("Enter num b: ");
  obj.b= Number(obj.b);
  console.log("Before Call by Reference Method"); 
  console.log(obj);
  Reference(obj) ;
  console.log("After Call by Reference Method"); 
  console.log(obj);