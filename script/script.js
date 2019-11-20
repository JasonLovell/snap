var boxNumber;
var pack;
var placeCard;
var i;
var y;

i=0;

boxNumber = ["card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8", "card9"];
pack = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

function dealCards() {
    document.getElementById("title").style.color = "red";
    while(i < 9){
        y = parseInt(Math.round(Math.random()*8)+1);
        document.getElementById(boxNumber[i]).innerHTML=[y];
        i++;
        
    }
    
}









