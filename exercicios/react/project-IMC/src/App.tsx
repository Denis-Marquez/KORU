import { useState } from 'react';

// Main App component
export default function App() {
  // State variables for user inputs and calculation results
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState<string>('');

  // Function to calculate BMI and determine the category
  const calculateBmi = () => {
    // Basic validation to ensure inputs are not empty
    if (!height || !weight) {
      setBmi(null);
      setBmiCategory('Por favor, insira valores válidos para altura e peso.');
      return;
    }

    // Convert string inputs to numbers
    const h = parseFloat(height);
    const w = parseFloat(weight);

    // More specific validation
    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
      setBmi(null);
      setBmiCategory('Por favor, insira números positivos.');
      return;
    }

    // Calculate BMI. Height is in cm, so we convert it to meters.
    const heightInMeters = h / 100;
    const calculatedBmi = w / (heightInMeters * heightInMeters);
    setBmi(calculatedBmi);

    // Determine the BMI category based on the calculated value
    if (calculatedBmi < 18.5) {
      setBmiCategory('Abaixo do peso');
    } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
      setBmiCategory('Peso normal');
    } else if (calculatedBmi >= 25 && calculatedBmi < 29.9) {
      setBmiCategory('Sobrepeso');
    } else if (calculatedBmi >= 30 && calculatedBmi < 34.9) {
      setBmiCategory('Obesidade grau I');
    } else if (calculatedBmi >= 35 && calculatedBmi < 39.9) {
      setBmiCategory('Obesidade grau II');
    } else {
      setBmiCategory('Obesidade grau III (mórbida)');
    }
  };

  // Helper function to get the color based on the BMI category for styling
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Peso normal':
        return 'text-green-500';
      case 'Abaixo do peso':
        return 'text-yellow-500';
      case 'Sobrepeso':
        return 'text-orange-500';
      case 'Obesidade grau I':
      case 'Obesidade grau II':
      case 'Obesidade grau III (mórbida)':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Calculadora de IMC
        </h1>

        {/* Input fields for height and weight */}
        <div className="mb-6">
          <div className="mb-4">
            <label htmlFor="height" className="block text-gray-700 font-medium mb-2">
              Altura (cm)
            </label>
            <input
              id="height"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Ex: 175"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>
          <div>
            <label htmlFor="weight" className="block text-gray-700 font-medium mb-2">
              Peso (kg)
            </label>
            <input
              id="weight"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Ex: 70"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>
        </div>

        {/* Calculate button */}
        <button
          onClick={calculateBmi}
          className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Calcular IMC
        </button>

        {/* Display results */}
        {bmi !== null && (
          <div className="mt-8 text-center bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Seu IMC é:
            </h2>
            <p className="text-5xl font-extrabold text-blue-600 mb-4">
              {bmi.toFixed(2)}
            </p>
            <p className={`text-xl font-bold ${getCategoryColor(bmiCategory)}`}>
              {bmiCategory}
            </p>
          </div>
        )}

        {/* Display messages for validation */}
        {bmi === null && bmiCategory && (
          <div className="mt-8 text-center bg-gray-50 p-6 rounded-lg border border-gray-200">
            <p className="text-lg text-red-500 font-medium">
              {bmiCategory}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
