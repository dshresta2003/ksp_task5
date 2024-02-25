//Arithmetic operators
console.log("Arithmetic operators");
let num3=8;
let num4=3;
let num45=1;
console.log("Sum: "+ num3+num4);
console.log("Mutliply: "+ num3*num4);
console.log("Sub:"+ (num3-num45));
console.log("division: "+ num3/num4);
console.log("modulus: "+ num3%num4);
console.log("Exponential: "+ num3**num4);
console.log("PreDecrement: "+ --num3);
console.log("PostIncrement: "+ num4++);
//Assignmental operators
console.log("Assignmental operators");
let num5=9;
console.log(num5+=2);
console.log(num5-=1);
console.log(num5*=4);
console.log(num5/=3);
console.log(num5%=2);
console.log(num5**=5);
//comparision operators
console.log("comparision operators");
let num6=5
let num7=7
console.log("equal: "+num6==num7);
console.log("tripleequal: "+num6===num7);
console.log("NotEqual: "+num6!=num7);
console.log("Lessthan: "+num6<num7);
console.log("Greaterthan: "+num6>num7);
console.log("lessthanequals: "+num6<=num7);
console.log("greaterthanequals: "+num6>=num7);
//Logical operators
console.log("logical operators");
let num8=true;
let num9=false;
let num10=true;
console.log("LogicalOr "+num8 || num9);
console.log("LogicalNot "+!num9);
console.log("LogicalAnd "+num8 || num10);
//Functions
console.log("Functions");
function add(number16,number22)
{
    console.log("Sum:"+number16+number22);
}
add(8,9);
function sub(number11,number33)
{
    console.log("diff:"+(number11-number33));
}
sub(17,9);
function mul(number17,number31)
{
    console.log("mul:"+number17*number31);
}
mul(17,2);
//Conditional statements
console.log("Conditional statements");
num19=12;
if(num19>14){
    console.log("Okay");
}
else if(num19<14){
    console.log("good");
}
else{
    console.log("not found");
}
//Loops
console.log("Loops");
//for loop
console.log("For Loop");
sum=0;
for(i=0;i<5;i++)
    sum+=i;
console.log("The sum is",sum);
//while loop
console.log("whileloop");
i=1;
while(i<5)
{
    console.log(i);
    i++;
}
//string methods
console.log("String methods");
const name1="Shresta";
console.log("Length:"+ name1.length);
console.log("Slice:"+ name1.slice(1,5));
console.log("Split:"+ name1.split(" "));
console.log("replace:"+ name1.replace("Shresta","Dhatrika"));
console.log("Concat:"+ name1.concat("Dhatrika"));
console.log("Uppercase:"+ name1.toUpperCase());
console.log("lowercase:"+ name1.toLowerCase());
console.log("Index of:"+ name1.indexOf("e"));
console.log("Starts with:"+ name1.startsWith("S"));
console.log("Ends with:"+ name1.endsWith("k"));


