const btn=document.getElementById("btn");
const output=document.querySelector(".output");

let quote=[
    "Be yourself; everyone else is already taken.","So many books, so little time.",
    "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    "Be the change that you wish to see in the world.","Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend",
    "A friend is someone who knows all about you and still loves you.","Always forgive your enemies; nothing annoys them so much.","Without music, life would be a mistake.",
    "I believe we are here on the planet Earth to live, grow up and do what we can to make this world a better place for all people to enjoy freedom." ,"To love oneself is the beginning of a lifelong romance." ,
    "A dead end is just a good place to turn around.","Find out who you are and do it on purpose."
  
    
]

btn.addEventListener("click",()=>{
    console.log("clicked");
    let random =Math.floor(Math.random()*quote.length)

    output.textContent = quote[random];
})