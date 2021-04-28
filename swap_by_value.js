function value(a,b){
    a=Number(a);
    b=Number(b);
    a = a+b;
    b = a-b;
    a = a-b;
    console.log("In Function: ");
    console.log("After Swap value of a = "+ a);
    console.log("After Swap value of b = "+ b);
}
 
var var1 = prompt("Enter num a: ");
var var2 = prompt("Enter num b: ") ;
console.log("Before Swap value of a = "+var1);
console.log("Before Swap value of b = "+var2);

value(var1,var2);
console.log("After Swap outside Function: ");
console.log("After Swap value of a = "+var1);
console.log("After Swap value of b = "+var2);