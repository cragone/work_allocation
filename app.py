from flask import Flask, render_template
from flask_cors import CORS
from dotenv import load_dotenv
from functions.dataControls import get_assignment_name, get_assigment_due_date
import pandas as pd

# Load the .env
load_dotenv()

app = Flask(__name__)
CORS(app)

@app.route('/api/frontpageassignments', methods=['GET'])
def frontpageassignments():
    assigments = get_assignment_name()
    due_date = get_assigment_due_date()

    data = pd.concat([assigments, due_date], axis=1)

    print(data)

    return data.to_json(), 200

@app.route("/home")
def index():
    return render_template("home.html")


if __name__ == '__main__':
    app.run(debug=True)