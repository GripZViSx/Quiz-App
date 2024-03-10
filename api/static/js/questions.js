let finalName = sessionStorage.getItem("name");
let nameExists = false;
let ansList = [];
let questionList;
let currentQ = 0;
// Check Sesssion if name exists
if (finalName == null) {
   location.href = "/"; // If it doesn't exists redirect to welcome page.
} else {
   // If it exists fetch the json file.
   fetch("/PGv30b-z")
      .then((response) => response.json())
      .then((data) => extractQuestionsfromData(data)) // Using the data.
      .catch((error) => console.error(error));
}

function extractQuestionsfromData(data) {
   questionList = data.questions; // Get the question list that containes all the objects for question, options, answer.
   nameExists = true; // Obviously if name will exists then this function will be called.
   work();
   opacity1();
}

// Setting questions based on variable 'currentQ'.
function opacity1() {
   // What this function will do is set hidden elements opacity to 1, visibility to visible.
   $('#name').html(`Name: ${finalName}`);
   $('#name').css({
      'visibility': 'visible',
      'opacity': '1'
   });
   setTimeout(() => {
      $('#container').css({
         'visibility': 'visible',
         'opacity': '1'
      });
   }, 500);

   setTimeout(() => {
      $('#controls').css({
         'visibility': 'visible',
         'opacity': '1'
      });
      $(':root').css('--pseudo-opacity', '1');
   }, 1000);
}

function work() {
   // This function will set questions, options.
   if (currentQ == 0) {
      $('#pre').css({
         'opacity': '0',
         'visibility': 'hidden'
      });
   } else if (currentQ == questionList.length - 1) {
      $('#nxt').css({
         'opacity': '0',
         'visibility': 'hidden'
      });
      $('#submit').css({
         'opacity': '1',
         'visibility': 'visible'
      });
   } else {
      $('#pre').css({
         'opacity': '1',
         'visibility': 'visible'
      });
      $('#nxt').css({
         'opacity': '1',
         'visibility': 'visible'
      });
   }
   let questionNo = $('#questionNo');
   let question = $('#question');
   let radio1 = $('#op1');
   let radio2 = $('#op2');
   let radio3 = $('#op3');
   let radio4 = $('#op4');
   let label1 = $('#label1');
   let label2 = $('#label2');
   let label3 = $('#label3');
   let label4 = $('#label4');
   questionNo.html(`Question ${currentQ + 1}/${questionList.length}`);
   question.html(`${questionList[currentQ].question}`);
   radio1.val(`${questionList[currentQ].option1}`);
   radio2.val(`${questionList[currentQ].option2}`);
   radio3.val(`${questionList[currentQ].option3}`);
   radio4.val(`${questionList[currentQ].option4}`);
   label1.html(`${questionList[currentQ].option1}`);
   label2.html(`${questionList[currentQ].option2}`);
   label3.html(`${questionList[currentQ].option3}`);
   label4.html(`${questionList[currentQ].option4}`);
}


$('#pre').on('click', () => {
   // This function handles the click of previous button and calls for previous question to be showed again.
   currentQ -= 1;
   work();
});
$('#nxt').on('click', () => {
   // This function will handle the click of next button which will act as adding values to the answerList which can be parsed or used later.
   // Also this function calls for next question to be set.
   let value = $('input[name="op"]:checked').val();
   if (ansList[currentQ] != undefined) {
      ansList[currentQ] = value;
   } else {
      ansList.push(value);
   }
   $('#options')[0].reset();
   currentQ += 1;
   work();


});

function submitClick() {
   // This function will handle the click of submit button which will finally send data to sessionStorage and redirect user to next page.
   let questionListLength = questionList.length;
   let score = 0;
   for (let n = 0; n < (questionListLength - 1); n++) {
      if (ansList[n] == questionList[n].answer) {
         score += 1;
      }
   }
   sessionStorage.setItem("questionLength", questionListLength);
   sessionStorage.setItem("score", score);

   setTimeout(() => {
      $('#submit').css('font-size', '1rem');
      $('#submit').html('Submitted');
   }, 1000);
   setTimeout(() => {
      location.href = "/results";
   }, 1500)
}

$('#submit').on('click', submitClick());

$(document).ready(() => {
   $('#options').on('keydown', function(e) {
      if (e.key === 'Enter') {
         e.preventDefault();
         submitClick();
      }
   });
   $('#options').on('submit', function(e) {
      e.preventDefault();
      submitClick();
   });
})