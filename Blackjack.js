const handValue = document.querySelector(".output");
const btns = document.querySelectorAll("button");
const result = document.querySelector(".result");
const hand = document.querySelector(".cards");
const dealerHand = document.querySelector(".dealer-hand");
const card = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
let cards = [];
let dealerCards = [];
// let trueCard= cards;
let count = 0;
let displayHand = [`Cards:`]
let playerCount = 0;
let dealerCount = 0; 


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
function setCount(k){ 
    count = 0;
    let trueCard = [...k];
    for(let i=0; i<k.length;i++){
    if (k[i] === "J" ||
    k[i] === "Q" ||
    k[i] === "K"){
    trueCard[i] = 10;
}else if(k[i] === "A"){
    trueCard[i] = 11;
}};
    count = trueCard.reduce((a,b) => a+b,0);

    if (count>21 && trueCard.includes(11) ){
        let index = trueCard.indexOf(11);
        trueCard[index] = 1;
    }
    count = trueCard.reduce((a,b) => a+b,0);
    playerCount = count;
    dealerCount = count;
    
    
}

//Dealer hand function
function dealerHandComp(){
    cards=[];
    dealCard()
    dealCard()
    setCount(cards)
    while (dealerCount<17){
        dealCard()
        setCount(cards)
    }
    
    return dealerCount;
}






btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
    const value = e.currentTarget.classList;
    if (value.contains("btn-deal")){
        cards = []; 
        dealCard();
        dealCard();
        displayHandUpdate();
        setCount(cards);
        
        handValue.textContent = playerCount;
        if(playerCount<21){
        result.textContent = "Hit or Stay?"}
        else if(playerCount === 21){
         result.textContent = "Blackjack!!";}
  
     }
     if(value.contains("btn-hit")){
        dealCard();
        displayHandUpdate();
        setCount(cards);
        
        handValue.textContent = playerCount;
        if (playerCount>21){
            result.textContent = "Hand Lost"; 
                      
        }else if (playerCount===21){
            result.textContent = "Blackjack!!";
        }console.log(cards)
    }
    if(value.contains("btn-stay")){
        
        if (playerCount>21){
            result.textContent = "Hand Lost"; 
                      
        }if(playerCount<21){
        result.textContent = playerCount
        dealerHandComp();
        dealerHand.textContent = dealerCount;   
    }


        
        
    }
    
    });   
    });
     
    

  


    

