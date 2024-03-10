from flask import Flask, redirect, url_for, jsonify

with open("./request_files/questions.json") as f:
   data = f.read()

app = Flask(__name__)
@app.route("/PGv30b-z")
def jsonData():
   return jsonify(data)

@app.route("/")
def home():
   return "Hello World"
   #return redirect(url_for("welcome"))
   
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