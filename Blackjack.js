const handValue = document.querySelector(".output");
const btns = document.querySelectorAll("button");
const result = document.querySelector(".result");
const hand = document.querySelector(".cards");
const dealerHand = document.querySelector(".dealer-hand");
const card = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
let cards = [];
let trueCard= cards;
let count = 0;
let displayHand = [`Cards:`]


//Deal a single card
function dealCard(){
    
    cards.push(card[Math.floor(Math.random()*card.length)])
}

//add card to displayHand 
function displayHandUpdate(){
    displayHand = [`Cards:`];
    
    for (let i=0; i<cards.length; i++){
        displayHand.push(" "+ cards[i])

    } displayHand = displayHand.join("");
      hand.textContent = displayHand;
      
}
//set count
function setCount(){
    trueCard = cards;
    for(let i=0; i<cards.length;i++){
    if (cards[i] === "J" ||
    cards[i] === "Q" ||
    cards[i] === "K"){
    trueCard[i] = 10;
}else if(cards[i] === "A"){
    trueCard[i] = 11;
}};
    count = trueCard.reduce((a,b) => a+b,0);
    
    if (count>21 && trueCard.includes(11) ){
        let index = trueCard.indexOf(11);
        trueCard[index] = 1;
    }
    count = trueCard.reduce((a,b) => a+b,0);
    
    
}

//Dealer hand function
function dealerHandComp(){
    dealCard()
    dealCard()
    setCount()
    while (count<17){
        dealCard()
        setCount()
    }
    console.log(cards);
    return count;
}






btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
    const value = e.currentTarget.classList;
    if (value.contains("btn-deal")){
        cards = []; 
        dealCard();
        dealCard();
        displayHandUpdate();
        setCount();
        handValue.textContent = count;
        if(count<21){
        result.textContent = "Hit or Stay?"}
        else if(count === 21){
         result.textContent = "Blackjack!!";}
  
     }
     if(value.contains("btn-hit")){
        dealCard();
        displayHandUpdate();
        setCount();
        handValue.textContent = count;
        if (count>21){
            result.textContent = "Hand Lost"; 
                      
        }else if (count===21){
            result.textContent = "Blackjack!!";
        }console.log(cards)
    }
    if(value.contains("btn-stay")){
        
        if (count>21){
            result.textContent = "Hand Lost"; 
                      
        }if(count<21){
        result.textContent = count}

        
        
    }
    
    });   
    });
     
    

  


    

