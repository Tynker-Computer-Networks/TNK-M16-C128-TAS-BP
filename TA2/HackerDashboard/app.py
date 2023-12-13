from flask import Flask, render_template, request, jsonify, send_from_directory
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

data = []

@app.route('/')
def index():
     return render_template('index.html', data=data)

# Create a /script route

# Define script() function

     # Return the static.js using send_from_directory() function


# Create collect_browser_data route

# Define function collect_browser_data()

    # Get json data from request and save it in browserData variable   


    # Get client's IP address from the request

    # Add client IP to the collected data

    # Append the browserData to data
    
    # Return json {'status': 'success'}



if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000,debug=True)
