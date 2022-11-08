class Quiz {
     constructor() {
          
          this.loadingData = ko.observable(false); // to show loader
          this.isGameStarted = ko.observable(false); // to hide startbtn and change position logo
          this.showDescription = ko.observable(false); // 
          this.showScore = ko.observable(false); // after last question

          this.data = [];
          this.currentQuestion = ko.observable({});
          this.selectedAnswer = ko.observable({});
          this.finalMessage = ko.observable();
          this.title = ko.observable("");
          this.score = ko.observable(0);
          this.index = ko.observable(0);
          //todo rename  title to descriptionTitle 
          //add new observable title 

          this.selectedAnswer.subscribe(() => {
               // if user select correct answer we increment the score
               if(this.selectedAnswer().correct){
                    this.title("Your answer is correct!");
                    this.score(this.score() + 1);
               }else{
                    this.title("Your answer is wrong!");
               }

               this.index(this.index() + 1);
               this.showDescription(true);
          });

     }

     showNextQuestion(){
          if (this.index() >= this.data.length) {
               this.finalMessage(`Your score is ${this.score()} of ${this.data.length}`);
               this.showScore(true);
          } else {
               var question = this.data[this.index()];
               this.currentQuestion(question);
               //this.title(`Question ${this.index()} of ${this.data.lenght-1}`);
               this.showDescription(false);
          }
     }

     startQuiz() {
          var self = this;
          self.isGameStarted(true);
          self.loadingData(true);
          
          $.getJSON("word.json", function(data) {
               self.data = data.questions;
               self.showNextQuestion();
          }).done(() => {
               self.loadingData(false);
              
          });
     }

     restartQuiz() {
          this.score(0);
          this.index(0);
          //this.isGameStarted(true);
          this.showDescription(false);
          this.showScore(false);
          this.startQuiz();
     }
     
     selectAnswer(answer) {
          this.selectedAnswer(answer);
     }
     
}

ko.applyBindings(new Quiz());
