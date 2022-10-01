"use strict"
// const App=require("app.js");
// import App from "./app.js"
let sel=document.getElementById('options');
let btn=document.getElementById("options-button");
btn.addEventListener('click',function(){
    if(sel.value==0){
        getJEEM();
    }else if(sel.value==1){
        getJEEA();
    }else if(sel.value==2){
        getNEET();
    }
});
function getJEEM(){
    fetch("./JEEM.json")
        .then(response=>response.json())
        .then(data=>{
            if(document.querySelectorAll("li").length>=1){
                let lis=document.querySelectorAll('li');
                let ul= document.querySelector('ul');
                let i=0;
                document.querySelector('ul').innerHTML="";
            }
            let i=0;
            data.forEach(object=>{
                let li=document.createElement('li');
                let ul=document.querySelector('ul');
                let a =document.createElement('a');
                a.href=`${object.link}`;
                a.target='_blank';
                a.class="content";

                // a.rel='noopener noreferrer';
                a.textContent+=object.content;
                li.appendChild(a);
                ul.appendChild(li);
                        
            })
        });
}
function getJEEA(){
    fetch("./JEEA.json")
        .then(response=>response.json())
        .then(data=>{
            if(document.querySelectorAll("li").length>=1){
                let lis=document.querySelectorAll('li');
                let ul= document.querySelector('ul');
                let i=0;
                document.querySelector('ul').innerHTML="";
            }
            let i=0;
            data.forEach(object=>{
                let li=document.createElement('li');
                let ul=document.querySelector('ul');
                let a =document.createElement('a');
                a.href=`${object.link}`;
                a.target='_blank';
                a.class="content";

                // a.rel='noopener noreferrer';
                a.textContent+=object.content;
                li.appendChild(a);
                ul.appendChild(li);
                        
            })
        });
}
function getNEET(){
    fetch("./NEET.json")
        .then(response=>response.json())
        .then(data=>{
            if(document.querySelectorAll("li").length>=1){
                let lis=document.querySelectorAll('li');
                let ul= document.querySelector('ul');
                let i=0;
                document.querySelector('ul').innerHTML="";
            }
            let i=0;
            data.forEach(object=>{
                let li=document.createElement('li');
                let ul=document.querySelector('ul');
                let a =document.createElement('a');
                a.href=`${object.link}`;
                a.target='_blank';
                a.class="content";

                // a.rel='noopener noreferrer';
                a.textContent+=object.content;
                li.appendChild(a);
                ul.appendChild(li);
                        
            })
        });
}