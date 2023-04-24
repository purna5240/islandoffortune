var quiz = [];
quiz[0] = new Question("I am the odd thing in the frame , my year of birth will take you to the next vilage int the kingdom ??" ,"1822");
quiz[1] = new Question(" I am the one for whom many wars have been fought and the deserving will have me who am I ??"   ,"throne");
quiz[2] = new Question("I am a warrior ,Symbol of my kingdom is your answer." ,"sun");
quiz[3] = new Question(" I am on a pathway and people call me a symbol of grace and beauty.Who am I?" ,"swan");
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
        // if(sessionStorage["question"]==null)
        // {
        //   sessionStorage.setItem("question",);
        // }
        // else
        // {
        //   randomQuestion=sessionStorage.getItem("question",randomQuestion.question);
        // }
      document.getElementById("question").innerHTML= randomQuestion.question;
      sessionStorage.setItem("question",randomQuestion) ;
    }
    function answer_clicked() {
      var answer = document.getElementById("ans").value;
      var solution=answer.toLowerCase();
      if (solution == randomQuestion.rightAnswer) {
        var curtime;
        var currentScore = 0;
        currentScore = currentScore+10;
        sessionStorage.setItem("score1", currentScore);
        location.href="http://localhost/puzzle/question2.php";
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
// var minutes = 0;
// var hours = 0;
if(sessionStorage["timer"]==null)
{
 sessionStorage.setItem("timer",0);
}
else{
   seconds = sessionStorage.getItem("timer");

}

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

     
    
    


    
    
    


