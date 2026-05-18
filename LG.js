let c1=0;
let c2=0;
let c3=0;
let c4=0;
let cash_confirm=0;
let price_increment=0;
let cash=document.getElementById("cash-input");
let cashup=document.getElementById("cashup");
let car1=document.getElementById("demo1");
let car2=document.getElementById("demo2");
let car3=document.getElementById("demo3");
let car4=document.getElementById("demo4");

let pricebox=document.getElementById("price");
let button_confirm=document.getElementById("cash-confirm");
const avail_cars=document.getElementById("avail_cars");
const dropdown=document.getElementById("dropdown");
const buy_button=document.getElementById("buy");
const buy_button2=document.getElementById("buy1");
let select_car_color=document.getElementById("cars");
const select_button=document.getElementById("want-to-select-car");
const container_top2=document.getElementById("container-top2");
const back_button=document.getElementById("back");
const frame=document.getElementById("toggle_frame");
const c =document.getElementById("car");
const cs =document.getElementById("cars");
const buydropdown=document.getElementById("buy_dropdown");
const leave_button=document.getElementById("leave");
select_button.addEventListener('click',function show_frame() {
    select_button.style.display="none";
    back_button.style.display="block";
    c.style.display="block";
    cs.style.display="block";
    buy_button.style.display="block";
});
back_button.addEventListener('click', function show_back()
  {
    select_button.style.display="block";
    back_button.style.display="none";
    c.style.display="none";
    cs.style.display="none";
     buy_button.style.display="none";
    buy_button2.style.display="none";
}
);
select_car_color.addEventListener('change',function() {
  let g=document.getElementById("green_fr");
  let t=document.getElementById("turq_fr");
  let r=document.getElementById("red_fr");
  let p=document.getElementById("purple_fr");
  let cont=document.getElementById("contop");
    document.body.style.background=this.value;
    this.style.background=this.value;
    select_button.style.background=this.value;
    if (this.value
    !== "None" ) {
    select_button.innerText="want to select another car ?";
    }
    else {
      select_button.innerText="want to select a car ?";
    }
    if (this.value==="Purple"){
      cont.style.display="none";
      p.style.display="block";
      r.style.display="none";
      t.style.display="none";
      g.style.display="none";
      avail_cars.style.boxShadow="0px 0px 10px 10px rebeccapurple inset";
    }
    else if (this.value === "Red") {
     cont.style.display="none";
     p.style.display = "none";
     r.style.display = "block";
     t.style.display = "none";
     g.style.display = "none";
     avail_cars.style.boxShadow="0px 0px 10px 10px red inset";
    }
    else if (this.value === "Green") {
     cont.style.display="none";
     p.style.display = "none";
     r.style.display = "none";
     t.style.display = "none";
     g.style.display = "block";
     avail_cars.style.boxShadow="0px 0px 10px 10px forestgreen inset";
    }
    else if (this.value === "Turquoise") {
     cont.style.display="none";
     p.style.display = "none";
     r.style.display = "none";
     t.style.display = "block";
     g.style.display = "none";
     avail_cars.style.boxShadow="0px 0px 10px 10px turquoise inset";
    }
    else{
      cont.style.display="block";
      p.style.display = "none";
      r.style.display = "none";
      t.style.display = "none";
      g.style.display = "none";
      avail_cars.style.boxShadow="0px 0px 10px 10px darkgoldenrod inset";
    }
});
avail_cars.addEventListener('click',()=>{
  if (dropdown.style.display=="none"){
    dropdown.style.display="block";
  }
  else{
     dropdown.style.display="none";
  }
});

buy_button.addEventListener('click',()=>{
  if (buy_button2.style.display=="none"){
    buy_button2.style.display="block";
  }
  else{
    buy_button2.style.display="none";
  }

});
let claim_turq=document.getElementsByName("claimturq")[0];

