var quiz = [];
quiz[0] = new Question(" I am surrounded by many gold coins but I am more valuable than those Who am I ?? ","hour glass");
quiz[1] = new Question(" I am a precious gem stone and I am scattered much here Who am I" ,"sapphire");
quiz[2] = new Question(" I am odd one out of no use Who am I ??" ,"wood");
quiz[3] = new Question(" An excitement is waiting for you But I am closed the one that finds me have all of me Who am I ??" ,"treasure");
var randomQuestion;
var ans;


document.addEventListener("DOMContentLoaded", function(event) { 
  btnProvideQuestion();
});
function Question(question,rightAnswer) {
    this.question = question; 
    this.rightAnswer = rightAnswer;
}
    function shuffle(o) {
        for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };
    function btnProvideQuestion() {
  
        var randomNumber = Math.floor(Math.random()*quiz.length);
        randomQuestion = quiz[randomNumber]; //getQuestion
      document.getElementById("question").innerHTML= randomQuestion.question;
    }
    function answer_clicked() {
      var answer = document.getElementById("ans").value;
      var solution=answer.toLowerCase();
      if (solution == randomQuestion.rightAnswer) {
        var score= Number(sessionStorage["score1"]);
        var timer=Number(sessionStorage.getItem("timer"));
        score=Math.floor((score/timer)*100);
       document.cookie="score="+score;
        sessionStorage.setItem("score1",score);
        location.href="http://localhost/puzzle/victory.php";
        } 
        else { 
          sessionStorage.clear();
          location.href="http://localhost/puzzle/questions.php";
          alert("Wrong Answer Please Try again");
         // alert(answer);
        }	  
    }
    function reset()
    {
      var sol = document.getElementById("res").value;
     res.reset();
    }
    var seconds=0;
    if(sessionStorage["timer"]==null)
    {
     sessionStorage.setItem("timer",0);
    }
    else{
       seconds = sessionStorage.getItem("timer");
    
    }
// var minutes = 0;
// var hours = 0;

var timer = setInterval(function() {
    seconds++;
    sessionStorage.setItem("timer",Number(seconds)) ;
    // if (seconds == 60) {
    //     seconds = 0;
    //     minutes++;
    // }
    // if (minutes == 60) {
    //     minutes = 0;
    //     hours++;
    // }
    document.getElementById("timer").innerHTML =  seconds + "s";
}, 1000);

     
    
    


    
    
    


