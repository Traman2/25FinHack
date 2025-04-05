import { useState } from 'react';
import axios from 'axios';

const App = () => {
  // State for form fields
  const [age, setAge] = useState<number>(30);
  const [sex, setSex] = useState<number>(1);
  const [bmi, setBmi] = useState<number>(29.0);
  const [children, setChildren] = useState<number>(2);
  const [smoker, setSmoker] = useState<number>(1);
  const [Year, setYear] = useState<number>(2020);
  const [cpi, setCpi] = useState<number>(255.0);

  // State for prediction result
  const [prediction, setPrediction] = useState<string>('');

  // Handle form submission
  const handleSubmit = () => {
    const data = {
      age,
      sex,
      bmi,
      children,
      smoker,
      Year,
      cpi
    };

    // Axios call
    console.log(data);
    axios
    .post(
      'http://127.0.0.1:5000/predict', 
      data,  // Pass the data as the body of the POST request
      {
        headers: {
          'Content-Type': 'application/json',  // Ensure the Content-Type is set to JSON
        }
      }
    )
    .then((response) => {
      // Extract the predicted charges from the response
      const predictedCharges = response.data.predicted_charges;
      setPrediction(predictedCharges.toFixed(2));
    })
    .catch((error) => {
      // Handle errors (e.g., network errors, validation errors from API)
      console.error('Error:', error);
      setPrediction('Error in prediction');
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-6">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <div className="flex gap-8">
          {/* Form */}
          <div className="w-1/2">
            <h2 className="text-xl font-semibold mb-6">Enter Details</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                <input
                  id="age"
                  type="number"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="sex" className="block text-sm font-medium text-gray-700">Sex (1 for male, 0 for female)</label>
                <input
                  id="sex"
                  type="number"
                  value={sex}
                  onChange={(e) => setSex(Number(e.target.value))}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="bmi" className="block text-sm font-medium text-gray-700">BMI</label>
                <input
                  id="bmi"
                  type="number"
                  step="0.1"
                  value={bmi}
                  onChange={(e) => setBmi(Number(e.target.value))}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="children" className="block text-sm font-medium text-gray-700">Children</label>
                <input
                  id="children"
                  type="number"
                  value={children}
                  onChange={(e) => setChildren(Number(e.target.value))}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="smoker" className="block text-sm font-medium text-gray-700">Smoker (1 for yes, 0 for no)</label>
                <input
                  id="smoker"
                  type="number"
                  value={smoker}
                  onChange={(e) => setSmoker(Number(e.target.value))}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-700">Year</label>
                <input
                  id="year"
                  type="number"
                  value={Year}
                  onChange={(e) => setYear(Number(e.target.value))}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="cpi" className="block text-sm font-medium text-gray-700">CPI</label>
                <input
                  id="cpi"
                  type="number"
                  step="0.1"
                  value={cpi}
                  onChange={(e) => setCpi(Number(e.target.value))}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <button
                type="button"
                onClick={handleSubmit}
                className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-md"
              >
                Get Prediction
              </button>
            </div>
          </div>

          {/* Prediction Result */}
          <div className="w-1/2">
            <h2 className="text-xl font-semibold mb-6">Prediction</h2>
            <div className="bg-gray-50 p-4 rounded-md shadow-md">
              <h3 className="text-lg">Predicted Charges</h3>
              <p className="text-xl font-bold text-blue-600">{prediction ? `$${prediction}` : 'No Prediction Yet'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
