from flask import Flask, render_template, jsonify
app = Flask(__name__)



@app.get("/")
def index():
    months = ["Jan", "Feb", "Mar", "Apr"]
    return render_template("index.html",)# months=jsonify(months))




if __name__ == "__main__":
    app.run(debug=True)