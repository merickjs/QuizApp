const input = document.getElementById("input") 
const startBtn = document.querySelector(".start-btn")
const h2 = document.getElementById("head")
input.addEventListener("change", (e)=>{
 let inputvalue="";
 inputvalue = e.target.value; 

 startBtn.addEventListener("click", () => {
  inputvalue = localStorage.setItem("name", inputvalue);
 })

})