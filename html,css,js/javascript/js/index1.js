const click = document.querySelector(".btn");
const duck = document.querySelector(".container");
const clk2= document.querySelector(".icon");
const c1 = document.querySelector(".r");
const c2 = document.querySelector(".b");
const c3 = document.querySelector(".y");
const c4 = document.querySelector(".g");
click.addEventListener("click", ()=>{
    duck.style.display="flex";
});
clk2.addEventListener("click", ()=>{
    duck.style.display="none";
    duck.style.backgroundColor="white";
});
c1.addEventListener("click", ()=>{
    duck.style.backgroundColor="red";
} );
c2.addEventListener("click", ()=>{
    duck.style.backgroundColor="blue";

} );
c3.addEventListener("click", ()=>{
    duck.style.backgroundColor="yellow";
} );
c4.addEventListener("click", ()=>{
    duck.style.backgroundColor="green";
} );