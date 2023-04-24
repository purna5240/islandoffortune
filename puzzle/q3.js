var quiz = [];
quiz[0] = new Question(" I always fly and no one in the kingdom can change me","flag");
quiz[1] = new Question("U people got addicted to me, even the king got addicted to me ,Who am I?" ,"mobile");
quiz[2] = new Question(" I am flying with pride if you catch me I'll take you a step forward" ,"flag");
quiz[3] = new Question(" You people will eat me and i am dominating the frame with my count" ,"mushroom");
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
        score=score+10;
        console.log(score);
       sessionStorage.setItem("score1",score);
        location.href="http://localhost/puzzle/question4.php";
        } 
        else { 
          sessionStorage.clear();
          alert("Wrong Answer Please Try again");
          location.href="http://localhost/puzzle/questions.php";
        
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

     
    
    


    
    
    


