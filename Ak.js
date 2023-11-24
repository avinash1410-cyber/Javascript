"use strict";
/*
for the new syntax of javascript 
 */


// console.log("Avinash")
// const naame="Avinash"
// // naame="Kumar"
// let city="Delhi"
// var age=24
// let value

// value will be undefined


// console.table([naame,city,age,value]);

// console.log(3+3);


// let name="Avinash"
// age=23
// let login=true

//DATA TYPES

//PRIMITIVE
//number
//bigint
//string
//boolean
//null==>standalone value (type)
//undefined==>not defined
//symbol=>unique

// const id=Symbol('123')
// const id2=Symbol('123')

// console.log(id==id2);


// const no1=123
// const no2=123

// console.log(no1==no2);


//NON PRIMITIVE(refrence)
//objects

// const obj={

//     name:"ak",
//     age:23,
// }

//Array
//const hr=["Iron man","batman","Thor"]




//Functions

// const myfn=function(){
//     console.log("Hi Ak");
// }


// console.log(typeof obj);

// console.log(typeof(age));
// console.log(typeof null);
// console.log(typeof undefined);


//conversion


// let score=33
// console.log(typeof score);
// score="33abc"
// console.log(typeof score);
// console.log(score);
// let No_score=Number(score)
// console.log(typeof score);
// console.log(No_score);
// score=null
// console.log(score);
// No_score=Number(score)
// console.log(typeof score);
// console.log(No_score);

// score=undefined
// console.log(score);
// No_score=Number(score)
// console.log(typeof score);
// console.log(No_score);

// score=false
// console.log(score);
// No_score=Number(score)
// console.log(typeof score);
// console.log(No_score);

//READ ABOVE IMPORTANT
//33-->33
//"ak"-->NaN
//true-->1


// let done="" //empty string ==>false,string =true,1=true,false=0
// let isdone=Boolean(done)
// console.log(isdone);

// let no=true
// console.log(typeof no);
// let st=String(no)
// console.log(st);
// console.log(typeof st);

//*********************OPERATIONS********************************/

// let val=3
// let negval=-val
// console.log(negval);
// console.log(2**3);
// console.log(2%3);


// let st="Hi"
// let st2=" Ak"
// let st3=st+st2

// console.log(st3);

// console.log("1"+2)//give 12
// console.log("1"+2+2)//give 122
// console.log(2+2+"1")//give 41
// console.log(+true);



//##################COMPARISION#########################

// console.log("2">1);
// console.log("2">10);


// console.log(null>-1);
// console.log(null==0);//== is double equal not an comaprision one checker
// console.log(null>=0);


// console.log(undefined>0);
// console.log(undefined==0);
// console.log(undefined>=0);



//===
// console.log("2"===2);
// console.log("2"==2);



//+++++++++++++++++++MEMORY+++++++++++++++++++++++++++++
//primitive-->stack memory-->given only refrence
//non primitive-->heap memory-->give original value 



// let username="Avinash"
// let copyname=username

// copyname="Kumar"

// console.log(username);
// console.log(copyname);


// let userone={
//     name:"Avinash",
//     age:23,
// }

// let copyusere=userone

// copyusere.name="Ashish"

// console.log(copyusere.name);
// console.log(userone.name) 




//**************************STRING**************************** */
// let username="Avinash"
// let age=23

// console.log(`my name is ${username} and i am ${age} year old`);

// let naame=new String("Avinash-kumar-from-delhi")

// console.log(naame[5]);
// console.log(naame.__proto__);
// console.log(naame.length);
// let up=naame.toUpperCase()
// console.log(up);
// console.log(naame.toUpperCase());
// console.log(naame.charAt(3));
// console.log(naame.indexOf("v"));

// let sub=naame.substring(1,3)
// console.log(sub);
// sub=naame.slice(0,-1)
// console.log(sub);

// let spaci="     Avina      "
// console.log(spaci.trim());
// console.log(spaci);
// console.log(spaci.replace("A","ZZZ"));
// console.log(spaci.includes("vin"));
// console.log(spaci.includes("bgdfs"));


