function score1()
{
    var score= Number(sessionStorage["score1"]);
    document.getElementById("score").innerHTML= "YOU WON "+score+" COINS";
}
score1();
