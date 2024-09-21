import React, { useState } from 'react';

const LLMChat: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const handleAsk = async () => {
    const result = await fetch('https://api.groq.com/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: question })
    });
    const data = await result.json();
    setResponse(data.answer);
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Ask a question about ML Engineer Salaries
      </h2>
      
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="border border-gray-300 p-3 w-full rounded-lg shadow-sm focus:outline-none focus:border-blue-400 focus:ring focus:ring-blue-200 transition duration-150 mb-4"
        placeholder="Type your question..."
      />
      
      <button
        onClick={handleAsk}
        className="w-full bg-pink-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Ask
      </button>
      
      {response && (
        <div className="mt-6 p-4 bg-gray-50 border-l-4 border-blue-500 text-gray-700 rounded-lg">
          <p className="font-medium">Response:</p>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default LLMChat;