claim_turq.addEventListener('click',()=>{
  
  let car3=document.getElementById("demo3");
  let mycash=document.getElementById("cash-input")
  let CASH=Number(mycash.value);
  if (mycash.value==="" || CASH===0){
    alert("Reveal How much you have💸");
  }else{
    c1+=1;
    car3.innerText=c1;
    pricebox.style.color="turquoise";
    price_increment+=30000;
    pricebox.innerText=price_increment+"$";
  }
    
});
let claim_turq1=document.getElementsByName("claimturq")[1];
claim_turq1.addEventListener('click',()=>{
  let car3 = document.getElementById("demo3");
  let mycash = document.getElementById("cash-input")
  let CASH = Number(mycash.value);
  if (mycash.value==="" || CASH===0){
    alert("Reveal How much you have💸");
  }else{
    c1+=1
    car3.innerText=c1
    pricebox.style.color="turquoise";
    price_increment+=19000;
    pricebox.innerText=price_increment+"$";
  }
});
let claim_red=document.getElementsByName("claimred")[0];
claim_red.addEventListener('click',()=>{
    let car1 = document.getElementById("demo1");
    let mycash = document.getElementById("cash-input")
    let CASH = Number(mycash.value);
    if (mycash.value==="" || CASH===0){
    alert("Reveal How much you have💸");
    }
    else{
      c1 += 1;
      car1.innerText =c1
      price_increment+=40000;
      pricebox.innerText=price_increment+"$";
      pricebox.style.color="red";
    }
});
let claim_red1=document.getElementsByName("claimred")[1];
claim_red1.addEventListener('click',()=>{
    let car1 = document.getElementById("demo1");
    let mycash = document.getElementById("cash-input")
    let CASH = Number(mycash.value);
    if (mycash.value==="" || CASH===0){
    alert("Reveal How much you have💸");
    }
    else{
      c1 += 1;
      car1.innerText =c1
      price_increment+=25000;
      pricebox.innerText=price_increment+"$";
      pricebox.style.color="red";
    }
});
let claim_green=document.getElementsByName("claimgreen")[0];
claim_green.addEventListener('click',()=>{
    let car4 = document.getElementById("demo4");
    let mycash = document.getElementById("cash-input")
    let CASH = Number(mycash.value);
    if (mycash.value === "" || CASH === 0) {
      alert("Reveal How much you have💸");
    }
    else{
      c4+= 1;
      car4.innerText = c4;
      price_increment+=48000;
      pricebox.innerText=price_increment+"$";
      pricebox.style.color="forestgreen";
    }
});
let claim_green1=document.getElementsByName("claimgreen")[1];
claim_green1.addEventListener('click', () => {
  let car4 = document.getElementById("demo4");
  let mycash = document.getElementById("cash-input")
  let CASH = Number(mycash.value);
  if (mycash.value === "" || CASH === 0){
    alert("Reveal How much you have💸");
  }
  else{
    c4 += 1;
    car4.innerText = c4;
    price_increment+=60000;
    pricebox.innerText = price_increment+"$";
    pricebox.style.color = "forestgreen";
  }
});
let claim_purple=document.getElementsByName("claimpurple")[0];
claim_purple.addEventListener('click',()=>{
    let car2 = document.getElementById("demo2");
    let mycash = document.getElementById("cash-input")
    let CASH = Number(mycash.value);
    if (mycash.value === "" || CASH === 0) {
      alert("Reveal How much you have💸");
    }else{
      c2 += 1;
      car2.innerText = c2
      price_increment+=38000;
      pricebox.innerText=price_increment+"$";
      pricebox.style.color="rebeccapurple";
    }
});
let claim_purple1=document.getElementsByName("claimpurple")[1];
claim_purple1.addEventListener('click',()=>{
    let car2 = document.getElementById("demo2");
    let mycash = document.getElementById("cash-input")
    let CASH = Number(mycash.value);
    if (mycash.value === "" || CASH === 0) {
      alert("Reveal how much you have💸");
    }
    else{ 
      c2 += 1;
      car2.innerText = c2
      price_increment+=50000;
      pricebox.innerText=price_increment+"$";
      pricebox.style.color="rebeccapurple";
    }
});
button_confirm.addEventListener(
  'click',()=>{
    let mycash = document.getElementById("cash-input")
    let CASH = Number(mycash.value);

    if (mycash.value === "" || CASH === 0) {
      alert("Reveal how much you have💸");
    }else{
       cash_confirm=Number(mycash.value);
      button_confirm.style.display="none";
      mycash.style.display="none";
      cashup.style.display="block";    
    }
});
let submit_button= document.getElementById("submit");
submit_button.addEventListener('click',()=>{
  let mycash=document.getElementById("cash-input").value;
  cash_confirm=Number(mycash);
  if (cash_confirm >= price_increment && mycash!=="" &&price_increment>0) {
    alert("Good,your return is"+(cash_confirm-price_increment)+"💸")
    ;
    let number = "";
    while (number.length < 9 || isNaN(number)) {
    number = prompt("Enter your buyer ID (at least 9 digits)");   
    }
    alert("Your cars are ready🔥🔥🔥")
  }
  
  else{
    alert("Cheapskate man🤬"
    );
  }
});
