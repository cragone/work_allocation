from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from functions.dataControls import get_assignment_name, get_assigment_due_date
from functions.assignmentComplete import post_hours
import pandas as pd


# Load the .env
load_dotenv()

app = Flask(__name__)
CORS(app)

#this app route sends due date and assignment to the homepage
@app.route('/api/frontpageassignments', methods=['GET'])
def frontpageassignments():
    assigments = get_assignment_name()
    due_date = get_assigment_due_date()

    data = pd.concat([assigments, due_date], axis=1)

    print(data)

    return data.to_json(), 200

#this app route allows for updating the hours worked on an assignment
@app.route('/api/updatehours', methods=['POST'])
def updatehours():
    data = request.get_json()
    title = data.get('title')
    hours = data.get('hours')
    response = post_hours(title, hours)
    print(response)
    return jsonify(response)



@app.route("/home")
def index():
    return render_template("home.html")


if __name__ == '__main__':
    app.run(debug=True)