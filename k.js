const parent=document.querySelector("ul");
const second_parent=document.querySelector(".box-button");
const next_button=document.querySelector("#next-button");
const back_button=document.querySelector("#back-button");
let count=0;
for(let i=0;i<5;i++){
    const child=document.createElement("li")
    child.setAttribute("class","small-box")
    parent.appendChild(child)
}
const all_children=document.querySelectorAll(".small-box");
let items=["Pork/10000","Chicken/15000","Beef/20000","steak/25000"]
let items_jpg=["pork.jpeg","chicken.jpg","beef.png","steak.jpg"]
const items_holder=document.createElement("div");
second_parent.appendChild(items_holder);
items_holder.setAttribute("class","second-container");
second_parent.insertBefore(items_holder,next_button);
for(let j=0;j<items.length;j++){
    const item=document.createElement("div");
    item.setAttribute("class","item");
    item.textContent=items[j];
    item.style.backgroundImage=`url(${items_jpg[j]})`;
    item.style.display="none"
    if (j==0){
        item.style.display="block"
    }
    items_holder.appendChild(item);
    const input=document.createElement("input");
    input.setAttribute("class","item-checkbox");
    item.appendChild(input);
}
parent.removeChild(parent.lastChild);
let already_displayed=[items_holder.children[0]];
all_children[0].style.backgroundColor="rgb(0, 255, 85)";
let Price=10000
next_button.addEventListener("click",()=>{
    let value=items_holder.children[count].children[0].value
    if(count<items.length-1 && !isNaN(value) && value>=Price){
        alert("Goooood")
        items_holder.children[count].children[0].value="";
        already_displayed[0].style.display="none";
        count++;
        Price+=5000;
        already_displayed[0]=items_holder.children[count];
        value=items_holder.children[count].children[0].value
        already_displayed[0].style.display="block";
        all_children[count].style.backgroundColor="rgb(0, 255, 85)";
    
    }
})
back_button.addEventListener("click",()=>{
    let value=items_holder.children[count].children[0].value
    if(count>0  && !isNaN(value) && value>=Price){
        alert("Gooooood")
        items_holder.children[count].children[0].value="";
        already_displayed[0].style.display="none";
        count--;
        Price-=5000;
        already_displayed[0]=items_holder.children[count];
        value=items_holder.children[count].children[0].value
        already_displayed[0].style.display="block";
        all_children[count+1].style.backgroundColor="gray";
    }
}  )  