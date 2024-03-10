from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from functions.dataControls import get_incomplete
from functions.assignmentComplete import post_hours
from functions.workCreator import create_work_instance
from functions.unassigned import see_unassigned


# Load the .env
load_dotenv()

app = Flask(__name__)
CORS(app)

#this app route sends due date and assignment to the homepage
#homepage
@app.route('/api/frontpageassignments', methods=['GET'])
def frontpageassignments():
    data = get_incomplete()
    print(data)
    return data.to_json(), 200

#this app route allows for updating the hours worked on an assignment 
#homepage
@app.route('/api/updatehours', methods=['POST'])
def updatehours():
    data = request.get_json()
    title = data.get('title')
    hours = data.get('hours')
    response = post_hours(title, hours)
    print(response)
    return jsonify(response)

#app route for creating a work instance
#investigationspage
@app.route('/api/creatework', methods=['POST'])
def creatework():
    data = request.get_json()
    type = data.get('type')
    title = data.get('title')
    molecule = data.get('molecule')
    author = data.get('author')
    original_deadline = data.get('original_deadline')
    notes = data.get('notes')
    response = create_work_instance(type, title, molecule, author, original_deadline, notes)
    print(response)
    return jsonify(response)

#this app route displays unassigned assignments
#unassigned page
@app.route('/api/displayunassigned', methods=['GET'])
def displayunassigned():
    data = see_unassigned()
    print(data)
    return data.to_json(), 200



@app.route("/home")
def index():
    return render_template("home.html")


if __name__ == '__main__':
    app.run(debug=True)