from flask import Flask, request, jsonify
import pickle
import numpy as np

app = Flask(__name__)

# Load the pre-trained linear regression model
model = pickle.load(open('model.pkl', 'rb'))

# API route to predict charges based on the input features
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get data from the POST request (features: age, sex, bmi, children, smoker, year, cpi)
        data = request.get_json()

        # Extract values from the request JSON
        age = data['age']
        sex = data['sex']
        bmi = data['bmi']
        children = data['children']
        smoker = data['smoker']
        year = data['Year']
        cpi = data['cpi']

        # Prepare the feature array for prediction (make sure this order matches your model's input)
        input_features = np.array([[age, sex, bmi, children, smoker, year, cpi]])

        # Predict charges using the loaded model
        predicted_charges = model.predict(input_features)

        # Return the prediction as a JSON response
        return jsonify({'predicted_charges': predicted_charges[0]})

    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
