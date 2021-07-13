var nameinput=document.getElementById("name")
var urlinput=document.getElementById("url")
var addbtn=document.getElementById("addbtn")
var namealert=document.getElementById("namealert")
var alertname=document.getElementById("alertname")
var inputs=document.getElementsByClassName("form-control")
var books=[]
var index=""
if((JSON.parse(localStorage.getItem("Books")))!=null){
    books=JSON.parse(localStorage.getItem("Books"));
    display()
  }
function Restform(){
    for(var i=0;i<inputs.length;i++){
        inputs[i].value="";
    }
}
nameinput.onkeyup=function(){
    var namerejex=/^[A-Z][a-z]{2,8}/
    if(!namerejex.test(nameinput.value)){
        addbtn.disabled="true";
        nameinput.classList.add("is-invalid");
        nameinput.classList.remove("is-valid");
       
    }
    else{
        addbtn.removeAttribute("disabled")
        nameinput.classList.add("is-valid");
        nameinput.classList.remove("is-invalid");
        
    }
}
nameinput.onblur=function(){
    var namerejex=/^[A-Z][a-z]{2,8}/
    if(!namerejex.test(nameinput.value)){
       
        namealert.classList.remove("d-none");
    }
    else{
        
        namealert.classList.add("d-none")
    }
}
urlinput.onkeyup=function(){
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    if(!pattern.test(urlinput.value)){
        addbtn.disabled="true";
        urlinput.classList.add("is-invalid");
        urlinput.classList.remove("is-valid");
       
    }
    else{
        addbtn.removeAttribute("disabled")
        urlinput.classList.add("is-valid");
        urlinput.classList.remove("is-invalid");
        
    }
}
urlinput.onblur=function(){
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    if(!pattern.test(urlinput.value)){
       
        alertname.classList.remove("d-none");
    }
    else{
        
        alertname.classList.add("d-none")
    }
}

addbtn.onclick=function(){
    
    if(addbtn.innerHTML=="EDIT"){
        newval();   
    }
    else{ADD();}
    display();
    Restform()
    
  
}
function ADD(){
    nameinput.classList.remove("is-valid");
    urlinput.classList.remove("is-valid");
    var book={
        name:nameinput.value,
        url:urlinput.value,
    }
    books.push(book);
    localStorage.setItem("Books",JSON.stringify(books));
}
function display(){
    var counter="";
    for(var i=0;i<books.length;i++){
        counter+=
        `
        <div class="col-md-4 ">
        <div class="member">
        <h4 class="text-center mb-2" style="color: #FFFFDC;" >${books[i].name}</h4>
        <div  class="butt-on">
        <button class="btn btn-outline-info button1">visit</button>
        <button class="btn btn-outline-warning button2" onclick="edit(${i})">Edit</button>
        <button class="btn btn-outline-danger" onclick="bookdelete(${i})">Delete</button>
        </div>
        </div>
        </div>
        `
    }
    document.getElementById("item").innerHTML=counter;
}
function edit(val){
    addbtn.innerHTML="EDIT";
    index=val;
    nameinput.value=books[val].name;
    urlinput.value=books[val].url;
}
function newval(){
    nameinput.classList.remove("is-valid");
    urlinput.classList.remove("is-valid");
    var book={
        name:nameinput.value,
        url:urlinput.value,
    }
    books[index]=book;
    addbtn.innerHTML=="ADD"
    localStorage.setItem("Books",JSON.stringify(books));
    
}
function bookdelete(val){
    alert("are you sure to delete this")
    books.splice(val,1);
    display();
}
