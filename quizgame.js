let score=0;
const questions=[{category:"geography",question:"What's the capital of Burundi🇧🇮",choices:["Bujumbura","Ngozi","Gitega"],answer:"Gitega"},{category:"Football",question:"Who's the best goalscorer⚽🥅",choices:["Suarez","Ronaldo","Lewandowski","Ibrahimovic"],answer:"Ronaldo"},
  {category:"wrestling",question:"Who's the best WWE wrestler",choices:["Seth Rollins","Brock Lesnar","Undertaker","Roman Reigns"],answer:"John Cena"}
  ,{category:"Tech",question:"Who's Apple Founder💻",choices:["Steve Jobs","Steve Wozniak","Ronald Wayne"],answer:"Steve Jobs"}
  ,{category:"Basketball",question:"Most points in a single basketball game🏀",choices:["Koby Bryant","Bam Adebayo","Lebron James","Michael Jordan"],answer:"Wilt Chamberlain"}
  ,{
  category:"Biology",
  question:"Which organ pumps blood through the body ❤️?",
  choices:["Liver","Brain","Heart","Lungs"],
  answer:"Heart"
},
{
  category:"Physics",
  question:"What force pulls objects toward Earth 🌍?",
  choices:["Magnetism","Friction","Gravity","Electricity"],
  answer:"Gravity"
},
{
  category:"Literature",
  question:"Who wrote 'Romeo and Juliet' 📖?",
  choices:["Charles Dickens","William Shakespeare","Mark Twain","Jane Austen"],
  answer:"William Shakespeare"
},
{
  category:"Music",
  question:"Which instrument has black and white keys 🎹?",
  choices:["Guitar","Drums","Piano","Violin"],
  answer:"Piano"
},
{
  category:"Food",
  question:"Which food is made from milk 🥛?",
  choices:["Bread","Cheese","Rice","Egg"],
  answer:"Cheese"
},
{
  category:"Art",
  question:"Who painted the Mona Lisa 🎨?",
  choices:["Vincent van Gogh","Pablo Picasso","Leonardo da Vinci","Claude Monet"],
  answer:"Leonardo da Vinci"
}
]
let available_questions=questions
function get_random_question(){
  let index=Math.floor(Math.random() * available_questions.length)
  let q=available_questions[index];
  available_questions.splice(index,1);
  return q

}
let quiz_game=()=>{
  
  let timeLeft=10
  let a = get_random_question();
  let choices = a["choices"];

  let answered = false;

  // timeout → auto move next
  let timer = setInterval(() => {
  timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(timer);
      alert("Time's up ⏰!");
      score -= 3;
      finished = true;
      play()
    }
  }, 1000);
  
  let answer = prompt(`${a["question"]}\n\n${choices.join(" -- ")}`);

  if (!choices.includes(answer)) {
    alert("Wrong ❌");
    score -= 3;
  } else {
    alert("Correct ✅");
    score += 3;
  }
  play()
}
function replay(){
  alert("Your score 📑 is "+score)
  let replay=prompt("wanna replay:Yes or No")
  if(replay=="Yes"){
    score=0;
    available_questions=questions
    play()
  }
  else{
    alert("See ya 👋")
  }
}
function play(){
  if (available_questions.length>0){
    quiz_game()
  }
  else{
    replay()
  }
}
quiz_game()