// console.log(naame.split("-"));




//************************NUMBERS*********************************/
// let balance=new Number(100)

// console.log(balance.toString().length);
// console.log(balance.toFixed(3));

// let no=23.789
// console.log(no.toPrecision(3));
// no=123.7862
// console.log(no.toPrecision(3));
// console.log(no.toPrecision(4));
// no=10000000
// console.log(no.toLocaleString());
// console.log(no.toLocaleString('en-IN'));


//****************************MATH*********************************/
// console.log(Math.abs(-1));
// console.log(Math.ceil(3.12));
// console.log(Math.floor(8.56));
// console.log(Math.max(1,3,0,3));
// console.log(Math.min(1,3,0,3));


// console.log(Math.floor(Math.random()*100+1));
// 1 added so that 0 will not be come 
// random alsways give value b/w 0 and 1

// let min=10
// let max=20
// console.log(Math.floor(Math.random()*(max-min+1))+min);

//++++++++++++++++++++++++++DATES+++++++++++++++++++++++++++++++++++
// refrence date -->jan 1 1970
// let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

//Date is an object data types
// let created_date=new Date(2023,0,23,12,59)

// console.log(created_date.toString());
// let new_date=new Date('2023-01-24')
// console.log(new_date.toDateString());

// new_date.toLocaleString('default',{
//     month:"short",
//     dateStyle:"long",
// })





//+++++++++++++++++++++++ARRAY+++++++++++++++++++++++++++++++
//let my_arr=[2,3,8,7,3,4,2,8] //resizable
// console.log(my_arr[5]);
//javascript -->copy operation create-->Shallow Copy-->same refrence point(change in copy chaqnge in orginal)
//Deep Copy-->Not same refrence point(change in copy but not chaqnge in orginal)

// let my_heroes=["batman","Superaman"]
// let new_way=new Array(8,2,9,7,3)

//Array methods

// my_arr.push(98)
// console.log(my_arr);
// console.log(my_arr.pop())
// my_arr.unshift(10)//put 10 in the start
// console.log(my_arr);
// my_arr.shift()
// console.log(my_arr);
// console.log(my_arr.includes(10));
// console.log(my_arr.indexOf(3));

// let str_frm=my_arr.join() //join and convert to string 
// console.log(str_frm);


// let myn1=new_way.slice(1,3)
// console.log(myn1);
// console.log(new_way);
// let myn2=new_way.splice(1,3)
// console.log(new_way);
// console.log(myn2);


// let mrvl=["captain america","thor","iron man"]
// let dc=["batman","superman","wonder woman"]

// mrvl.push(dc)

// console.log(mrvl);
// console.log(mrvl[3][1]);
// let all=mrvl.concat(dc)
// console.log(all);


// let all_new=[...mrvl,...dc]
// console.log(all_new);

// let other=[11,119,[3,5],[2,3,5,8,[3,5,6],1,9],0,10]
// let single=other.flat(Infinity)

// console.log(single);


// console.log(Array.isArray("Avinash"));
// console.log(Array.from("Avinash"));

// let sc1=10
// let sc2=80
// let sc3=50

// console.log(Array.of(sc1,sc2,sc3));







//********************************OBJECTS*******************************/
//singleton
//object literals

// let sym=Symbol("Ashish Kumar")


// let user={
//     name:"Avinash",
//     age:23,
//     city:"Delhi",
//     college:"DTU",
//     "full name":"Avinash Kumar",
//     [sym]:"Ashish",
// }



// console.log(user["name"]);
// console.log(user.age);
// console.log(user["full name"]);//dot not work here 
//console.log(user[sym]);









// user.greetings=function(){
// console.log("Hi Mr How Are You ?");
// }


// user.greetings2=function(){
//     console.log(`Hello Mr. ${user["full name"]}`);
//     }

// console.log(user.greetings2());




///Objects




// let user=new Object()




