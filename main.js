//function declaration

// let sum = function (parameter1,parameter2) {
//    let a= parameter1;
//    let b=parameter2;
//     console.log("value of parameter 1 is",parameter1,"value of 2 is ", parameter2,"sum is",a+b);
// }
// // sum(3,8);
// let mult= function (parameter1,parameter2,parameter3) {
//    let a= parameter1;
//    let b=parameter2;
//    let c=parameter3;
//     console.log("value of parameter 1 is",parameter1,"value of 2 is ", parameter2,"value of parameter 3 is",parameter3,"product is",a*b*c);
// }
// mult(3,4,6);

// let a=(p1,p2,p3)=>{
//     console.log(p1*p2*p3);
// };
// a(3,2,4);

// (()=>{
//     console.log("IFFE")
// })();

// //tag
// var body =document.getElementsByName("body");
// console.log(body[0]);

// let d = [1,4,5,8,66];
// console.log(d[1]);

// let e = [1,4,5,8,66];
// for(let i=0;i<e.length;i++){
//     e[i]=e[i]*5;
//    console.log(e[i]);
// }
// console.log(e);

// let b=e.map((el,ui) =>{
//     return el*ui;
// })

// console.log(e);
// console.log(b);

// let f = [1,2,3,4,5,6,7,8,9,10];
// for(let i=0;i<f.length;i++){
//     g=f[i]*2;
//    console.log(g);
// }

// for(let i=0;i<f.length;i++){
//     console.log(`2 * ${a[i]}=`,a[i]);
// }
// console.log(f);

// let p = f.map((el,ui)=>{
//     console.log(`2*${el}=`,el*2);
// });

// console.log(f);

// let f = [1,2,3,4,5,6,7,8,9,10,12];
// for(let i=0;i<f.length;i++){
//    if(f[i]%2==0){
//     console.log("value  is even");
//    } 
// }
// let a=prompt("enter the value of a:");
// if(a>=90)
// {
//     console.log("bike");
// }
// else if(a>=80){
//     console.log("party");
// }
// else if(a>=70){
//     console.log("game");
// }
// else{
//     console.log("your not eligible for any of these ");   
// }
// a>60? console.log("pass"):console.log("fail");
// let a=[1,2,3];
// let b=[1,2,3];
// console.log(a[0]==b[0]);
// console.log(a===b);
// __________________________________________________________________________________________________________
// let a=[1,2,3,4,5,6,7,8,9,10];
// let b=a.filter((el)=>{
//  return el%2==0;
// });
// console.log(b);

// let a=[1,2,3,4,5,6,7,8,9,10];
// let b=a.filter((el)=>el>=5).map((el)=>el*7);
// let c=b.map((el)=>el*5);
// console.log(b);

// let a=6
// for(let i=0;i<a;i++){
//     for(let j=0;j<i;j++){
//         console.log("*");
//     }
//     console.log("\n");
// }

// let b=a.reduce((acrtrrc,cur,index)=>{
//     return acrtrrc+cur;
// },0);
 
// console.log(b);

// let acc =10;
// acc=acc+1;
// acc=acc+2;
// acc=acc+3;
// acc=acc+4;
// acc=acc+5;
// acc=acc+6;

// const evensum = a.filter((el) =>el%2==0).reduce((a,e)=>a+e);
// const oddsum = a.filter((el) =>el%2==1).reduce((a,e)=>a+e);
// console.log(evensum,oddsum);

// const c=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// const d=c.map((el,ui)=>{
//     return ui+1;
// });
// console.log(d);
// const evensum=d.filter((el)=>el=>5).filter((el) =>el%2==0).reduce((a,e)=>a+e);
// const oddsum=d.filter((el) =>el%2==1).reduce((a,e)=>a+e);
// console.log(evensum,oddsum);


// tag selectors
// let body = document.getElementsByTagName("h1");
// console.log(body[0]);

// // class selector
// let classes = document.getElementsByClassName("container");
//  console.log(classes[0]);

// // id selector
// let val =document.getElementById("box1");
// console.log(val);

// // querty selector
// let varr=document.querySelector("button");
// console.log(varr);
// // querty selectorAll
// let as=document.querySelectorAll("button");
// console.log(as[2]);

// read operation
// let text=classes[0].textContent;
// console.log(text);

// let txt=classes[0].innerHTML;
// console.log(txt);

// let node=document.getElementsByClassName("container");

// // read operation
// let text=node[0].innerHTML;
// console.log(text);

// let text1=node[0].textContent;
// console.log(text1);

// let b=document.querySelectorAll("button");
// console.log(b[1]);

// b[1].textContent="non decrement"

// let sty=document.querySelector("h1");
// console.log(sty);

// sty.style.color="red";
// sty.style.fontSize="smaller";
// sty.style.backgroundColor="blue";

// // to remove the class
// // sty[1].classList.remove("xyz");

// // toggle class
// sty.classList.toggle("xyz");

// // create tag 
// const v=document.createElement("h3");

// // put content
// v.textContentContent="added from js";

// const div=document.createElement("div");
// const h2 =document.createElement("h2");

// h2.textContent="Anything";
// h2.classList.add="sd";
// div.appendChild(h2);

// document.body.appendChild(div);

// const div=document.createElement("div");
// const button =document.createElement("button");

// button.textContent="hello namaskara";
// button.style.color="red";
// button.classList.add="sd";
// div.appendChild(button);

// document.body.appendChild(div);

// const div=document.createElement('img');
// div.src="data:image/jpeg;base64,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";
// div.alt="iuhiou";
// div.id=""
// document.body.appendChild(div);

// const incButton = document.querySelectorAll("button");

