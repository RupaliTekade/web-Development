function startGame(){
    const p1= document.getElementById("player1").value.trim();
    const p2= document.getElementById("player2").value.trim(); 

    document.getElementById("player1nameheading").innerText = p1;
    document.getElementById("player2nameheading").innerText = p2;

    document.getElementById("player1name").innerText = p1;
    document.getElementById("player2name").innerText = p2;

    document.getElementById("start").disabled = true;
    document.getElementById("reset").disabled = false;
    document.getElementById("rollDice1").disabled = false;

}

function resetGame(){
    if(confirm("Are you sure")){
        location.reload();
    }
}


function rollDice1(){
    let s1 = Number(document.getElementById("player1Score").innerText);

    const d = Math.floor(Math.random()*6+1);
    
    switch(d){
        case 1:{
            document.getElementById("player1Dice").src = "./images/IMG-20250503-WA0003.jpg";
            break;
        }
        case 2:{
            document.getElementById("player1Dice").src = "./images/IMG-20250503-WA0004.jpg";
            break;
        }
        case 3:{
            document.getElementById("player1Dice").src = "./images/IMG-20250503-WA0005.jpg";
            break;
        }
        case 4:{
            document.getElementById("player1Dice").src = "./images/IMG-20250503-WA0006.jpg";
            break;
        }
        case 5:{
            document.getElementById("player1Dice").src = "./images/IMG-20250503-WA0007.jpg";
            break;
        }
        case 6:{
            document.getElementById("player1Dice").src = "./images/IMG-20250503-WA0002.jpg";
            break;
        }

        default:{

        }
    }

    s1 = s1+d;
    document.getElementById("player1Score").innerText = s1;
    if(d==6){
        document.getElementById("rollDice1").disabled = true;
        document.getElementById("rollDice2").disabled = false;

    } 
    if (s1>=50){
         setTimeout(1000); 
        alert(document.getElementById("player1name").innerText+"Wins!!");
        document.getElementById("rollDice1").disabled = true;
        document.getElementById("rollDice2").disabled = true;
    }
}






function rollDice2(){
    let s2 = Number(document.getElementById("player2Score").innerText);

    const d = Math.floor(Math.random()*6+1);
    
    switch(d){
        case 1:{
            document.getElementById("player2Dice").src = "./images/IMG-20250503-WA0003.jpg";
            break;
        }
        case 2:{
            document.getElementById("player2Dice").src = "./images/IMG-20250503-WA0004.jpg";
            break;
        }
        case 3:{
            document.getElementById("player2Dice").src = "./images/IMG-20250503-WA0005.jpg";
            break;
        }
        case 4:{
            document.getElementById("player2Dice").src = "./images/IMG-20250503-WA0006.jpg";
            break;
        }
        case 5:{
            document.getElementById("player2Dice").src = "./images/IMG-20250503-WA0007.jpg";
            break;
        }
        case 6:{
            document.getElementById("player2Dice").src = "./images/IMG-20250503-WA0002.jpg";
            break;
        }

        default:{

        }
    }

    s2 = s2+d;
    document.getElementById("player2Score").innerText = s2;
    if(d==6){
        document.getElementById("rollDice2").disabled = true;
        document.getElementById("rollDice1").disabled = false;

    } 
    if (s2>=50){
       setTimeout(1000); 
        alert(document.getElementById("player2name").innerText+"Wins!!");
        document.getElementById("rollDice1").disabled = true;
        document.getElementById("rollDice2").disabled = true;
    }
  
}

document.getElementById("player1").addEventListener("change",checkinput)
document.getElementById("player2").addEventListener("change", checkinput)

function checkinput(){
    const p1= document.getElementById("player1").value.trim();
    const p2= document.getElementById("player2").value.trim(); 

    if(p1.length>2 && p2.length>2){
        document.getElementById("startgame").disabled = false;
    }

}