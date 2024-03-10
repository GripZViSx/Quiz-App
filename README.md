# Quiz-App
A mcq quiz app using simple HTML, CSS &amp; JS.

Preview: **[Click Here For Preview](https://quizware.vercel.app)**

😅 Yes, I like to make cool things in simple languages.

Front-end → HTML, CSS, JS

Back-end → Python (Flask)

**Working / Process**

1. It's usage is quiet simple, there's an [questions.json](https://github.com/GripZViSx/Quiz-App/blob/main/api/request_files/questions.json) file in `api/request_files`. It contains questions, options, answers. 

2. One of the routes in back-end serves this file. Then client-side javascript file fetches it using `fetch()` .

3. The data is then sorted accordingly and applied on containers/elements in `/questions`.

4. Next the responses are taken and they are compared to data values.

5. At last, the score is calculated and stored in sessionStorage of web ( can't use legit database for these stuff 😬 ).

6. Displayed score on `/results` route.

- One of the additional feature is that it takes your name (not necessarily be your name) for starting the quiz.



ℹ️ __At last__ it's free to use to use. You can fork, make changes and open issues too. You can feel free to contribute ❓ and star ⭐ this project.
