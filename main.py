from scraper import Scraper
from flask import Flask, render_template, jsonify

app = Flask(__name__)
scraper = Scraper()

@app.route('/')
def hello_world():
    return render_template("index.html")

@app.route('/salesAPI')
def get_sales():
    sales = scraper.convert_to_json(scraper.get_sales())
    return jsonify(sales)

if __name__ == '__main__':
    app.run(debug=True)