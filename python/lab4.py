from flask import Flask, jsonify
from datetime import datetime

app = Flask(__name__)

@app.route('/')
def hello_world():
    return jsonify({"message": "Hello, World!"})

@app.route("/<num_socks>")
def send_socks(num_socks):
    return generate_socks(int(num_socks))

def generate_socks(*args, **kwargs):
    # Define the sock template
    default_template = {
        "sockDetails": {
            "size": "Large",
            "color": "Yellow",
            "pattern": "Plain",
            "material": "Bamboo",
            "condition": "Used",
            "forFoot": "Both"
        },
        "additionalFeatures": {
            "waterResistant": False,
            "padded": False,
            "antiBacterial": True
        },
        "addedTimestamp": datetime.now().isoformat()
    }

    # Update the default template with any provided keyword arguments
    for key in kwargs:
        if key in default_template:
            default_template[key].update(kwargs[key])

    # Create a list of socks based on the updated template
    socks = []
    num_socks = args[0]
    for _ in range(num_socks):
        sock = default_template.copy()
        sock['addedTimestamp'] = datetime.now().isoformat()
        socks.append(sock)

    return socks


if __name__ == '__main__':
    app.run(debug=True)