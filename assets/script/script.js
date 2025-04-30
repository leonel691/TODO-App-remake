// let begin with dark mode option
let input=document.getElementById("input");
let inputImage=document.getElementById("input_image");



document.addEventListener("DOMContentLoaded",()=>{
    input.value=""; 
    inputImage.style.opacity="0";
})

input.addEventListener("input",()=>{
    if (input.value.length>4){
        inputImage.style.opacity="1";
    }
    else{
        inputImage.style="0";
    }

})

