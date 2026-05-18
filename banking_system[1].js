let j=0;
let k=0;
let users=[];
let hist=[];
let name_user="";
let surname_user="";
let password=0;
let new_pin=0;
let old_pin=0
let id_transact={}
let list_accounts=new Object();
function change_pin(){
  let i=0;
  let user_key=name_user+" "+surname_user
  while(old_pin!=list_accounts[user_key]["PIN"] && i<4){
    i+=1
    old_pin=prompt("ENTER YOUR OLD PIN")
    if(old_pin!=list_accounts[user_key]["PIN"]){
      alert("OLD PIN WRONG "+"attempts:"+i)
    }
  }
  if(old_pin!=list_accounts[user_key]["PIN"]){
      alert("ATTEMPTS OUT, IMPOSSIBLE TO CHANGE PIN")
    menu()
  }
  else{
    while(String(new_pin).length!=4 || isNan(new_pin)){
      new_pin=prompt("ENTER A NEW PIN")
      if(String(new_pin).length!=4 || isNan(new_pin)){
        alert("ENTER A 4-DIGIT PIN")
      }
    }
    list_accounts[user_key]["PIN"]=new_pin
    menu()
  }
}
function create_account(){
  let registered_firstname=prompt("REGISTER YOUR NAME")
  let registered_surname=prompt("REGISTER YOUR SURNAME")
  list_accounts[registered_firstname+" "+registered_surname]=new Object()
  list_accounts[registered_firstname+" "+registered_surname]["SOLDE"]=0
  j+=173
  list_accounts[registered_firstname+" "+registered_surname]["PIN"]=1975+j
  let PIN=list_accounts[registered_firstname+" "+registered_surname]["PIN"]=1975+j
  alert("ENGRAVE IN YOUR MIND YOUR PIN:\n\n"+PIN)
  k+=1
  users.push(`User ${k}:${registered_firstname} ${registered_surname}`)
  login_account()
} 
create_account()
function login_account(){
  let i=0;
  let firstname="";
  let surname="";
  while(!Object.keys(list_accounts).includes(firstname+" "+surname)){
    firstname = prompt("ENTER YOUR NAME")
    surname = prompt("ENTER YOUR SURNAME")
    name_user=firstname
    surname_user=surname
    if(!Object.keys(list_accounts).includes(firstname+" "+surname)){
      alert("WRONG NAME🤬")
    }
  }
  while (password != list_accounts[firstname+" "+surname]["PIN"] && i < 6){
    password = Number(prompt("ENTER THE CODE PIN   " + "attempts:" + i))
    i += 1;
  }
  if (password  != list_accounts[firstname+" "+surname]["PIN"]) {
    alert("ATTEMPTS OUT!")
  }
  else {
    menu()
  }
}
function menu(){
  let hist_transact=hist;
  let menu_option=0;
  while(menu_option!=1 && menu_option!=2 &&  menu_option!=3 && menu_option!=4 && menu_option!=5 && menu_option!=6 && menu_option!=7 && menu_option!=8 && menu_option!=9){
    menu_option=Number(prompt("1.CHECK SOLD\n"+"2.CASH IN\n"+"3.CASH OUT\n"+"4.CHECK TRANSACTIONS HISTORY\n"+"5.CREATE NEW ACCOUNT\n"+"6.CHECK REGISTERED USERS\n"+"7.CHANGE ACCOUNT\n"+"8.CHANGE PIN\n"+"9.QUIT"));
    if (menu_option!=1 && menu_option!=2 &&  menu_option!=3 && menu_option!=4 && menu_option!=5 && menu_option!=6 && menu_option!=7 &&menu_option!=8 && menu_option!=9){
      alert("Pick between 1,2,3,4,5,6,7,8,9")
    }
  }
  if (menu_option==1){
    verify_sold()
  }
  else if (menu_option==2){
    let deposited_cash=Number(prompt("HOW MUCH TO CASH IN"))
    deposit(cashin=deposited_cash)
  }
  else if (menu_option==3){
    let user_key=name_user+" "+surname_user
    if (list_accounts[user_key]["SOLDE"]<=0){
      alert("Insufficient Funds!\n"+"START TO CASH IN!")
      menu()
    }
    else{
      let withdrawn_cash=Number(prompt("HOW MUCH TO CASH OUT"));
      withdraw(cashout=withdrawn_cash)
    }
  }
  else if(menu_option==4){
    if (hist_transact.length==0){
      alert("NO TRANSACTIONS MADE")
    }
    else {
      alert(hist_transact.join("\n"))
    }
    menu()
  }
  else if(menu_option==5){
    create_account()
  }
  else if(menu_option==6){
    alert(users.join("\n"))
    menu()
  }
  else if(menu_option==7){
    login_account()
  }
  else if(menu_option==8){
    change_pin()
  }
  
  function verify_sold() {
    let user_key=name_user+" "+surname_user
    alert("YOUR SOLD is "+list_accounts[user_key]["SOLDE"])
    menu()
  }
  function deposit(cashin){
    const date = new Date()
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let user_key=name_user+" "+surname_user
    list_accounts[user_key]["SOLDE"]+=cashin;
    alert("Your current sold is "+list_accounts[user_key]["SOLDE"])
    hist_transact.push("DEPOSITED "+cashin+" on "+date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" at "+hours+":"+minutes)

    menu()
    
  }
  function withdraw(cashout)
  {  
    const date = new Date()
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let user_key=name_user+" "+surname_user
    if(list_accounts[user_key]["SOLDE"]<cashout){
      alert("INSUFFICIENT FUNDS!\n\n"+"START TO CASH IN!")
    }
    else{
      list_accounts[user_key]["SOLDE"]-=cashout;
      alert("Your current sold is "+list_accounts[user_key]["SOLDE"])
      hist_transact.push("WITHDREW "+cashout+" on "+date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" at "+date.getHours()+":"+minutes)
    }
    menu()
  }
}
