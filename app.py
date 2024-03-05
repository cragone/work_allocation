from flask import Flask, render_template
from flask_cors import CORS
from dotenv import load_dotenv
from functions.dataControls import get_data_from_database

# Load the .env
load_dotenv()

app = Flask(__name__)
CORS(app)

@app.route('/api/downloads-excel', methods=['GET'])
def download_excel():
    data = get_data_from_database()
    
    print(data)
    
    return str(data), 200

@app.route("/home")
def index():
    return render_template("home.html")


if __name__ == '__main__':
    app.run(debug=True)