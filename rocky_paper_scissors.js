let box_options=document.querySelector(".box-options")
let rock=document.querySelector("#rock-button")
let paper=document.querySelector("#paper-button")
let scissors=document.querySelector("#scissors-button")
let player_score=document.querySelector(".score-container").firstElementChild.firstElementChild
let computer_score=document.querySelector(".score-container").children[1].firstElementChild
let check=document.querySelector("#toggle-loss-win")
let computer_choices=[]
let int_player_score=0
let int_computer_score=0
for(let i=0;i<3;i++){
    computer_choices.push(box_options.children[i].innerHTML)
}
function get_random_choice(){
  let index=Math.floor(Math.random() * computer_choices.length)
  let computer_choice=computer_choices[index];
  return computer_choice
}
rock.addEventListener("click",()=>{
    let choice=get_random_choice()
    if(choice=="Scissors"){
        int_player_score+=3
        player_score.innerHTML=int_player_score
    }
    else if(choice=="Paper"){
      int_computer_score+=3
      computer_score.innerHTML=int_computer_score

    }
    get_random_choice()
    
   
})
paper.addEventListener("click",()=>{
    let choice=get_random_choice()
    if(choice=="Rock"){
        int_player_score+=3
        player_score.innerHTML=int_player_score
    }
    else if(get_random_choice()=="Scissors"){
      int_computer_score+=3
      computer_score.innerHTML=int_computer_score

    }
    get_random_choice()
    
   
})
scissors.addEventListener("click",()=>{
    let choice=get_random_choice()
    if(cchoice=="Paper"){
        int_player_score+=3
        player_score.innerHTML=int_player_score
    }
    else if(get_random_choice()=="Rock"){
      int_computer_score+=3
      computer_score.innerHTML=int_computer_score
    }
    get_random_choice()
})