// incButton[0].addEventListener("click",()=>{
//     console.log("button clicked");
// });
// incButton[1].addEventListener("click",()=>{
//     console.log("button clicked");
// });
// incButton[2].addEventListener("click",()=>{
//     console.log("button clicked");
// });

// const btn=document.getElementsByTagName("button");
// const incbtn = btn[0];
// const decbtn = btn[1];
// const resetbtn=btn[2];
// const p=document.querySelector(".val");
// let val=0;

// const handleInc=()=>{
//     val++;
//     p.textContent=val;
// }


// const handledec=()=>{
//     val--;
//     p.textContent=val;

// }


// const init=()=>{

//     val=0;
//     p.textContent=val;

// }

// incbtn.addEventListener("click",handleInc)
// decbtn.addEventListener("click",handledec)
// resetbtn.addEventListener("click",init)
 
// const btn=document.getElementsByTagName("button");
// const incbtn = btn[0];
// const decbtn = btn[1];
// const resetbtn=btn[2];
// const p=document.querySelector(".val");
// let val=0;

// const handleInc=()=>{
    
//     val++;
//     p.textContent=val;
//     if(val>0){
//     p.style.color="red";
// }
// }
// const handledec=()=>{
//     val--;
//     p.textContent=val;
//     if(val<0){
//     p.style.color="green";
// }
// }

// const init=()=>{

//     val=0;
//     p.textContent=val;

// }

// incbtn.addEventListener("click",handleInc)
// decbtn.addEventListener("click",handledec)
// resetbtn.addEventListener("click",init)
 
// var obj={
// id:1,
// name:"Name",
// email:"example@vom",
// data:{
//     address:"Delhi",
//     contact:87439731473,
//     adhar:382082,
//     item:{
//         color:"green",
//         place:"sullia"

//     }
// }
// };
// console.log(obj.email);
// console.log(obj);
// console.log(obj.id);
// console.log(obj.data.address);
// console.log(obj.data.contact);
// console.log(obj.data.item.place);
// JSON.stringify(obj);

// let arr=[
//     {id:1,name:"as"},
//     {id:2,name:"as"},
//     {id:3,name:"as"},
//     {id:4,name:"as"}
    
// ];
// console.log(arr);

// arr.forEach((el)=>console.log(el));
// arr.forEach((el)=>(el.id=el.id*el.id));
// console.log(arr);

// const b=arr.map((el) =>{
//     return el.id=el.id*el.id;
// });
// console.log(b);


// const b=[0,4,0,0,0,0,0,0];
// const c=b.map((el,index)=>{
   
//    return {
//     id:index,
//    name:index+el,
//    as:index+index+el,
//    };
// });
// console.log(c)

// // const evensum = c.filter((el) =>el.id%2==0)
// // const oddsum = c.filter((el) =>el.id%2==1)
// // console.log(evensum,);
// // console.log(oddsum);

// const evensum = c.filter((el) =>el.id%2==0 && el.name%2==0 && el.as%2==0)
// const oddsum = c.filter((el) =>el.id%2==1 || el.name%2==1 || el.as%2==1)
// console.log(evensum);
// console.log(oddsum);


// const fetchData =async() =>{
//  const response=await fetch("https://jsonplaceholder.typicode.com/users")

//  console.log(response.ok);
//  if (response.ok==true){
//  const data=await response.json();
//  console.log(data);
//  }
// };
// fetchData();
// console.log("Hello");

// const fetchData=async() =>{
//    const response =await fetch("https://jsonplaceholder.typicode.com/users");
//    console.log(response.ok);
//    if(response.ok==true){
//       const data =await response.json();
//       console.log(data);
//    }
//    };
//    fetchData();

   
// const fetched=async() =>{
//    const response =await fetch("https://jsonplaceholder.typicode.com/todos");
//    console.log(response.ok);
//    if(response.ok==true){
//       const data =await response.json();
//       console.log(data);
//    }
//    };
//    fetchData();
   
// const fetchData=async() =>{
//    try{
//    const response =await fetch("https://jsonplaceholder.typicode.com/todos");
//    // console.log(response.ok);
//    if(response.ok==true){
//       const data =await response.json();
//       console.log(data);
//    }else{
//       throw new Error("somethimg is wrong");
//    }}catch (err){
//       console.log("Error",err);
//    }
   
//    };
//    fetchData();

   const fetched=async() =>{
   try{
   const response =await fetch("https://jsonplaceholder.typicode.com/todos");
   // console.log(response.ok);
   if(response.ok==true){
      const data =await response.json();
      console.log(data);
   }else{
      throw new Error("somethimg is wrong");
   }}catch (err){
      console.log("Error",err);
   }
   
   };
   fetched();


   
   const get=async() =>{
   const response =await fetch("https://jsonplaceholder.typicode.com/photos");
   console.log(response.ok);
   const data =await response.json();
   console.log(data);
   };
   get();

   

   // const fetchs=async() =>{
   // const response =await fetch("https://jsonplaceholder.typicode.com/albums");
   // if(response.ok==true){
   //    const data =await response.json();
   //    console.log(data);
   // }else{
   //    throw new Error("somethimg is wrong");
   // }

   // };
   // fetchs();


   // const x=async() =>{
   //    if (){
   //       const response =await fetch("https://jsonplaceholder.typicode.com/albums");
   //    }
   //    else if(const fetchs==true){
   //       const response =await fetch("https://jsonplaceholder.typicode.com/photos");
   //    }
   //   else{
   //      const response =await fetch("https://jsonplaceholder.typicode.com/todos");
   //   }
   // if(response.ok==true){
   //    const data =await response.json();
   //    console.log(data);
   // }else{
   //    throw new Error("somethimg is wrong");
   // }

   // };
   // fetchs();


   