// user = {
//     "email": "avi@gmail.com",
//     "username": {
//         "fullname": {
//             "firstname": "Avinash",
//             "lastname": "Kumar",
//         },
//         "nickname": "Lala"
//     }
// };


// console.log(user.username.fullname); // Outputs: Avinash
// console.log(user.username.fullname.lastname);  // Outputs: Kumar
// console.log(user);



//combining Objects

// let o1={1:"one",2:"two"}
// let o2={3:"three",4:"four"}
// let o5={5:"five",6:"six"}

// let o3=Object.assign({},o1,o2)
//console.log(o3);


// let o4=Object.assign({},o1,o2,o5)
// let o4={...o1,...o2,...o5}
// console.log(o4);


// let y99user=[{
//     email:"av@gmail.com0",
//     city:"Delhi0",
//     name:"Avinash0"
// },
// {
//     email:"av@gmail.com1",
//     city:"Delhi1",
//     name:"Avinash1"
// },
// {
//     email:"av@gmail.com2",
//     city:"Delhi2",
//     name:"Avinash2"
// },
// ]



// console.log(y99user[1].email);

// console.log(Object.keys(y99user[0]));
// console.log(Object.values(y99user[0]));
// console.log(Object.entries(y99user[0]));
// console.log(y99user[1].hasOwnProperty('name'));

///////////////////////////


// let course={
//     duration:6,
//     price:1000,
//     location:"Delhi"
// }

//destrcturing

//let {duration:du}=course
//console.log(duration);

//console.log(du);


//////////////////////FUNCTIONS///////////////////////




// function sayHi(){
//     console.log("Hi");
// }

// sayHi()


// function add(one,two){
//     console.log(one+two);
// }


// function add(one,two){
//     console.log(one+two);
//     return one+two
// }

// let ans=add(9,"6")

// console.log(ans);




// function login(username="AAAAA"){
//     if (!username){
//         console.log("please enter a username");
//         console.log("Default");
//         return
//     }
//     return `${username}`
// }

// console.log(login());





//Rest operator/spread operator


// function calculate(...num){
//     return num
// }



// function calculate(v1,v2,...num){
//     return num
// }


// console.log(calculate(200,400,500,600))



// function handleObject(anyObject){
//     return `Hi mr ${anyObject.username} u have ${anyObject.balance} left`

// }

// let user={
//     username:"Avinash",
//     balance:9999999999999999999,
// }



// console.log(handleObject(user));

// console.log(handleObject({
//     username:"Avinash Kumar",
//     balance:9999999999999999999,
// }));


////////////////////////////////Scope////////////////////////////////

//var c = 300
// let a = 300
// if (true) {
//     let a = 10
//     const b = 20
//     // console.log("INNER: ", a);
    
// }



// console.log(a);
// console.log(b);
// console.log(c);


// function one(){
//     const username = "hitesh"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);

//      two()

// }

// one()

// if (true) {
//     const username = "hitesh"
//     if (username === "hitesh") {
//         const website = " youtube"
//         // console.log(username + website);
//     }
//     // console.log(website);
// }

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


//Will work
// console.log(addone(5))

// function addone(num){
//     return num + 1
// }



/////Will Give Error 

// addTwo(5)
// const addTwo = function(num){
//     return num + 2
// }



/////////////////////////////ARROW////////////////////////////////////////
// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }

// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()





// console.log(this);//Give Empty -->{}

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()





// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()





// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }


// chai()





// let sum=(num1,num2)=>{
// return num1+num2
// }


//let sum=(num1,num2)=>(num1+num2)//don't have to return in brackets but have to use in {}
// let sum=(num1,num2)=>({username:"Avinash"})
// const addTwo = (num1, num2) => ({username: "hitesh"})
// console.log(sum(4,5));


// Immediately Invoked Function Expressions (IIFE)



// (function chai(){
//     // named IIFE
//     console.log("DB CONNECTED");
// })();


// (()=>{
//     console.log("DB CONNECTED by Arrow method");
// })();


