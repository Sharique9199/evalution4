let navbar=()=>{
    return ` <input type="search" name="" id="search_box" placeholder=""Search News>
    <h2 id="in">India</h2>
    <h2 id="us">USA</h2>
    <h2 id="ch">Chaina</h2>
    <h2 id="uk">UK</h2>
    <h2 id="nz">Newzealand</h2>
    
    `       
}

export {navbar}

let raj=document.querySelector("#sidebar");
let err=JSON.parse(localStorage.getItem("user"));


let secondFunction =(sharique1)=>{
    let sh=document.createElement("img")
    sh.setAttribute("id","user_image");
    sh.setAttribute("src",sharique1.image);

    let sh1=document.createElement("h3");
    sh1.setAttribute=("id","user_name");
    sh1.innerText=sharique1.name;

    let sh2=document.createElement("h3");
    sh2.setAttribute=("id","user_email");
    sh2.innerText=sharique1.email;

    let sh3=document.createElement("h3");
    sh3.setAttribute=("id","user_country");
    sh3.innerText=sharique1.country;

    raj.append(sh,sh1,sh2,sh3)
}