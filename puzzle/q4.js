var quiz = [];
quiz[0] = new Question(" I am surrounded the entire palace but you can never count me in your lifetime Who am I ??  ","stars");
quiz[1] = new Question(" I am at the entrance of the palace although I am small I contribute a lot Who am I ?? " ,"tree");
quiz[2] = new Question("I am at the entrance of the palace finding me will make you closer to the treasure I am ??" ,"horse");
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
        location.href="http://localhost/puzzle/deadend2.php";
        } 
        else { 
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

     
    
    


    
    
    


