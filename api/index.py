from flask import Flask, redirect, url_for, render_template, Response

with open("./api/request_files/questions.json") as f:
   data = f.read()

app = Flask(__name__)
@app.route("/PGv30b-z")
def jsonData():
   return Response(data, mimetype='application/json')

@app.route("/")
def home():
   return redirect(url_for("welcome"))
   
@app.route("/welcome")
def welcome():
   return render_template("welcome.html")

@app.route("/questions")
def questions():
   return render_template("questions.html")
   
@app.route("/results")
def results():
   return render_template("results.html")

@app.route('/<path:undefined_route>')
def non_route(undefined_route):
   return redirect(url_for("welcome"))
  
print("Successfully Running")