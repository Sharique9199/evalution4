/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/

function sharique(name,image,email,country){
    this.name=name;
    this.image=image;
    rhis.email=email;
    this.country=country;
}
let arr=JSON.parse(localStorage.getItem("user"));
let submitFunction=()=>{
    let name=document.querySelector("#user_name").value;
    let image=document.querySelector("#user_pic").value;
    let email=document.querySelector("#user_email").value;
    let country=document.querySelector("#user_country").value
}
let sharique1=async(val)=>{
try{
   
        let sh=await fetch(val)
        let sh1=await sh.json();
        console.log(sh1)
    }
    catch(error){
        console.log(error)
       
    }
}  
