const readline=require('readline');
const input=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function details(){
    return{
        score:0,
        rolls:0,
        status:0
    }
}
var players=[];
var player=0;
var properties=['Snake','Ladder','No Play'];

console.log("🐍-----SNAKE & LADDERS-----\n");

input.question('Enter No Of Players :  ',(reply)=>{
    
    var total_player=parseInt(reply);
   
  for(i=0;i<total_player;i++){
    players.push(details());
}

function roll(){
    let dice=Math.floor(Math.random()*6+1);
    let turn=Math.floor(Math.random()*3);
    let current=player%total_player;
    players[current].rolls++;

    if(turn!=2){
    if(players[current].status===0 && dice===1 && turn!=0){
        players[current].status=1;
        console.log(`player ${current+1} have started !`);
        
    }
     if(players[current].status===1){
        

        if(turn==0 && players[current].score<=dice){
            players[current].score=0;
        }
        else if(turn ==0){
            players[current].score-=dice;
        }
        else if(turn==1 && players[current].score+dice<=100){
            players[current].score+=dice;
        }
    }
}
        console.log(`PLAYER ${current+1}\n dice :${dice}\n score :${players[current].score}\n Rolls :${players[current].rolls}\n Turns :${properties[turn]}\n`);
    
    if(players[current].score==100){
       console.log(`\n PLayer ${current+1} Wins !!!`);
    }
    else if(dice==6 || turn==1){
        roll();
    }
    else{
        player++;
        roll();
    }

}roll();
 }
);