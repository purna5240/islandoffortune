var quiz = [];
quiz[0] = new Question(" Something is hidding me from your eyes find me I'll take you to the next question :","fort");
quiz[1] = new Question("I am hidden somewhere in the trees but I am everybody's need Find me.","well"  );
quiz[2] = new Question(" I am busy in my work and something behind me is a synonym of bag :","basket");
quiz[3] = new Question(" I am beside the well the count of your reflection is your answer :","8");
quiz[4] = new Question(" I am the minister of this kingdom and something in my attire gives you the answer :"," water drop");
var randomQuestion;
var ans;
var currentScore = 0;

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
         score=score+10;
        sessionStorage.setItem("score1",score);
        location.href="http://localhost/puzzle/deadend1.php";
        } 
        else { 
          alert("Wrong Answer Please Try again");
          sessionStorage.clear();
          location.href="http://localhost/puzzle/help.php";
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
    document.getElementById("timer").innerHTML = seconds + "s";
}, 1000);
    
    
    


