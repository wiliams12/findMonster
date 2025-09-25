from scraper import Scraper
from flask import Flask, render_template

app = Flask(__name__)
scraper = Scraper()

@app.route('/')
def hello_world():
    sales = scraper.convert_to_json(scraper.get_sales())
    return render_template("index.html")

if __name__ == '__main__':
    app.run(debug=True)