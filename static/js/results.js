let finalScore = sessionStorage.getItem("score"),
   qLength = sessionStorage.getItem("questionLength"),
   finalName = sessionStorage.getItem("name"); // Get all the things that are required from sessionStorage
const container = $("#container"),
   maintext = $("#main-text"),
   score = $("#score"),
   tryagain = $("#try-again"); // Get DOM elements

document.addEventListener("DOMContentLoaded", () => {
   // Check if the score and question array length. This is to check if user has done the quiz and came here. If he doesn't then he will be redirected to welcome page.
   if (finalScore == null || qLength == null) {
      location.href = "/welcome";
   } else {
      // If exists than do the following things -
      score.html(`Your score is <b>${finalScore}</b> out of <b>${qLength}</b>`); // Show the score out of total questions.

      // This is a percentage based system. It shows different affirmations at different percentage.
      if (finalScore < qLength * (25 / 100)) {
         maintext.html(`Nice Try ${finalName}! Better Luck Next Time.`);
      } else if (finalScore < qLength * (50 / 100)) {
         maintext.html(`You made it to the half. Good luck ${finalName}`);
      } else if (finalScore < qLength * (75 / 100)) {
         maintext.html(`Almost there! Keep it up ${finalName}!`);
      } else if (finalScore < qLength * (95 / 100)) {
         maintext.html(`${finalName}, you nailed it.`);
      } else if (finalScore <= qLength * (100 / 100)) {
         maintext.html(`Congratulations ${finalName}. You did it perfect.`);
      }

      // Set container opacity and visibility to 1 and visible.
      container.css({
         opacity: "1",
         visibility: "visible",
      });
   }
});


// Event listener for try again button. It redirects user to welcome page.
tryagain.on("click", () => {
   location.href = "/welcome";
});

// Event listener for download button. It downloads the JSON file of all the questions.
$("#d-json").on('click', () => {
   var downloadLink = $('<a>', {
      href: '/PGv30b-z',
      download: 'quiz.json',
      style: 'display: none;'
   }).appendTo('body');

   downloadLink[0].click();
   downloadLink.remove();
});