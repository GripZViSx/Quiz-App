const express = require('express');
const app = express();
const port = 3000;

app.get('/PGv30b-z', (req, res) => { 
  res.sendFile('./request_files/questions.json', { root: __dirname });
});

app.use(express.static('public'));
app.get('/', (req, res, next) => {
  res.redirect('/welcome')
});
app.get('/welcome', (req, res)=>{
   res.sendFile('welcome.html', { root: __dirname });
});

app.get('/questions', (req, res)=>{
   res.sendFile('questions.html', { root: __dirname });
});

app.get('/results', (req, res)=>{
  res.sendFile('./views/results.html', { root: __dirname });
});

app.get('*', (req, res)=>{
  res.redirect("/welcome")
});

app.listen(port, () => {
  console.log(`Port: ${port}`)
});