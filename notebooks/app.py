from flask import Flask, request, jsonify
import pickle
import pandas as pd

app = Flask(__name__)

# Load the model from disk
with open('logreg_pipeline.pkl', 'rb') as file:
    model = pickle.load(file)

@app.route('/api/predict', methods=['POST'])
def predict():
    # Get the request data
    data = request.get_json(force=True)

     # Ensure the data is a list (even if it's just one dictionary)
    if isinstance(data, dict):
        data = [data]

    # Make a prediction
    prediction = model.predict(pd.DataFrame(data))

    # Return the prediction
    return jsonify(prediction.tolist())

if __name__ == '__main__':
    app.run(port=5000)