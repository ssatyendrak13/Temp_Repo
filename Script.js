const first = document.querySelector(".first");
const second = document.querySelector(".second");
const btn = document.querySelector("button");

btn.addEventListener("click" , (e)=>{
    if(first.value==="s" && second.value==="s"){
        window.location.href = "Home.html";
    }else{
        alert("Incorrect Username or Password !");
    }
    e.preventDefault();
    first.value="";
    second.value="";
})