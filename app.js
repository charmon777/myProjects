document.addEventListener('DOMContentLoaded',  () => {

const cardArray = [
    {name: 'apple',
    img: 'images/apple.png'},
    {name: 'apple',
    img: 'images/apple.png'},
    {name: 'batman',
    img: 'images/batman.png'},
    {name: 'batman',
    img: 'images/batman.png'},
    {name: 'cpt',
    img: 'images/cpt.png'},
    {name: 'cpt',
    img: 'images/cpt.png'},
    {name: 'dude',
    img: 'images/dude.png'},
    {name:'dude',
    img: 'images/dude.png'},
    {name: 'ironman',
    img: 'images/ironman.png'},
    {name: 'ironman',
    img: 'images/ironman.png'},
    {name: 'water',
    img: 'images/water.png'},
    {name: 'water',
    img: 'images/water.png'}
]

const grid = document.querySelector('.grid');
//create board
function createBoard(){
    for (let i=0; i<cardArray.length;i++){
      const cards = document.createElement('img');
      cards.setAttribute('src', 'images/blue.png');
      cards.setAttribute('data-id', i);
      //cards.addEventListener('click' , flipcard)
      grid.appendChild(cards); 
    }
}
createBoard()
})
